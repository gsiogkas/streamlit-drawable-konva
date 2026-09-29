/**
 * Browser IIFE entry for host embeds (Violit register_js_widget, plain HTML, etc.).
 *
 * Global:
 *   window.DrawableKonvaCanvas.mount(element, props, onChange?)
 *   window.DrawableKonvaCanvas.mountImageComparison(element, props)
 */
import {
  mountDrawableCanvas,
  normalizeCanvasProps,
  type CanvasChangePayload,
  type MountController,
} from "./mount";
import {
  mountImageComparison,
  normalizeComparisonProps,
  type ComparisonDataShape,
  type ComparisonMountController,
} from "./comparisonMount";
import type { CanvasDataShape } from "./types";

export type DrawableKonvaGlobal = {
  mount: (
    element: Element,
    props?: Partial<CanvasDataShape> | null,
    onChange?: (payload: CanvasChangePayload) => void,
  ) => MountController;
  mountImageComparison: (
    element: Element,
    props?: Partial<ComparisonDataShape> | null,
  ) => ComparisonMountController;
  normalizeProps: typeof normalizeCanvasProps;
  normalizeComparisonProps: typeof normalizeComparisonProps;
};

const api: DrawableKonvaGlobal = {
  mount: mountDrawableCanvas,
  mountImageComparison,
  normalizeProps: normalizeCanvasProps,
  normalizeComparisonProps,
};

declare global {
  interface Window {
    DrawableKonvaCanvas?: DrawableKonvaGlobal;
  }
}

if (typeof window !== "undefined") {
  window.DrawableKonvaCanvas = api;
}

export default api;
