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
  Image as KonvaImage,
  Layer,
  Line,
  Rect,
  Stage,
  Transformer,
} from "react-konva";
import useImage from "use-image";

import { cloneScene, emptyScene, newObjectId, normalizeScene } from "./scene";
import type { CanvasDataShape, CanvasObject, CanvasScene } from "./types";

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

function pointerPos(stage: Konva.Stage | null): { x: number; y: number } | null {
  if (!stage) return null;
  const pos = stage.getPointerPosition();
  if (!pos) return null;
  return { x: pos.x, y: pos.y };
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
  setStateValue,
}): ReactElement => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const drawLayerRef = useRef<Konva.Layer | null>(null);
  const transformerRef = useRef<Konva.Transformer | null>(null);
  const selectedRef = useRef<Konva.Node | null>(null);
  const lastBgRef = useRef<string>(
    `${backgroundColor}|${backgroundImageURL ?? ""}`,
  );

  const [scene, setScene] = useState<CanvasScene>(() =>
    normalizeScene(initialDrawing),
  );
  const [history, setHistory] = useState<CanvasScene[]>([
    normalizeScene(initialDrawing),
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [draft, setDraft] = useState<DraftShape>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [bgImage] = useImage(backgroundImageURL ?? "", "anonymous");

  const objectsKey = useMemo(
    () => JSON.stringify(initialDrawing?.objects ?? []),
    [initialDrawing],
  );

  // Hydrate from Python without wiping local drawings on every Streamlit rerun.
  // Reset when background changes, or when a non-empty initial scene is provided.
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
      return replaced;
    });
  }, [objectsKey, backgroundColor, backgroundImageURL, initialDrawing]);

  useEffect(() => {
    const tr = transformerRef.current;
    const stage = stageRef.current;
    if (!tr || !stage) return;
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
  }, [selectedId, drawingMode, scene.objects]);

  const pushHistory = useCallback((next: CanvasScene) => {
    setHistory((prev) => {
      const trimmed = prev.slice(0, historyIndex + 1);
      return [...trimmed, cloneScene(next)];
    });
    setHistoryIndex((i) => i + 1);
  }, [historyIndex]);

  const emitToStreamlit = useCallback(
    (nextScene: CanvasScene) => {
      const layer = drawLayerRef.current;
      if (!layer) return;
      // Export drawing layer only so background images stay out of image_data.
      requestAnimationFrame(() => {
        const dataUrl = layer.toDataURL({
          pixelRatio: 1,
          mimeType: "image/png",
        });
        setStateValue("image_data_url", dataUrl);
        setStateValue("json_data", nextScene);
      });
    },
    [setStateValue],
  );

  const commitScene = useCallback(
    (next: CanvasScene, options?: { emit?: boolean }) => {
      const cloned = cloneScene(next);
      setScene(cloned);
      pushHistory(cloned);
      const shouldEmit =
        options?.emit ?? realtimeUpdateStreamlit;
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

  const onMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent>) => {
      const stage = stageRef.current;
      const pos = pointerPos(stage);
      if (!pos) return;

      if (drawingMode === "transform") {
        const clickedOnEmpty = e.target === stage;
        if (clickedOnEmpty) {
          setSelectedId(null);
        }
        return;
      }

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

      if (drawingMode === "circle") {
        setDraft({ kind: "circle", x: pos.x, y: pos.y, radius: 0 });
      }
    },
    [addObject, displayRadius, drawingMode, strokeColor],
  );

  const onMouseMove = useCallback(() => {
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
  }, [draft]);

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
  }, [addObject, draft, fillColor, strokeColor, strokeWidth]);

  const onMouseUp = useCallback(() => {
    if (drawingMode === "polygon" || drawingMode === "transform") return;
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
    }
  }, [commitScene, draft, drawingMode, scene, selectedId]);

  const onObjectClick = useCallback(
    (id: string) => {
      if (drawingMode !== "transform") return;
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
          ...(obj.type === "rect"
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
      // Reset node scale after baking into geometry for rect/circle.
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
  };

  return (
    <div style={{ fontFamily: "var(--st-font, sans-serif)", width: canvasWidth }}>
      {displayToolbar && (
        <div
          style={{
            display: "flex",
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
        onContextMenu={onContextMenu}
        onDblClick={onDblClick}
      >
        <Layer listening={false}>
          {bgImage && (
            <KonvaImage
              image={bgImage}
              width={canvasWidth}
              height={canvasHeight}
              listening={false}
            />
          )}
        </Layer>

        <Layer ref={drawLayerRef}>
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
          {scene.objects.map((obj) => (
            <SceneObject
              key={obj.id}
              obj={obj}
              draggable={drawingMode === "transform"}
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
              fill={fillColor}
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

          {drawingMode === "transform" && (
            <Transformer
              ref={transformerRef}
              rotateEnabled
              enabledAnchors={[
                "top-left",
                "top-right",
                "bottom-left",
                "bottom-right",
              ]}
            />
          )}
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

  if (obj.type === "rect") {
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
