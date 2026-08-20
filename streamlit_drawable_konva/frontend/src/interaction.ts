import type { CanvasObject, CanvasScene, DrawingMode, TransformOptions } from "./types";

export const DEFAULT_TRANSFORM_OPTIONS: Required<TransformOptions> = {
  allow_select: true,
  allow_drag: true,
  allow_rotate: true,
  allow_scale: true,
  allow_delete: true,
  respect_object_locks: true,
};

export const DEFAULT_SCALE_ANCHORS = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "middle-left",
  "middle-right",
  "top-center",
  "bottom-center",
] as const;

export type EffectiveInteraction = {
  selectable: boolean;
  draggable: boolean;
  scalable: boolean;
  rotatable: boolean;
  deletable: boolean;
  listening: boolean;
};

export function sceneHasInteractionFields(scene: CanvasScene): boolean {
  return scene.objects.some(
    (obj) =>
      obj.locked === true ||
      obj.groupId !== undefined ||
      obj.type === "group" ||
      obj.draggable === false ||
      obj.selectable === false ||
      obj.scalable === false ||
      obj.rotatable === false ||
      obj.deletable === false ||
      obj.listening === false ||
      obj.dragConstraint !== undefined,
  );
}

export function normalizeTransformOptions(
  raw: TransformOptions | null | undefined,
  scene: CanvasScene,
): Required<TransformOptions> {
  const merged: Required<TransformOptions> = {
    ...DEFAULT_TRANSFORM_OPTIONS,
    ...(raw ?? {}),
  };

  if (!raw && !sceneHasInteractionFields(scene)) {
    return { ...merged, respect_object_locks: false };
  }

  return merged;
}

function modeAllowsSelect(drawingMode: DrawingMode, obj: CanvasObject): boolean {
  if (drawingMode === "transform") return true;
  if (drawingMode === "rect_crop" && obj.type === "crop") return true;
  return false;
}

function modeAllowsDrag(drawingMode: DrawingMode, obj: CanvasObject): boolean {
  if (drawingMode === "transform") return true;
  if (drawingMode === "rect_crop" && obj.type === "crop") return true;
  return false;
}

export function effectiveInteraction(
  obj: CanvasObject,
  drawingMode: DrawingMode,
  options: Required<TransformOptions>,
): EffectiveInteraction {
  if (obj.type === "group") {
    return {
      selectable: false,
      draggable: false,
      scalable: false,
      rotatable: false,
      deletable: false,
      listening: false,
    };
  }

  const lockedEffective =
    options.respect_object_locks && obj.locked === true;

  let selectableEffective =
    !lockedEffective &&
    obj.selectable !== false &&
    obj.listening !== false &&
    options.allow_select &&
    modeAllowsSelect(drawingMode, obj);

  if (obj.draggable === false && obj.selectable !== true) {
    selectableEffective = false;
  }

  const draggableEffective =
    selectableEffective &&
    obj.draggable !== false &&
    options.allow_drag &&
    modeAllowsDrag(drawingMode, obj);

  const scalableEffective =
    selectableEffective &&
    obj.scalable !== false &&
    options.allow_scale;

  const rotatableEffective =
    selectableEffective &&
    obj.rotatable !== false &&
    options.allow_rotate;

  const deletableEffective =
    selectableEffective &&
    obj.deletable !== false &&
    options.allow_delete;

  const listeningEffective =
    obj.listening !== false && !lockedEffective;

  return {
    selectable: selectableEffective,
    draggable: draggableEffective,
    scalable: scalableEffective,
    rotatable: rotatableEffective,
    deletable: deletableEffective,
    listening: listeningEffective,
  };
}

export function normalizeAxis(axis: { x: number; y: number }): { x: number; y: number } {
  const len = Math.hypot(axis.x, axis.y);
  if (len < 1e-9) return { x: 1, y: 0 };
  return { x: axis.x / len, y: axis.y / len };
}

export function projectAxisDrag(
  pos: { x: number; y: number },
  start: { x: number; y: number },
  axis: { x: number; y: number },
  min?: number,
  max?: number,
): { x: number; y: number } {
  const u = normalizeAxis(axis);
  const dx = pos.x - start.x;
  const dy = pos.y - start.y;
  let t = dx * u.x + dy * u.y;
  if (min != null) t = Math.max(min, t);
  if (max != null) t = Math.min(max, t);
  return {
    x: start.x + t * u.x,
    y: start.y + t * u.y,
  };
}

export type GroupBundle = {
  groupId: string;
  descriptor?: CanvasObject;
  members: CanvasObject[];
};

export function resolveGroupId(obj: CanvasObject, scene: CanvasScene): string | null {
  if (obj.type === "group") return null;
  if (obj.dragConstraint) return null;
  if (obj.groupId) return obj.groupId;
  return null;
}

