import { describe, expect, it } from "vitest";

import { normalizeComparisonProps } from "./comparisonProps";

describe("normalizeComparisonProps", () => {
  it("applies defaults", () => {
    const props = normalizeComparisonProps({});
    expect(props.label1).toBe("Before");
    expect(props.label2).toBe("After");
    expect(props.width).toBe(700);
    expect(props.startingPosition).toBe(50);
    expect(props.showLabels).toBe(true);
  });

  it("clamps starting position", () => {
    expect(normalizeComparisonProps({ startingPosition: -10 }).startingPosition).toBe(
      0,
    );
    expect(normalizeComparisonProps({ startingPosition: 150 }).startingPosition).toBe(
      100,
    );
  });
});
