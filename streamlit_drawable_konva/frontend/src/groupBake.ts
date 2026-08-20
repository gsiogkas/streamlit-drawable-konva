import type Konva from "konva";

import {
  applyGroupBake,
  bakeCircleLike,
  bakeObjectFromNode,
  bakeRectLike,
  type GroupBundle,
} from "./interaction";
import type { CanvasObject, CanvasScene } from "./types";

export function computeGroupCenter(
  members: CanvasObject[],
  descriptor?: CanvasObject,
): { x: number; y: number } {
  if (descriptor?.originX != null && descriptor?.originY != null) {
    return { x: descriptor.originX, y: descriptor.originY };
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const obj of members) {
    if (obj.type === "rect" || obj.type === "crop") {
      const x = obj.x ?? 0;
      const y = obj.y ?? 0;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x + (obj.width ?? 0));
      maxY = Math.max(maxY, y + (obj.height ?? 0));
    } else if (obj.type === "circle" || obj.type === "point") {
      const x = obj.x ?? 0;
      const y = obj.y ?? 0;
      const r = obj.radius ?? 0;
      minX = Math.min(minX, x - r);
      minY = Math.min(minY, y - r);
      maxX = Math.max(maxX, x + r);
      maxY = Math.max(maxY, y + r);
    } else if (obj.points && obj.points.length >= 2) {
      const ox = obj.x ?? 0;
      const oy = obj.y ?? 0;
      for (let i = 0; i < obj.points.length; i += 2) {
        const px = ox + (obj.points[i] ?? 0);
        const py = oy + (obj.points[i + 1] ?? 0);
        minX = Math.min(minX, px);
        minY = Math.min(minY, py);
        maxX = Math.max(maxX, px);
        maxY = Math.max(maxY, py);
      }
    }
  }

  if (!Number.isFinite(minX)) {
    return { x: 0, y: 0 };
  }

  return { x: (minX + maxX) / 2, y: (minY + maxY) / 2 };
}

export function bakeGroupMembersFromWrapper(
  scene: CanvasScene,
  bundle: GroupBundle,
  groupNode: Konva.Group,
  contentNode: Konva.Group,
): CanvasObject[] {
  const contentAbs = contentNode.getAbsoluteTransform();
  const inv = contentAbs.copy().invert();
  const updates = new Map<string, CanvasObject>();

  for (const member of bundle.members) {
    const node = groupNode.findOne(`#${member.id}`) as Konva.Node | null;
    if (!node) continue;

    const local = node.getAbsoluteTransform().copy().multiply(inv);
    const decomposed = local.decompose();
    updates.set(
      member.id,
      bakeObjectFromNode(
        member,
        decomposed.x,
        decomposed.y,
        decomposed.rotation,
        Math.max(decomposed.scaleX, decomposed.scaleY),
      ),
    );
  }

  groupNode.position({ x: 0, y: 0 });
  groupNode.rotation(0);
  groupNode.scale({ x: 1, y: 1 });
  groupNode.offset({ x: 0, y: 0 });

  return applyGroupBake(scene, bundle.groupId, updates);
}

export function bakeSingleObjectFromNode(
  obj: CanvasObject,
  node: Konva.Node,
): CanvasObject {
  if (obj.type === "rect" || obj.type === "crop") {
    const baked = bakeRectLike(obj, node);
    node.scaleX(1);
    node.scaleY(1);
    return baked;
  }

  if (obj.type === "circle" || obj.type === "point") {
    const baked = bakeCircleLike(obj, node);
    node.scaleX(1);
    node.scaleY(1);
    return baked;
  }

  return {
    ...obj,
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    scaleX: node.scaleX(),
    scaleY: node.scaleY(),
  };
}