export function buildGroupBundles(scene: CanvasScene): GroupBundle[] {
  const descriptors = new Map<string, CanvasObject>();
  for (const obj of scene.objects) {
    if (obj.type === "group") {
      descriptors.set(obj.id, obj);
    }
  }

  const membersByGroup = new Map<string, CanvasObject[]>();
  for (const obj of scene.objects) {
    const gid = resolveGroupId(obj, scene);
    if (!gid) continue;
    const list = membersByGroup.get(gid) ?? [];
    list.push(obj);
    membersByGroup.set(gid, list);
  }

  return Array.from(membersByGroup.entries()).map(([groupId, members]) => ({
    groupId,
    descriptor: descriptors.get(groupId),
    members,
  }));
}

export function getUngroupedObjects(scene: CanvasScene): CanvasObject[] {
  const groupedIds = new Set<string>();
  for (const bundle of buildGroupBundles(scene)) {
    for (const member of bundle.members) {
      groupedIds.add(member.id);
    }
  }

  return scene.objects.filter(
    (obj) => obj.type !== "group" && !groupedIds.has(obj.id),
  );
}

export function getGroupInteraction(
  bundle: GroupBundle,
  drawingMode: DrawingMode,
  options: Required<TransformOptions>,
): EffectiveInteraction {
  const descriptor = bundle.descriptor;
  const synthetic: CanvasObject = {
    id: bundle.groupId,
    type: "rect",
    locked: descriptor?.locked,
    draggable: descriptor?.draggable,
    selectable: descriptor?.selectable,
    listening: descriptor?.listening,
    scalable: descriptor?.scalable ?? false,
    rotatable: descriptor?.rotatable,
    deletable: descriptor?.deletable,
  };
  return effectiveInteraction(synthetic, drawingMode, options);
}

export function groupWrapId(groupId: string): string {
  return `group-wrap-${groupId}`;
}

export function parseGroupWrapId(nodeId: string): string | null {
  return nodeId.startsWith("group-wrap-") ? nodeId.slice("group-wrap-".length) : null;
}

export function selectionTargetForObject(
  obj: CanvasObject,
  scene: CanvasScene,
): string {
  const gid = resolveGroupId(obj, scene);
  if (gid) return groupWrapId(gid);
  return obj.id;
}

export function bakeRectLike(obj: CanvasObject, node: {
  x: () => number;
  y: () => number;
  rotation: () => number;
  scaleX: () => number;
  scaleY: () => number;
}): CanvasObject {
  return {
    ...obj,
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    width: Math.max(1, (obj.width ?? 0) * node.scaleX()),
    height: Math.max(1, (obj.height ?? 0) * node.scaleY()),
    scaleX: 1,
    scaleY: 1,
  };
}

export function bakeCircleLike(obj: CanvasObject, node: {
  x: () => number;
  y: () => number;
  rotation: () => number;
  scaleX: () => number;
  scaleY: () => number;
}): CanvasObject {
  return {
    ...obj,
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    radius: Math.max(1, (obj.radius ?? 1) * Math.max(node.scaleX(), node.scaleY())),
    scaleX: 1,
    scaleY: 1,
  };
}

export function bakePointBased(
  obj: CanvasObject,
  absX: number,
  absY: number,
  rotation: number,
  scale: number,
): CanvasObject {
  const ox = obj.x ?? 0;
  const oy = obj.y ?? 0;
  const points = obj.points ?? [];
  const cos = Math.cos((rotation * Math.PI) / 180);
  const sin = Math.sin((rotation * Math.PI) / 180);
  const bakedPoints: number[] = [];

  for (let i = 0; i < points.length; i += 2) {
    const lx = (points[i] ?? 0) + ox;
    const ly = (points[i + 1] ?? 0) + oy;
    const sx = lx * scale;
    const sy = ly * scale;
    const rx = sx * cos - sy * sin + absX;
    const ry = sx * sin + sy * cos + absY;
    bakedPoints.push(rx, ry);
  }

  return {
    ...obj,
    x: 0,
    y: 0,
    points: bakedPoints,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
  };
}

export function bakeObjectFromNode(obj: CanvasObject, absX: number, absY: number, rotation = 0, scale = 1): CanvasObject {
  if (obj.type === "rect" || obj.type === "crop") {
    const width = Math.max(1, (obj.width ?? 0) * scale);
    const height = Math.max(1, (obj.height ?? 0) * scale);
    return {
      ...obj,
      x: absX,
      y: absY,
      width,
      height,
      rotation: (obj.rotation ?? 0) + rotation,
      scaleX: 1,
      scaleY: 1,
    };
  }

  if (obj.type === "circle" || obj.type === "point") {
    return {
      ...obj,
      x: absX,
      y: absY,
      rotation: (obj.rotation ?? 0) + rotation,
      radius: Math.max(1, (obj.radius ?? 1) * scale),
      scaleX: 1,
      scaleY: 1,
    };
  }

  if (obj.type === "line" || obj.type === "polygon" || obj.type === "freedraw") {
    return bakePointBased(obj, absX, absY, rotation, scale);
  }

  return { ...obj, x: absX, y: absY, rotation: (obj.rotation ?? 0) + rotation };
}

export function applyGroupBake(
  scene: CanvasScene,
  groupId: string,
  updates: Map<string, CanvasObject>,
): CanvasObject[] {
  return scene.objects.map((obj) => updates.get(obj.id) ?? obj);
}
