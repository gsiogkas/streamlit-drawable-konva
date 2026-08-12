import type Konva from "konva";
import {
  CSSProperties,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Circle,
  Group,
  Image as KonvaImage,
  Layer,
  Line,
  Rect,
  Stage,
  Transformer,
} from "react-konva";
import useImage from "use-image";

import { cloneScene, emptyScene, newObjectId, normalizeScene } from "./scene";
import type {
  CanvasDataShape,
  CanvasObject,
  CanvasScene,
  ViewportState,
} from "./types";
import { identityViewport } from "./types";

type SetStateValue = (
  name: "image_data_url" | "json_data",
  value: string | CanvasScene | null,
) => void;

export type DrawableCanvasProps = CanvasDataShape & {
  setStateValue: SetStateValue;
};

type DraftShape =
  | { kind: "line"; x1: number; y1: number; x2: number; y2: number }
  | { kind: "rect"; x: number; y: number; width: number; height: number }
  | { kind: "circle"; x: number; y: number; radius: number }
  | { kind: "freedraw"; points: number[] }
  | { kind: "polygon"; points: number[] }
  | null;

const MIN_SCALE = 0.25;
const MAX_SCALE = 8;
const ZOOM_STEP = 1.15;
const TILT_STEP_DEG = 15;
const CROP_OVERLAY_FILL = "rgba(0, 0, 0, 0.45)";

type CropBounds = { x: number; y: number; width: number; height: number };

function normalizeRectBounds(
  x: number,
  y: number,
  width: number,
  height: number,
): CropBounds {
  return {
    x: Math.min(x, x + width),
    y: Math.min(y, y + height),
    width: Math.abs(width),
    height: Math.abs(height),
  };
}

type CropOverlayProps = {
  bounds: CropBounds;
  canvasWidth: number;
  canvasHeight: number;
};

const CropOverlay: FC<CropOverlayProps> = ({
  bounds,
  canvasWidth,
  canvasHeight,
}) => {
  const { x, y, width, height } = bounds;
  if (width < 1 || height < 1) return null;

  const right = x + width;
  const bottom = y + height;

  return (
    <>
      <Rect
        x={0}
        y={0}
        width={canvasWidth}
        height={y}
        fill={CROP_OVERLAY_FILL}
        listening={false}
      />
      <Rect
        x={0}
        y={bottom}
        width={canvasWidth}
        height={Math.max(0, canvasHeight - bottom)}
        fill={CROP_OVERLAY_FILL}
        listening={false}
      />
      <Rect
        x={0}
        y={y}
        width={x}
        height={height}
        fill={CROP_OVERLAY_FILL}
        listening={false}
      />
      <Rect
        x={right}
        y={y}
        width={Math.max(0, canvasWidth - right)}
        height={height}
        fill={CROP_OVERLAY_FILL}
        listening={false}
      />
    </>
  );
};

/** Convert pointer position into content coordinates (accounts for viewport). */
function pointerPos(stage: Konva.Stage | null): { x: number; y: number } | null {
  if (!stage) return null;
  const pointer = stage.getPointerPosition();
  if (!pointer) return null;
  const transform = stage.getAbsoluteTransform().copy().invert();
  // Absolute transform includes Groups; prefer content group if present.
  const content = stage.findOne("#viewport-content") as Konva.Group | null;
  if (content) {
    const inv = content.getAbsoluteTransform().copy().invert();
    return inv.point(pointer);
  }
  return transform.point(pointer);
}

