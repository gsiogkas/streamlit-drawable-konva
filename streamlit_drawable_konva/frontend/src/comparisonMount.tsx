import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";

import ImageComparison, { type ImageComparisonProps } from "./ImageComparison";
import {
  normalizeComparisonProps,
  type ComparisonDataShape,
} from "./comparisonProps";

export type { ComparisonDataShape } from "./comparisonProps";
export { normalizeComparisonProps } from "./comparisonProps";

export type ComparisonMountController = {
  update: (props: Partial<ComparisonDataShape>) => void;
  destroy: () => void;
};

const roots = new WeakMap<Element, Root>();

export function mountImageComparison(
  element: Element,
  props: Partial<ComparisonDataShape> | null | undefined,
): ComparisonMountController {
  let current = normalizeComparisonProps(props);

  const render = () => {
    let root = roots.get(element);
    if (!root) {
      root = createRoot(element);
      roots.set(element, root);
    }
    const viewProps: ImageComparisonProps = { ...current };
    root.render(
      <StrictMode>
        <ImageComparison {...viewProps} />
      </StrictMode>,
    );
  };

  render();

  return {
    update(next) {
      current = normalizeComparisonProps({ ...current, ...next });
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
