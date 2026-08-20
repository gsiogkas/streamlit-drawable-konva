import type Konva from "konva";
import { FC, ReactElement, useRef } from "react";
import { Circle, Line, Rect } from "react-konva";

import { projectAxisDrag, type EffectiveInteraction } from "./interaction";
import type { CanvasObject } from "./types";

type SceneObjectProps = {
  obj: CanvasObject;
  interaction: EffectiveInteraction;
  onSelect: () => void;
  onDragEnd: (node: Konva.Node) => void;
  onTransformEnd: (node: Konva.Node) => void;
};

export const SceneObject: FC<SceneObjectProps> = ({
  obj,
  interaction,
  onSelect,
  onDragEnd,
  onTransformEnd,
}): ReactElement | null => {
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  if (obj.type === "group") return null;

  const common = {
    id: obj.id,
    draggable: interaction.draggable,
    listening: interaction.listening,
    rotation: obj.rotation ?? 0,
    scaleX: obj.scaleX ?? 1,
    scaleY: obj.scaleY ?? 1,
    onClick: interaction.selectable ? onSelect : undefined,
    onTap: interaction.selectable ? onSelect : undefined,
    onDragStart: (e: Konva.KonvaEventObject<DragEvent>) => {
      if (!interaction.draggable) return;
      dragStartRef.current = { x: e.target.x(), y: e.target.y() };
    },
    onDragMove: (e: Konva.KonvaEventObject<DragEvent>) => {
      if (!interaction.draggable || !dragStartRef.current) return;
      const constraint = obj.dragConstraint;
      if (!constraint || constraint.type !== "axis" || !constraint.axis) return;
      const projected = projectAxisDrag(
        { x: e.target.x(), y: e.target.y() },
        dragStartRef.current,
        constraint.axis,
        constraint.min,
        constraint.max,
      );
      e.target.position(projected);
    },
    onDragEnd: (e: Konva.KonvaEventObject<DragEvent>) => {
      dragStartRef.current = null;
      onDragEnd(e.target);
    },
    onTransformEnd: (e: Konva.KonvaEventObject<Event>) => onTransformEnd(e.target),
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