const DrawableCanvas: FC<DrawableCanvasProps> = ({
  fillColor,
  strokeWidth,
  strokeColor,
  backgroundColor,
  backgroundImageURL,
  realtimeUpdateStreamlit,
  canvasHeight,
  canvasWidth,
  drawingMode,
  initialDrawing,
  displayToolbar,
  displayRadius,
  enableViewportControls,
  setStateValue,
}): ReactElement => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const drawLayerRef = useRef<Konva.Layer | null>(null);
  const contentGroupRef = useRef<Konva.Group | null>(null);
  const bgGroupRef = useRef<Konva.Group | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);
  const selectedRef = useRef<Konva.Node | null>(null);
  const lastBgRef = useRef<string>(
    `${backgroundColor}|${backgroundImageURL ?? ""}`,
  );
  const isPanningRef = useRef(false);
  const panLastRef = useRef<{ x: number; y: number } | null>(null);

  const [scene, setScene] = useState<CanvasScene>(() =>
    normalizeScene(initialDrawing),
  );
  const [history, setHistory] = useState<CanvasScene[]>([
    normalizeScene(initialDrawing),
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [draft, setDraft] = useState<DraftShape>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [viewport, setViewport] = useState<ViewportState>(() =>
    identityViewport(canvasWidth, canvasHeight),
  );
  const [bgImage] = useImage(backgroundImageURL ?? "", "anonymous");

  const objectsKey = useMemo(
    () => JSON.stringify(initialDrawing?.objects ?? []),
    [initialDrawing],
  );

  useEffect(() => {
    setViewport(identityViewport(canvasWidth, canvasHeight));
  }, [canvasWidth, canvasHeight]);

  useEffect(() => {
    const next = normalizeScene(initialDrawing);
    const bgKey = `${backgroundColor}|${backgroundImageURL ?? ""}`;
    const bgChanged = lastBgRef.current !== bgKey;
    lastBgRef.current = bgKey;

    setScene((prev) => {
      const shouldReplace =
        bgChanged ||
        next.objects.length > 0 ||
        prev.objects.length === 0;

      if (!shouldReplace) {
        return { ...prev, background: backgroundColor };
      }

      const replaced = {
        ...next,
        background: backgroundColor,
      };
      setHistory([cloneScene(replaced)]);
      setHistoryIndex(0);
      setSelectedId(null);
      setDraft(null);
      setViewport(identityViewport(canvasWidth, canvasHeight));
      return replaced;
    });
  }, [
    objectsKey,
    backgroundColor,
    backgroundImageURL,
    initialDrawing,
    canvasWidth,
    canvasHeight,
  ]);

  useEffect(() => {
    const tr = transformerRef.current;
    const stage = stageRef.current;
    if (!tr || !stage) return;

    const cropObj = scene.objects.find((o) => o.type === "crop");

    if (drawingMode === "rect_crop" && cropObj && !draft) {
      const node = stage.findOne(`#${cropObj.id}`);
      if (node) {
        selectedRef.current = node;
        tr.nodes([node]);
        tr.getLayer()?.batchDraw();
      }
      return;
    }

    if (drawingMode !== "transform" || !selectedId) {
      tr.nodes([]);
      selectedRef.current = null;
      tr.getLayer()?.batchDraw();
      return;
    }
    const node = stage.findOne(`#${selectedId}`);
    if (node) {
      selectedRef.current = node;
      tr.nodes([node]);
      tr.getLayer()?.batchDraw();
    }
  }, [selectedId, drawingMode, scene.objects, draft]);

  const pushHistory = useCallback(
    (next: CanvasScene) => {
      setHistory((prev) => {
        const trimmed = prev.slice(0, historyIndex + 1);
        return [...trimmed, cloneScene(next)];
      });
      setHistoryIndex((i) => i + 1);
    },
    [historyIndex],
  );

  const emitToStreamlit = useCallback(
    (nextScene: CanvasScene) => {
      const layer = drawLayerRef.current;
      const content = contentGroupRef.current;
      if (!layer || !content) return;

      requestAnimationFrame(() => {
        // Export at identity viewport so zoom/pan/tilt stay display-only.
        const saved = {
          x: content.x(),
          y: content.y(),
          scaleX: content.scaleX(),
          scaleY: content.scaleY(),
          rotation: content.rotation(),
        };
        const id = identityViewport(canvasWidth, canvasHeight);
        content.position({ x: id.x, y: id.y });
        content.scale({ x: id.scale, y: id.scale });
        content.rotation(id.rotation);
        const chrome = content.findOne("#crop-chrome");
        const hiddenNodes: Konva.Node[] = [];
        if (chrome) {
          hiddenNodes.push(chrome);
          chrome.visible(false);
        }
        for (const obj of scene.objects) {
          if (obj.type !== "crop") continue;
          const node = content.findOne(`#${obj.id}`);
          if (node) {
            hiddenNodes.push(node);
            node.visible(false);
          }
        }

        layer.batchDraw();

        const dataUrl = layer.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
          x: 0,
          y: 0,
          width: canvasWidth,
          height: canvasHeight,
        });

        content.position({ x: saved.x, y: saved.y });
        content.scale({ x: saved.scaleX, y: saved.scaleY });
        content.rotation(saved.rotation);
        for (const node of hiddenNodes) {
          node.visible(true);
        }
        layer.batchDraw();

        setStateValue("image_data_url", dataUrl);
        setStateValue("json_data", nextScene);
      });
    },
    [canvasHeight, canvasWidth, scene.objects, setStateValue],
  );

  const commitScene = useCallback(
    (next: CanvasScene, options?: { emit?: boolean }) => {
      const cloned = cloneScene(next);
      setScene(cloned);
      pushHistory(cloned);
      const shouldEmit = options?.emit ?? realtimeUpdateStreamlit;
      if (shouldEmit) {
        emitToStreamlit(cloned);
      }
    },
    [emitToStreamlit, pushHistory, realtimeUpdateStreamlit],
  );

  const undo = useCallback(() => {
    if (historyIndex <= 0) return;
    const nextIndex = historyIndex - 1;
    const next = cloneScene(history[nextIndex]);
    setHistoryIndex(nextIndex);
    setScene(next);
    setSelectedId(null);
    if (realtimeUpdateStreamlit) emitToStreamlit(next);
  }, [emitToStreamlit, history, historyIndex, realtimeUpdateStreamlit]);

  const redo = useCallback(() => {
    if (historyIndex >= history.length - 1) return;
    const nextIndex = historyIndex + 1;
    const next = cloneScene(history[nextIndex]);
    setHistoryIndex(nextIndex);
    setScene(next);
    setSelectedId(null);
    if (realtimeUpdateStreamlit) emitToStreamlit(next);
  }, [emitToStreamlit, history, historyIndex, realtimeUpdateStreamlit]);

  const clear = useCallback(() => {
    const next = emptyScene(backgroundColor);
    commitScene(next, { emit: true });
    setSelectedId(null);
    setDraft(null);
  }, [backgroundColor, commitScene]);

  const sendNow = useCallback(() => {
    emitToStreamlit(scene);
  }, [emitToStreamlit, scene]);

  const resetViewport = useCallback(() => {
    setViewport(identityViewport(canvasWidth, canvasHeight));
  }, [canvasHeight, canvasWidth]);

  const zoomBy = useCallback(
    (factor: number, anchor?: { x: number; y: number }) => {
      setViewport((prev) => {
        const newScale = Math.min(
          MAX_SCALE,
          Math.max(MIN_SCALE, prev.scale * factor),
        );
        if (!anchor) {
          return { ...prev, scale: newScale };
        }
        // Zoom toward pointer (stage coords): keep the content point under the cursor fixed.
        const content = contentGroupRef.current;
        if (!content) {
          return { ...prev, scale: newScale };
        }
        const inv = content.getAbsoluteTransform().copy().invert();
        const point = inv.point(anchor);
        const ox = canvasWidth / 2;
        const oy = canvasHeight / 2;
        // After scale change around group offset (ox, oy):
        // screen = groupPos + R*S*(local - offset)
        // Solve for new groupPos so the same local maps to same screen.
        const cos = Math.cos((prev.rotation * Math.PI) / 180);
        const sin = Math.sin((prev.rotation * Math.PI) / 180);
        const dx = point.x - ox;
        const dy = point.y - oy;
        const screenX = prev.x + prev.scale * (cos * dx - sin * dy);
        const screenY = prev.y + prev.scale * (sin * dx + cos * dy);
        const newX = screenX - newScale * (cos * dx - sin * dy);
        const newY = screenY - newScale * (sin * dx + cos * dy);
        return { ...prev, scale: newScale, x: newX, y: newY };
      });
    },
    [canvasHeight, canvasWidth],
  );

  const tiltBy = useCallback((degrees: number) => {
    setViewport((prev) => ({
      ...prev,
      rotation: prev.rotation + degrees,
    }));
  }, []);

  const addObject = useCallback(
    (obj: CanvasObject) => {
      commitScene({
        ...scene,
        background: backgroundColor,
        objects: [...scene.objects, obj],
      });
    },
    [backgroundColor, commitScene, scene],
  );

  const setCropObject = useCallback(
    (obj: CanvasObject) => {
      const withoutCrop = scene.objects.filter((o) => o.type !== "crop");
      commitScene({
        ...scene,
        background: backgroundColor,
        objects: [...withoutCrop, { ...obj, type: "crop" }],
      });
      setSelectedId(obj.id);
    },
    [backgroundColor, commitScene, scene],
  );

  const cropObject = useMemo(
    () => scene.objects.find((o) => o.type === "crop") ?? null,
    [scene.objects],
  );

  const activeCropBounds = useMemo((): CropBounds | null => {
    if (draft?.kind === "rect" && drawingMode === "rect_crop") {
      const bounds = normalizeRectBounds(
        draft.x,
        draft.y,
        draft.width,
        draft.height,
      );
      return bounds.width > 0 && bounds.height > 0 ? bounds : null;
    }
    if (cropObject) {
      return {
        x: cropObject.x ?? 0,
        y: cropObject.y ?? 0,
        width: cropObject.width ?? 0,
        height: cropObject.height ?? 0,
      };
    }
    return null;
  }, [cropObject, draft, drawingMode]);

  const onWheel = useCallback(
    (e: Konva.KonvaEventObject<WheelEvent>) => {
      if (!enableViewportControls) return;
      e.evt.preventDefault();
      const stage = stageRef.current;
      if (!stage) return;
      const pointer = stage.getPointerPosition();
      if (!pointer) return;
      const direction = e.evt.deltaY > 0 ? 1 / ZOOM_STEP : ZOOM_STEP;
      zoomBy(direction, pointer);
    },
    [enableViewportControls, zoomBy],
  );

  const onMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const stage = stageRef.current;
      const wantPan =
        enableViewportControls &&
        (drawingMode === "pan" ||
          e.evt.button === 1 ||
          e.evt.altKey ||
          e.evt.buttons === 4);

      if (wantPan) {
        isPanningRef.current = true;
        panLastRef.current = { x: e.evt.clientX, y: e.evt.clientY };
        return;
      }

      const pos = pointerPos(stage);
      if (!pos) return;

      if (drawingMode === "transform") {
        const clickedOnEmpty =
          e.target === stage || e.target.id() === "viewport-content";
        if (clickedOnEmpty) {
          setSelectedId(null);
        }
        return;
      }

      if (drawingMode === "pan") return;

      if (drawingMode === "point") {
        addObject({
          id: newObjectId(),
          type: "point",
          x: pos.x,
          y: pos.y,
          radius: displayRadius,
          fill: strokeColor,
          stroke: strokeColor,
          strokeWidth: 1,
        });
        return;
      }

      if (drawingMode === "polygon") {
        setDraft((prev) => {
          if (prev?.kind === "polygon") {
            return { kind: "polygon", points: [...prev.points, pos.x, pos.y] };
          }
          return { kind: "polygon", points: [pos.x, pos.y] };
        });
        return;
      }

      if (drawingMode === "freedraw") {
        setDraft({ kind: "freedraw", points: [pos.x, pos.y] });
        return;
      }

      if (drawingMode === "line") {
        setDraft({ kind: "line", x1: pos.x, y1: pos.y, x2: pos.x, y2: pos.y });
        return;
      }

      if (drawingMode === "rect") {
        setDraft({ kind: "rect", x: pos.x, y: pos.y, width: 0, height: 0 });
        return;
      }

      if (drawingMode === "rect_crop") {
        const cropObj = scene.objects.find((o) => o.type === "crop");
        if (cropObj && e.target.id() === cropObj.id) {
          setSelectedId(cropObj.id);
          return;
        }
        setSelectedId(null);
        setDraft({ kind: "rect", x: pos.x, y: pos.y, width: 0, height: 0 });
        return;
      }

      if (drawingMode === "circle") {
        setDraft({ kind: "circle", x: pos.x, y: pos.y, radius: 0 });
      }
    },
    [
      addObject,
      displayRadius,
      drawingMode,
      enableViewportControls,
      scene.objects,
      strokeColor,
    ],
  );

  const onMouseMove = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      if (isPanningRef.current && panLastRef.current) {
        const dx = e.evt.clientX - panLastRef.current.x;
        const dy = e.evt.clientY - panLastRef.current.y;
        panLastRef.current = { x: e.evt.clientX, y: e.evt.clientY };
        setViewport((prev) => ({
          ...prev,
          x: prev.x + dx,
          y: prev.y + dy,
        }));
        return;
      }

      const pos = pointerPos(stageRef.current);
      if (!pos || !draft) return;

      if (draft.kind === "freedraw") {
        setDraft({ kind: "freedraw", points: [...draft.points, pos.x, pos.y] });
        return;
      }
      if (draft.kind === "line") {
        setDraft({ ...draft, x2: pos.x, y2: pos.y });
        return;
      }
      if (draft.kind === "rect") {
        setDraft({
          ...draft,
          width: pos.x - draft.x,
          height: pos.y - draft.y,
        });
        return;
      }
      if (draft.kind === "circle") {
        const dx = pos.x - draft.x;
        const dy = pos.y - draft.y;
        setDraft({ ...draft, radius: Math.sqrt(dx * dx + dy * dy) });
      }
    },
    [draft],
  );

  const finishDraft = useCallback(() => {
    if (!draft) return;

    if (draft.kind === "freedraw" && draft.points.length >= 4) {
      addObject({
        id: newObjectId(),
        type: "freedraw",
        points: draft.points,
        stroke: strokeColor,
        strokeWidth,
        fill: "",
      });
    } else if (draft.kind === "line") {
      addObject({
        id: newObjectId(),
        type: "line",
        points: [draft.x1, draft.y1, draft.x2, draft.y2],
        stroke: strokeColor,
        strokeWidth,
      });
    } else if (draft.kind === "rect") {
      const x = Math.min(draft.x, draft.x + draft.width);
      const y = Math.min(draft.y, draft.y + draft.height);
      const width = Math.abs(draft.width);
      const height = Math.abs(draft.height);
      if (width > 1 && height > 1) {
        if (drawingMode === "rect_crop") {
          setCropObject({
            id: cropObject?.id ?? newObjectId(),
            type: "crop",
            x,
            y,
            width,
            height,
            stroke: strokeColor,
            strokeWidth,
            fill: "transparent",
          });
        } else {
          addObject({
            id: newObjectId(),
            type: "rect",
            x,
            y,
            width,
            height,
            stroke: strokeColor,
            strokeWidth,
            fill: fillColor,
          });
        }
      }
    } else if (draft.kind === "circle" && draft.radius > 1) {
      addObject({
        id: newObjectId(),
        type: "circle",
        x: draft.x,
        y: draft.y,
        radius: draft.radius,
        stroke: strokeColor,
        strokeWidth,
        fill: fillColor,
      });
    }

    if (draft.kind !== "polygon") {
      setDraft(null);
    }
  }, [
    addObject,
    cropObject,
    draft,
    drawingMode,
    fillColor,
    setCropObject,
    strokeColor,
    strokeWidth,
  ]);

  const onMouseUp = useCallback(() => {
    if (isPanningRef.current) {
      isPanningRef.current = false;
      panLastRef.current = null;
      return;
    }
    if (
      drawingMode === "polygon" ||
      drawingMode === "transform" ||
      drawingMode === "pan"
    ) {
      return;
    }
    finishDraft();
  }, [drawingMode, finishDraft]);

  const onContextMenu = useCallback(
    (e: Konva.KonvaEventObject<PointerEvent>) => {
      e.evt.preventDefault();
      if (drawingMode !== "polygon" || draft?.kind !== "polygon") return;
      if (draft.points.length < 6) {
        setDraft(null);
        return;
      }
      addObject({
        id: newObjectId(),
        type: "polygon",
        points: draft.points,
        stroke: strokeColor,
        strokeWidth,
        fill: fillColor,
      });
      setDraft(null);
    },
    [addObject, draft, drawingMode, fillColor, strokeColor, strokeWidth],
  );

  const onDblClick = useCallback(() => {
    if (drawingMode === "polygon" && draft?.kind === "polygon") {
      if (draft.points.length <= 2) {
        setDraft(null);
      } else {
        setDraft({
          kind: "polygon",
          points: draft.points.slice(0, -2),
        });
      }
      return;
    }
    if (drawingMode === "transform" && selectedId) {
      commitScene({
        ...scene,
        objects: scene.objects.filter((o) => o.id !== selectedId),
      });
      setSelectedId(null);
      return;
    }
    if (drawingMode === "rect_crop" && cropObject) {
      commitScene({
        ...scene,
        objects: scene.objects.filter((o) => o.type !== "crop"),
      });
      setSelectedId(null);
    }
  }, [commitScene, cropObject, draft, drawingMode, scene, selectedId]);

  const onObjectClick = useCallback(
    (id: string) => {
      if (drawingMode !== "transform" && drawingMode !== "rect_crop") return;
      setSelectedId(id);
    },
    [drawingMode],
  );

  const onTransformEnd = useCallback(
    (id: string, node: Konva.Node) => {
      const updated = scene.objects.map((obj) => {
        if (obj.id !== id) return obj;
        return {
          ...obj,
          x: node.x(),
          y: node.y(),
          rotation: node.rotation(),
          scaleX: node.scaleX(),
          scaleY: node.scaleY(),
          ...(obj.type === "rect" || obj.type === "crop"
            ? {
                width: Math.max(1, (obj.width ?? 0) * node.scaleX()),
                height: Math.max(1, (obj.height ?? 0) * node.scaleY()),
                scaleX: 1,
                scaleY: 1,
              }
            : {}),
          ...(obj.type === "circle" || obj.type === "point"
            ? {
                radius: Math.max(
                  1,
                  (obj.radius ?? 1) * Math.max(node.scaleX(), node.scaleY()),
                ),
                scaleX: 1,
                scaleY: 1,
              }
            : {}),
        };
      });
      if (node.getClassName() === "Rect" || node.getClassName() === "Circle") {
        node.scaleX(1);
        node.scaleY(1);
      }
      commitScene({ ...scene, objects: updated });
    },
    [commitScene, scene],
  );

  const onDragEnd = useCallback(
    (id: string, node: Konva.Node) => {
      const updated = scene.objects.map((obj) =>
        obj.id === id ? { ...obj, x: node.x(), y: node.y() } : obj,
      );
      commitScene({ ...scene, objects: updated });
    },
    [commitScene, scene],
  );

  const stageStyle: CSSProperties = {
    background: backgroundColor || "transparent",
    border: "1px solid var(--st-gray-color, #ddd)",
    display: "block",
    cursor:
      drawingMode === "pan" || isPanningRef.current ? "grab" : "crosshair",
  };

  const viewportProps = {
    id: "viewport-content",
    x: viewport.x,
    y: viewport.y,
    scaleX: viewport.scale,
    scaleY: viewport.scale,
    rotation: viewport.rotation,
    offsetX: canvasWidth / 2,
    offsetY: canvasHeight / 2,
  };

  const zoomPct = Math.round(viewport.scale * 100);

  return (
    <div
      style={{ fontFamily: "var(--st-font, sans-serif)", width: canvasWidth }}
    >
      {displayToolbar && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <button type="button" onClick={undo} disabled={historyIndex <= 0}>
            Undo
          </button>
          <button
            type="button"
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
          >
            Redo
          </button>
          <button type="button" onClick={clear}>
            Clear
          </button>
          {!realtimeUpdateStreamlit && (
            <button type="button" onClick={sendNow}>
              Send to Streamlit
            </button>
          )}
          {enableViewportControls && (
            <>
              <button type="button" onClick={() => zoomBy(ZOOM_STEP)}>
                Zoom +
              </button>
              <button type="button" onClick={() => zoomBy(1 / ZOOM_STEP)}>
                Zoom −
              </button>
              <button type="button" onClick={() => tiltBy(-TILT_STEP_DEG)}>
                Tilt ↶
              </button>
              <button type="button" onClick={() => tiltBy(TILT_STEP_DEG)}>
                Tilt ↷
              </button>
              <button type="button" onClick={resetViewport}>
                Reset view
              </button>
              <span style={{ fontSize: 12, opacity: 0.75 }}>
                {zoomPct}% · {Math.round(viewport.rotation)}°
              </span>
            </>
          )}
          <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.7 }}>
            mode: {drawingMode}
          </span>
        </div>
      )}

      <Stage
        width={canvasWidth}
        height={canvasHeight}
        ref={stageRef}
        style={stageStyle}
        onMouseDown={onMouseDown}
        onMousemove={onMouseMove}
        onMouseup={onMouseUp}
        onMouseLeave={onMouseUp}
        onContextMenu={onContextMenu}
        onDblClick={onDblClick}
        onWheel={onWheel}
      >
        <Layer listening={false}>
          <Group ref={bgGroupRef} {...viewportProps} id="viewport-bg">
            {bgImage && (
              <KonvaImage
                image={bgImage}
                width={canvasWidth}
                height={canvasHeight}
                listening={false}
              />
            )}
          </Group>
        </Layer>

        <Layer ref={drawLayerRef}>
          <Group ref={contentGroupRef} {...viewportProps}>
            {!bgImage && !!backgroundColor && (
              <Rect
                x={0}
                y={0}
                width={canvasWidth}
                height={canvasHeight}
                fill={backgroundColor}
                listening={false}
              />
            )}
            {activeCropBounds &&
              (drawingMode === "rect_crop" || cropObject) && (
                <Group id="crop-chrome" listening={false}>
                  <CropOverlay
                    bounds={activeCropBounds}
                    canvasWidth={canvasWidth}
                    canvasHeight={canvasHeight}
                  />
                </Group>
              )}
            {scene.objects.map((obj) => (
              <SceneObject
                key={obj.id}
                obj={obj}
                draggable={
                  drawingMode === "transform" ||
                  (drawingMode === "rect_crop" && obj.type === "crop")
                }
                onSelect={() => onObjectClick(obj.id)}
                onDragEnd={(node) => onDragEnd(obj.id, node)}
                onTransformEnd={(node) => onTransformEnd(obj.id, node)}
              />
            ))}

            {draft?.kind === "freedraw" && (
              <Line
                points={draft.points}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                tension={0.5}
                lineCap="round"
                lineJoin="round"
                listening={false}
              />
            )}
            {draft?.kind === "line" && (
              <Line
                points={[draft.x1, draft.y1, draft.x2, draft.y2]}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                listening={false}
              />
            )}
            {draft?.kind === "rect" && (
              <Rect
                x={Math.min(draft.x, draft.x + draft.width)}
                y={Math.min(draft.y, draft.y + draft.height)}
                width={Math.abs(draft.width)}
                height={Math.abs(draft.height)}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill={drawingMode === "rect_crop" ? "transparent" : fillColor}
                dash={drawingMode === "rect_crop" ? [8, 4] : undefined}
                listening={false}
              />
            )}
            {draft?.kind === "circle" && (
              <Circle
                x={draft.x}
                y={draft.y}
                radius={draft.radius}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill={fillColor}
                listening={false}
              />
            )}
            {draft?.kind === "polygon" && draft.points.length >= 2 && (
              <Line
                points={draft.points}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                fill={fillColor}
                closed={false}
                listening={false}
              />
            )}

            {(drawingMode === "transform" || drawingMode === "rect_crop") && (
              <Transformer
                ref={transformerRef}
                rotateEnabled={drawingMode === "transform"}
                enabledAnchors={[
                  "top-left",
                  "top-right",
                  "bottom-left",
                  "bottom-right",
                  "middle-left",
                  "middle-right",
                  "top-center",
                  "bottom-center",
                ]}
              />
            )}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

