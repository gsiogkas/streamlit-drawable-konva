import type { CanvasObject } from "./types";

/** Konva Catmull-Rom tension for click-through spline paths. */
export const DEFAULT_SPLINE_TENSION = 0.5;

/** Minimum control points (x,y pairs) required to commit an open spline. */
export const MIN_SPLINE_CONTROL_POINTS = 2;

export function splineControlPointCount(points: number[]): number {
  return Math.floor(points.length / 2);
}

export function canCommitSpline(points: number[]): boolean {
  return splineControlPointCount(points) >= MIN_SPLINE_CONTROL_POINTS;
}

export function lineTension(obj: CanvasObject): number {
  if (obj.type === "freedraw") return 0.5;
  if (obj.type === "spline") return obj.tension ?? DEFAULT_SPLINE_TENSION;
  return 0;
}

export function isPointBasedCurve(
  type: CanvasObject["type"],
): type is "line" | "polygon" | "freedraw" | "spline" {
  return type === "line" || type === "polygon" || type === "freedraw" || type === "spline";
}
