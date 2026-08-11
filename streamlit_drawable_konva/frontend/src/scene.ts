import type { CanvasObject, CanvasScene } from "./types";

export function emptyScene(background = ""): CanvasScene {
  return { version: "konva-1", background, objects: [] };
}

export function cloneScene(scene: CanvasScene): CanvasScene {
  return JSON.parse(JSON.stringify(scene)) as CanvasScene;
}

export function newObjectId(): string {
  return `obj_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

export function normalizeScene(raw: CanvasScene | null | undefined): CanvasScene {
  if (!raw || !Array.isArray(raw.objects)) {
    return emptyScene(raw?.background ?? "");
  }
  return {
    version: raw.version || "konva-1",
    background: raw.background ?? "",
    objects: raw.objects.filter(Boolean) as CanvasObject[],
  };
}