type SceneObjectProps = {
  obj: CanvasObject;
  draggable: boolean;
  onSelect: () => void;
  onDragEnd: (node: Konva.Node) => void;
  onTransformEnd: (node: Konva.Node) => void;
};

const SceneObject: FC<SceneObjectProps> = ({
  obj,
  draggable,
  onSelect,
  onDragEnd,
  onTransformEnd,
}) => {
  const common = {
    id: obj.id,
    draggable,
    rotation: obj.rotation ?? 0,
    scaleX: obj.scaleX ?? 1,
    scaleY: obj.scaleY ?? 1,
    onClick: onSelect,
    onTap: onSelect,
    onDragEnd: (e: Konva.KonvaEventObject<DragEvent>) => onDragEnd(e.target),
    onTransformEnd: (e: Konva.KonvaEventObject<Event>) =>
      onTransformEnd(e.target),
  };

  if (obj.type === "rect" || obj.type === "crop") {
    return (
      <Rect
        {...common}
        x={obj.x ?? 0}
        y={obj.y ?? 0}
        width={obj.width ?? 0}
        height={obj.height ?? 0}
        stroke={obj.stroke}
        strokeWidth={obj.strokeWidth}
        fill={obj.fill}
        dash={obj.type === "crop" ? [8, 4] : undefined}
      />
    );
  }

  if (obj.type === "circle" || obj.type === "point") {
    return (
      <Circle
        {...common}
        x={obj.x ?? 0}
        y={obj.y ?? 0}
        radius={obj.radius ?? 3}
        stroke={obj.stroke}
        strokeWidth={obj.strokeWidth}
        fill={obj.fill}
      />
    );
  }

  if (obj.type === "line" || obj.type === "freedraw") {
    return (
      <Line
        {...common}
        x={obj.x ?? 0}
        y={obj.y ?? 0}
        points={obj.points ?? []}
        stroke={obj.stroke}
        strokeWidth={obj.strokeWidth}
        tension={obj.type === "freedraw" ? 0.5 : 0}
        lineCap="round"
        lineJoin="round"
      />
    );
  }

  if (obj.type === "polygon") {
    return (
      <Line
        {...common}
        x={obj.x ?? 0}
        y={obj.y ?? 0}
        points={obj.points ?? []}
        stroke={obj.stroke}
        strokeWidth={obj.strokeWidth}
        fill={obj.fill}
        closed
      />
    );
  }

  return null;
};

export default DrawableCanvas;
