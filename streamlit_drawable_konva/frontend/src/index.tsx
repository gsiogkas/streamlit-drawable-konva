import {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";

import { mountDrawableCanvas, type MountController } from "./mount";
import type { CanvasDataShape, CanvasStateShape } from "./types";

type Bridge = {
  controller: MountController;
  setStateValue: FrontendRendererArgs<
    CanvasStateShape,
    CanvasDataShape
  >["setStateValue"];
};

const bridges = new WeakMap<
  FrontendRendererArgs["parentElement"],
  Bridge
>();

const CanvasRoot: FrontendRenderer<CanvasStateShape, CanvasDataShape> = (
  args,
) => {
  const { data, parentElement, setStateValue } = args;
  const rootElement = parentElement.querySelector(".react-root");

  if (!rootElement) {
    throw new Error("Unexpected: React root element not found");
  }

  let bridge = bridges.get(parentElement);
  if (!bridge) {
    const holder: Bridge = {
      setStateValue,
      controller: null as unknown as MountController,
    };
    holder.controller = mountDrawableCanvas(rootElement, data, (payload) => {
      holder.setStateValue("image_data_url", payload.image_data_url);
      holder.setStateValue("json_data", payload.json_data);
    });
    bridges.set(parentElement, holder);
    bridge = holder;
  } else {
    bridge.setStateValue = setStateValue;
    bridge.controller.update(data);
  }

  return () => {
    const existing = bridges.get(parentElement);
    if (existing) {
      existing.controller.destroy();
      bridges.delete(parentElement);
    }
  };
};

export default CanvasRoot;
