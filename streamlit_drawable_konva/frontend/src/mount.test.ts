import { describe, expect, it } from "vitest";

import { normalizeCanvasProps } from "./props";
import { emptyScene } from "./scene";

describe("normalizeCanvasProps", () => {
  it("applies defaults for an empty payload", () => {
    const props = normalizeCanvasProps({});
    expect(props.fillColor).toBe("#eee");
    expect(props.strokeWidth).toBe(20);
    expect(props.drawingMode).toBe("freedraw");
    expect(props.canvasWidth).toBe(600);
    expect(props.splineShowControlPoints).toBe(false);
    expect(props.initialDrawing).toEqual(emptyScene());
  });

  it("preserves provided fields", () => {
    const props = normalizeCanvasProps({
      drawingMode: "spline",
      canvasHeight: 320,
      splineShowControlPoints: true,
      splineControlPointRadius: 7,
    });
    expect(props.drawingMode).toBe("spline");
    expect(props.canvasHeight).toBe(320);
    expect(props.splineShowControlPoints).toBe(true);
    expect(props.splineControlPointRadius).toBe(7);
  });
});
