export type DrawingMode =
  | "freedraw"
  | "line"
  | "rect"
  | "rect_crop"
  | "circle"
  | "point"
  | "polygon"
  | "transform"
  | "pan";

export type DragConstraint = {
  type: "axis" | "none";
  axis?: { x: number; y: number };
  min?: number;
  max?: number;
};

export type CanvasObject = {
  id: string;
  type:
    | "line"
    | "rect"
    | "circle"
    | "point"
    | "polygon"
    | "freedraw"
    | "crop"
    | "group";
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  radius?: number;
  points?: number[];
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  rotation?: number;
  scaleX?: number;
  scaleY?: number;
  locked?: boolean;
  draggable?: boolean;
  selectable?: boolean;
  listening?: boolean;
  scalable?: boolean;
  rotatable?: boolean;
  deletable?: boolean;
  groupId?: string;
  children?: string[];
  originX?: number;
  originY?: number;
  dragConstraint?: DragConstraint;
};

export type SceneMeta = {
  lastChange?: {
    type: "drag" | "transform" | "add" | "delete" | "clear";
    ids: string[];
  };
};

export type CanvasScene = {
  version: string;
  background?: string;
  objects: CanvasObject[];
  meta?: SceneMeta;
};

export type TransformOptions = {
  allow_select?: boolean;
  allow_drag?: boolean;
  allow_rotate?: boolean;
  allow_scale?: boolean;
  allow_delete?: boolean;
  respect_object_locks?: boolean;
};

/** Stage/view transform (display only; not part of json_data). */
export type ViewportState = {
  scale: number;
  x: number;
  y: number;
  rotation: number;
};

export type CanvasDataShape = {
  fillColor: string;
  strokeWidth: number;
  strokeColor: string;
  backgroundColor: string;
  backgroundImageURL: string | null;
  realtimeUpdateStreamlit: boolean;
  canvasHeight: number;
  canvasWidth: number;
  drawingMode: DrawingMode;
  initialDrawing: CanvasScene;
  displayToolbar: boolean;
  displayRadius: number;
  enableViewportControls: boolean;
  transformOptions: TransformOptions;
};

export type CanvasStateShape = {
  image_data_url: string | null;
  json_data: CanvasScene | null;
};

/** Nearly invisible fill so crop rects receive pointer events in Konva. */
export const CROP_HIT_FILL = "rgba(0,0,0,0.001)";

export function cropObjectFill(fill?: string): string {
  if (!fill || fill === "transparent") return CROP_HIT_FILL;
  return fill;
}

export function identityViewport(width: number, height: number): ViewportState {
  return {
    scale: 1,
    x: width / 2,
    y: height / 2,
    rotation: 0,
  };
}
