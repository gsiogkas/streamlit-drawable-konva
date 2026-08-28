import { describe, expect, it } from "vitest";

import {
  canCommitSpline,
  DEFAULT_SPLINE_TENSION,
  lineTension,
  MIN_SPLINE_CONTROL_POINTS,
  splineControlPointCount,
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
});
