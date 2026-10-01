import type { DrawingMode } from "./types";

/** All supported drawing modes (order used by the in-canvas tool picker). */
export const ALL_DRAWING_MODES: readonly DrawingMode[] = [
  "freedraw",
  "line",
  "rect",
  "rect_crop",
  "circle",
  "point",
  "polygon",
  "spline",
  "transform",
  "pan",
] as const;

export type ToolPickerStyle = "labels" | "icons";

const MODE_SET = new Set<string>(ALL_DRAWING_MODES);

export const TOOL_PICKER_LABELS: Record<DrawingMode, string> = {
  freedraw: "Draw",
  line: "Line",
  rect: "Rect",
  rect_crop: "Crop",
  circle: "Circle",
  point: "Point",
  polygon: "Poly",
  spline: "Spline",
  transform: "Move",
  pan: "Pan",
};

/** Full titles for tooltips (icons mode especially). */
export const TOOL_PICKER_TITLES: Record<DrawingMode, string> = {
  freedraw: "Free draw",
  line: "Line",
  rect: "Rectangle",
  rect_crop: "Crop rectangle",
  circle: "Circle",
  point: "Point",
  polygon: "Polygon",
  spline: "Spline",
  transform: "Transform / select",
  pan: "Pan",
};

export function isDrawingMode(value: unknown): value is DrawingMode {
  return typeof value === "string" && MODE_SET.has(value);
}

export function normalizeToolPickerStyle(
  value: unknown,
): ToolPickerStyle {
  return value === "icons" ? "icons" : "labels";
}

/**
 * Resolve the allow-list. ``null`` / ``undefined`` / empty → all modes.
 * Unknown names are dropped; if nothing remains, fall back to all modes.
 */
export function normalizeTools(
  tools: readonly string[] | null | undefined,
): DrawingMode[] {
  if (!tools || tools.length === 0) {
    return [...ALL_DRAWING_MODES];
  }
  const allowed = tools.filter(isDrawingMode);
  return allowed.length > 0 ? allowed : [...ALL_DRAWING_MODES];
}

/** Prefer ``preferred`` when allowed; otherwise the first allow-listed tool. */
export function clampDrawingMode(
  preferred: unknown,
  tools: readonly string[] | null | undefined,
): DrawingMode {
  const allowed = normalizeTools(tools);
  if (isDrawingMode(preferred) && allowed.includes(preferred)) {
    return preferred;
  }
  return allowed[0] ?? "freedraw";
}
