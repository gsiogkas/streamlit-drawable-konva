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

export type CanvasObject = {
  id: string;
  type: "line" | "rect" | "circle" | "point" | "polygon" | "freedraw" | "crop";
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
};

export type CanvasScene = {
  version: string;
  background?: string;
  objects: CanvasObject[];
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
};

export type CanvasStateShape = {
  image_data_url: string | null;
  json_data: CanvasScene | null;
};

export function identityViewport(width: number, height: number): ViewportState {
  // Group uses center offset; position at center keeps content at 1:1 identity.
  return {
    scale: 1,
    x: width / 2,
    y: height / 2,
    rotation: 0,
  };
}
