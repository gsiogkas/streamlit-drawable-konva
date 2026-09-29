import {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";

import {
  mountImageComparison,
  type ComparisonDataShape,
  type ComparisonMountController,
} from "./comparisonMount";

type Bridge = {
  controller: ComparisonMountController;
};

const bridges = new WeakMap<
  FrontendRendererArgs["parentElement"],
  Bridge
>();

/** Empty state — display-only comparison slider. */
type ComparisonStateShape = Record<string, never>;

const ComparisonRoot: FrontendRenderer<
  ComparisonStateShape,
  ComparisonDataShape
> = (args) => {
  const { data, parentElement } = args;
  const rootElement = parentElement.querySelector(".react-root");

  if (!rootElement) {
    throw new Error("Unexpected: React root element not found");
  }

  let bridge = bridges.get(parentElement);
  if (!bridge) {
    bridges.set(parentElement, {
      controller: mountImageComparison(rootElement, data),
    });
  } else {
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

export default ComparisonRoot;
