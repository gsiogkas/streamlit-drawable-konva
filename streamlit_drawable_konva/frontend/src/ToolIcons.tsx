import type { FC, ReactElement } from "react";

import type { DrawingMode } from "./types";

type IconProps = { size?: number; title?: string };

const svgProps = (size: number, title?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": title ? undefined : (true as const),
  role: title ? ("img" as const) : undefined,
});

export const ToolIcon: FC<{ mode: DrawingMode; size?: number }> = ({
  mode,
  size = 16,
}): ReactElement => {
  const p = svgProps(size);
  switch (mode) {
    case "freedraw":
      return (
        <svg {...p}>
          <path d="M4 20c4-2 6-8 8-12 1-2 3-4 6-4" />
          <path d="M14 4l4 4" />
        </svg>
      );
    case "line":
      return (
        <svg {...p}>
          <path d="M5 19L19 5" />
        </svg>
      );
    case "rect":
      return (
        <svg {...p}>
          <rect x="5" y="6" width="14" height="12" rx="1" />
        </svg>
      );
    case "rect_crop":
      return (
        <svg {...p}>
          <path d="M6 3v3H3" />
          <path d="M18 3v3h3" />
          <path d="M6 21v-3H3" />
          <path d="M18 21v-3h3" />
          <rect x="7" y="7" width="10" height="10" />
        </svg>
      );
    case "circle":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
    case "point":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
    case "polygon":
      return (
        <svg {...p}>
          <path d="M12 4l7 5v6l-7 5-7-5V9z" />
        </svg>
      );
    case "spline":
      return (
        <svg {...p}>
          <path d="M4 16c3-8 5 2 8-4s5 6 8 0" />
          <circle cx="4" cy="16" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="20" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "transform":
      return (
        <svg {...p}>
          <path d="M12 3v18" />
          <path d="M3 12h18" />
          <path d="M12 3l-3 3M12 3l3 3" />
          <path d="M12 21l-3-3M12 21l3-3" />
          <path d="M3 12l3-3M3 12l3 3" />
          <path d="M21 12l-3-3M21 12l-3 3" />
        </svg>
      );
    case "pan":
      return (
        <svg {...p}>
          <path d="M8 12V7a1.5 1.5 0 013 0v1" />
          <path d="M11 8V6a1.5 1.5 0 013 0v4" />
          <path d="M14 10V8a1.5 1.5 0 013 0v5" />
          <path d="M8 12c0 0-1 1-1 3v2a3 3 0 003 3h5a3 3 0 003-3v-4a1.5 1.5 0 00-3 0" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="7" />
        </svg>
      );
  }
};
