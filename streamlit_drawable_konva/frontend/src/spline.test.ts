import { describe, expect, it } from "vitest";

import {
  canCommitSpline,
  canUndoDraftPoint,
  controlPointPairs,
  DEFAULT_SPLINE_TENSION,
  isPointDraft,
  lineTension,
  MIN_SPLINE_CONTROL_POINTS,
  shouldShowSplineControlPoints,
  splineControlPointCount,
  undoDraftPoint,
} from "./spline";
import type { CanvasObject } from "./types";

describe("spline helpers", () => {
  it("counts control points from flat coordinates", () => {
    expect(splineControlPointCount([0, 0, 10, 10, 20, 5])).toBe(3);
  });

  it("requires at least two control points to commit", () => {
    expect(MIN_SPLINE_CONTROL_POINTS).toBe(2);
    expect(canCommitSpline([0, 0])).toBe(false);
    expect(canCommitSpline([0, 0, 10, 10])).toBe(true);
  });

  it("uses default tension for spline objects", () => {
    const spline: CanvasObject = {
      id: "s1",
      type: "spline",
      points: [0, 0, 50, 50],
    };
    expect(lineTension(spline)).toBe(DEFAULT_SPLINE_TENSION);
  });

  it("honors stored tension on spline objects", () => {
    const spline: CanvasObject = {
      id: "s2",
      type: "spline",
      points: [0, 0, 50, 50],
      tension: 0.25,
    };
    expect(lineTension(spline)).toBe(0.25);
  });

  it("keeps freedraw tension separate from spline", () => {
    const freedraw: CanvasObject = {
      id: "f1",
      type: "freedraw",
      points: [0, 0, 1, 1],
    };
    expect(lineTension(freedraw)).toBe(0.5);
  });

  it("parses control point pairs", () => {
    expect(controlPointPairs([0, 0, 10, 20, 30, 40])).toEqual([
      [0, 0],
      [10, 20],
      [30, 40],
    ]);
  });

  it("undoes draft points one at a time", () => {
    const draft = { kind: "spline" as const, points: [0, 0, 10, 10, 20, 5] };
    expect(undoDraftPoint(draft)?.points).toEqual([0, 0, 10, 10]);
    expect(canUndoDraftPoint(draft)).toBe(true);
    expect(undoDraftPoint({ kind: "spline", points: [0, 0] })).toBeNull();
  });

  it("detects point drafts for undo", () => {
    expect(isPointDraft({ kind: "spline", points: [1, 2] })).toBe(true);
    expect(isPointDraft({ kind: "line", points: [1, 2] })).toBe(false);
    expect(canUndoDraftPoint(null)).toBe(false);
  });

  it("shows markers from global or per-object flag", () => {
    const spline: CanvasObject = {
      id: "s1",
      type: "spline",
      points: [0, 0, 10, 10],
      showControlPoints: true,
    };
    expect(shouldShowSplineControlPoints(false, spline)).toBe(true);
    expect(
      shouldShowSplineControlPoints(false, { id: "s2", type: "spline", points: [] }),
    ).toBe(false);
  });
});
