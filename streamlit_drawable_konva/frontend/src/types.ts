export type DrawingMode =
  | "freedraw"
  | "line"
  | "rect"
  | "circle"
  | "point"
  | "polygon"
  | "transform";

export type CanvasObject = {
  id: string;
  type: "line" | "rect" | "circle" | "point" | "polygon" | "freedraw";
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
};

export type CanvasStateShape = {
  image_data_url: string | null;
  json_data: CanvasScene | null;
};
