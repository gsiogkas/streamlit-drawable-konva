import type { CanvasObject } from "./types";

/** Konva Catmull-Rom tension for click-through spline paths. */
export const DEFAULT_SPLINE_TENSION = 0.5;

/** Default radius for spline control-point markers. */
export const DEFAULT_SPLINE_CONTROL_POINT_RADIUS = 5;

/** Minimum control points (x,y pairs) required to commit an open spline. */
export const MIN_SPLINE_CONTROL_POINTS = 2;

export type PointDraft = { kind: "polygon" | "spline"; points: number[] };

export function splineControlPointCount(points: number[]): number {
  return Math.floor(points.length / 2);
}

export function controlPointPairs(points: number[]): Array<[number, number]> {
  const pairs: Array<[number, number]> = [];
  for (let i = 0; i + 1 < points.length; i += 2) {
    pairs.push([points[i] ?? 0, points[i + 1] ?? 0]);
  }
  return pairs;
}

export function canCommitSpline(points: number[]): boolean {
  return splineControlPointCount(points) >= MIN_SPLINE_CONTROL_POINTS;
}

export function isPointDraft(
  draft: { kind: string; points?: number[] } | null,
): draft is PointDraft {
  return draft?.kind === "polygon" || draft?.kind === "spline";
}

export function canUndoDraftPoint(
  draft: { kind: string; points?: number[] } | null,
): boolean {
  return isPointDraft(draft) && (draft.points?.length ?? 0) > 0;
}

/** Remove the last control point; returns null when the draft should be cleared. */
export function undoDraftPoint<T extends PointDraft>(draft: T): T | null {
  if (draft.points.length <= 2) return null;
  return { ...draft, points: draft.points.slice(0, -2) };
}

export function shouldShowSplineControlPoints(
  globalShow: boolean,
  obj: CanvasObject,
): boolean {
  if (obj.type !== "spline") return false;
  return globalShow || obj.showControlPoints === true;
}

export function splineControlPointsGroupId(objectId: string): string {
  return `${objectId}__control-points`;
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
