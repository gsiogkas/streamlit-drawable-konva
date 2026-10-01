import { describe, expect, it } from "vitest";

import { clampDrawingMode, normalizeTools } from "./tools";

describe("normalizeTools", () => {
  it("returns all modes for null/empty", () => {
    expect(normalizeTools(null).length).toBeGreaterThan(5);
    expect(normalizeTools([]).length).toBeGreaterThan(5);
  });

  it("filters to known modes only", () => {
    expect(normalizeTools(["line", "nope", "rect"])).toEqual(["line", "rect"]);
  });

  it("falls back to all when only unknowns are given", () => {
    expect(normalizeTools(["nope"]).length).toBeGreaterThan(5);
  });
});

describe("clampDrawingMode", () => {
  it("keeps preferred when allowed", () => {
    expect(clampDrawingMode("rect", ["line", "rect"])).toBe("rect");
  });

  it("falls back to first allow-listed tool", () => {
    expect(clampDrawingMode("freedraw", ["line", "rect"])).toBe("line");
  });
});
