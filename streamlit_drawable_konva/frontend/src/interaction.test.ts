import { describe, expect, it } from "vitest";

import {
  effectiveInteraction,
  normalizeTransformOptions,
  projectAxisDrag,
  sceneHasInteractionFields,
} from "./interaction";
import { cloneScene, normalizeScene } from "./scene";
import type { CanvasObject, CanvasScene } from "./types";

const emptyScene: CanvasScene = { version: "konva-1", objects: [] };

describe("effectiveInteraction", () => {
  it("allows all objects in transform mode without interaction fields (0.2.2 compat)", () => {
    const obj: CanvasObject = {
      id: "r1",
      type: "rect",
      x: 0,
      y: 0,
      width: 10,
      height: 10,
    };
    const opts = normalizeTransformOptions(undefined, emptyScene);
    const ix = effectiveInteraction(obj, "transform", opts);
    expect(ix.draggable).toBe(true);
    expect(ix.scalable).toBe(true);
  });

  it("honors locked objects when interaction fields are present", () => {
    const scene: CanvasScene = {
      version: "konva-1",
      objects: [{ id: "g", type: "rect", locked: true }],
    };
    const opts = normalizeTransformOptions(undefined, scene);
    const ix = effectiveInteraction(scene.objects[0], "transform", opts);
    expect(ix.selectable).toBe(false);
    expect(ix.draggable).toBe(false);
    expect(ix.listening).toBe(false);
  });

  it("disables scale when allow_scale is false", () => {
    const obj: CanvasObject = { id: "r", type: "rect" };
    const scene: CanvasScene = { version: "konva-1", objects: [obj] };
    const opts = normalizeTransformOptions({ allow_scale: false }, scene);
    const ix = effectiveInteraction(obj, "transform", opts);
    expect(ix.scalable).toBe(false);
    expect(ix.draggable).toBe(true);
  });
});

describe("projectAxisDrag", () => {
  it("projects movement onto horizontal axis", () => {
    const start = { x: 300, y: 200 };
    const pos = { x: 350, y: 240 };
    const result = projectAxisDrag(pos, start, { x: 1, y: 0 }, -200, 200);
    expect(result.x).toBe(350);
    expect(result.y).toBe(200);
  });

  it("clamps axis distance", () => {
    const start = { x: 300, y: 200 };
    const pos = { x: 600, y: 200 };
    const result = projectAxisDrag(pos, start, { x: 1, y: 0 }, -150, 150);
    expect(result.x).toBe(450);
  });
});

describe("normalizeScene", () => {
  it("preserves lock and dragConstraint fields", () => {
    const raw: CanvasScene = {
      version: "konva-1",
      objects: [
        {
          id: "k",
          type: "circle",
          locked: true,
          dragConstraint: { type: "axis", axis: { x: 1, y: 0 } },
        },
      ],
    };
    const normalized = normalizeScene(raw);
    expect(normalized.objects[0].locked).toBe(true);
    expect(normalized.objects[0].dragConstraint?.type).toBe("axis");
    expect(sceneHasInteractionFields(normalized)).toBe(true);
  });

  it("cloneScene preserves extended fields", () => {
    const scene = normalizeScene({
      version: "konva-1",
      objects: [{ id: "g1", type: "group", children: ["a"] }],
    });
    const cloned = cloneScene(scene);
    expect(cloned.objects[0].type).toBe("group");
  });
});
