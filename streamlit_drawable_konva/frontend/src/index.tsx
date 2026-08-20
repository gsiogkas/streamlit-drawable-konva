import {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";
import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";

import DrawableCanvas from "./DrawableCanvas";
import type { CanvasDataShape, CanvasStateShape } from "./types";

const reactRoots: WeakMap<FrontendRendererArgs["parentElement"], Root> =
  new WeakMap();

const CanvasRoot: FrontendRenderer<CanvasStateShape, CanvasDataShape> = (
  args,
) => {
  const { data, parentElement, setStateValue } = args;
  const rootElement = parentElement.querySelector(".react-root");

  if (!rootElement) {
    throw new Error("Unexpected: React root element not found");
  }

  let reactRoot = reactRoots.get(parentElement);
  if (!reactRoot) {
    reactRoot = createRoot(rootElement);
    reactRoots.set(parentElement, reactRoot);
  }

  reactRoot.render(
    <StrictMode>
      <DrawableCanvas
        fillColor={data.fillColor ?? "#eee"}
        strokeWidth={data.strokeWidth ?? 20}
        strokeColor={data.strokeColor ?? "black"}
        backgroundColor={data.backgroundColor ?? ""}
        backgroundImageURL={data.backgroundImageURL ?? null}
        realtimeUpdateStreamlit={data.realtimeUpdateStreamlit ?? true}
        canvasHeight={data.canvasHeight ?? 400}
        canvasWidth={data.canvasWidth ?? 600}
        drawingMode={data.drawingMode ?? "freedraw"}
        initialDrawing={data.initialDrawing}
        displayToolbar={data.displayToolbar ?? true}
        displayRadius={data.displayRadius ?? 3}
        enableViewportControls={data.enableViewportControls ?? true}
        transformOptions={data.transformOptions ?? {}}
        setStateValue={setStateValue}
      />
    </StrictMode>,
  );

  return () => {
    const existing = reactRoots.get(parentElement);
    if (existing) {
      existing.unmount();
      reactRoots.delete(parentElement);
    }
  };
};

export default CanvasRoot;
