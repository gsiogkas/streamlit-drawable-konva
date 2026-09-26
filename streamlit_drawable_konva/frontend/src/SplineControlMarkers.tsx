import { FC, ReactElement } from "react";
import { Circle, Group } from "react-konva";

import { controlPointPairs } from "./spline";

export type SplineControlMarkersProps = {
  points: number[];
  offsetX?: number;
  offsetY?: number;
  stroke: string;
  radius: number;
  groupId: string;
};

/** Visual chrome for spline control points (hidden from image export). */
export const SplineControlMarkers: FC<SplineControlMarkersProps> = ({
  points,
  offsetX = 0,
  offsetY = 0,
  stroke,
  radius,
  groupId,
}): ReactElement => {
  const pairs = controlPointPairs(points);

  return (
    <Group id={groupId} listening={false}>
      {pairs.map(([x, y], index) => (
        <Circle
          key={index}
          x={offsetX + x}
          y={offsetY + y}
          radius={radius}
          stroke={stroke}
          strokeWidth={2}
          fill="white"
          listening={false}
        />
      ))}
    </Group>
  );
};
