import { emptyScene } from "./scene";
import type { CanvasDataShape } from "./types";

/** Normalize host props to the canvas component shape (shared by Streamlit / Violit). */
export function normalizeCanvasProps(
  data: Partial<CanvasDataShape> | null | undefined,
): CanvasDataShape {
  return {
    fillColor: data?.fillColor ?? "#eee",
    strokeWidth: data?.strokeWidth ?? 20,
    strokeColor: data?.strokeColor ?? "black",
    backgroundColor: data?.backgroundColor ?? "",
    backgroundImageURL: data?.backgroundImageURL ?? null,
    realtimeUpdateStreamlit: data?.realtimeUpdateStreamlit ?? true,
    canvasHeight: data?.canvasHeight ?? 400,
    canvasWidth: data?.canvasWidth ?? 600,
    drawingMode: data?.drawingMode ?? "freedraw",
    initialDrawing: data?.initialDrawing ?? emptyScene(),
    displayToolbar: data?.displayToolbar ?? true,
    displayRadius: data?.displayRadius ?? 3,
    enableViewportControls: data?.enableViewportControls ?? true,
    transformOptions: data?.transformOptions ?? {},
    splineShowControlPoints: data?.splineShowControlPoints ?? false,
    splineControlPointRadius: data?.splineControlPointRadius ?? 5,
  };
}
