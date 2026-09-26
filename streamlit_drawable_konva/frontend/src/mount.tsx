import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import DrawableCanvas from "./DrawableCanvas";
import { normalizeCanvasProps } from "./props";
import type { CanvasDataShape, CanvasScene } from "./types";

export { normalizeCanvasProps } from "./props";

export type CanvasChangePayload = {
  image_data_url: string | null;
  json_data: CanvasScene | null;
};

export type SetStateValue = (
  name: "image_data_url" | "json_data",
  value: string | CanvasScene | null,
) => void;

export type MountController = {
  update: (props: Partial<CanvasDataShape>) => void;
  destroy: () => void;
};

const roots = new WeakMap<Element, Root>();

/**
 * Host-agnostic mount for DrawableCanvas.
 *
 * Used by Streamlit CCv2 (`index.tsx`) and by the browser IIFE (`standalone.ts`)
 * for embeds such as Violit `register_js_widget`.
 */
export function mountDrawableCanvas(
  element: Element,
  props: Partial<CanvasDataShape> | null | undefined,
  onChange?: (payload: CanvasChangePayload) => void,
): MountController {
  let current = normalizeCanvasProps(props);
  let latest: CanvasChangePayload = {
    image_data_url: null,
    json_data: null,
  };

  const setStateValue: SetStateValue = (name, value) => {
    if (name === "image_data_url") {
      latest = {
        ...latest,
        image_data_url: typeof value === "string" ? value : null,
      };
    } else {
      latest = {
        ...latest,
        json_data: (value as CanvasScene | null) ?? null,
      };
    }
    onChange?.(latest);
  };

  const render = () => {
    let root = roots.get(element);
    if (!root) {
      root = createRoot(element);
      roots.set(element, root);
    }
    root.render(
      <StrictMode>
        <DrawableCanvas {...current} setStateValue={setStateValue} />
      </StrictMode>,
    );
  };

  render();

  return {
    update(next) {
      current = normalizeCanvasProps({ ...current, ...next });
      render();
    },
    destroy() {
      const root = roots.get(element);
      if (root) {
        root.unmount();
        roots.delete(element);
      }
      if (element instanceof HTMLElement) {
        element.replaceChildren();
      }
    },
  };
}
