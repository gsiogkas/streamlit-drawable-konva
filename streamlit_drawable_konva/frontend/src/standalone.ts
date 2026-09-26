/**
 * Browser IIFE entry for host embeds (Violit register_js_widget, plain HTML, etc.).
 *
 * Global: window.DrawableKonvaCanvas.mount(element, props, onChange?)
 */
import {
  mountDrawableCanvas,
  normalizeCanvasProps,
  type CanvasChangePayload,
  type MountController,
} from "./mount";
import type { CanvasDataShape } from "./types";

export type DrawableKonvaGlobal = {
  mount: (
    element: Element,
    props?: Partial<CanvasDataShape> | null,
    onChange?: (payload: CanvasChangePayload) => void,
  ) => MountController;
  normalizeProps: typeof normalizeCanvasProps;
};

const api: DrawableKonvaGlobal = {
  mount: mountDrawableCanvas,
  normalizeProps: normalizeCanvasProps,
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
