import { useCallback, useEffect, useRef, useState } from "react";

export type ImageComparisonProps = {
  img1URL: string;
  img2URL: string;
  label1: string;
  label2: string;
  width: number;
  height: number;
  startingPosition: number;
  showLabels: boolean;
};

/**
 * Before/after image slider (CSS clip), similar to Juxtapose / streamlit-image-comparison.
 */
export default function ImageComparison({
  img1URL,
  img2URL,
  label1,
  label2,
  width,
  height,
  startingPosition,
  showLabels,
}: ImageComparisonProps) {
  const clamp = (v: number) => Math.min(100, Math.max(0, v));
  const [pos, setPos] = useState(() => clamp(startingPosition));
  const dragging = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPos(clamp(startingPosition));
  }, [startingPosition, img1URL, img2URL]);

  const setFromClientX = useCallback((clientX: number) => {
    const el = rootRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };

  return (
    <div
      ref={rootRef}
      onPointerDown={onPointerDown}
      style={{
        position: "relative",
        width,
        height,
        overflow: "hidden",
        userSelect: "none",
        touchAction: "none",
        cursor: "ew-resize",
        borderRadius: 4,
        background: "#111",
      }}
    >
      <img
        src={img2URL}
        alt={label2}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
          pointerEvents: "none",
        }}
      >
        <img
          src={img1URL}
          alt={label1}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: 3,
          marginLeft: -1.5,
          background: "rgba(255,255,255,0.95)",
          boxShadow: "0 0 4px rgba(0,0,0,0.45)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${pos}%`,
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderRadius: "50%",
          background: "#fff",
          border: "2px solid #333",
          boxShadow: "0 1px 4px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          fontSize: 12,
          color: "#333",
          fontWeight: 700,
        }}
      >
        ↔
      </div>

      {showLabels && (
        <>
          <span
            style={{
              position: "absolute",
              left: 10,
              top: 10,
              padding: "2px 8px",
              borderRadius: 4,
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              fontSize: 13,
              pointerEvents: "none",
            }}
          >
            {label1}
          </span>
          <span
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              padding: "2px 8px",
              borderRadius: 4,
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              fontSize: 13,
              pointerEvents: "none",
            }}
          >
            {label2}
          </span>
        </>
      )}
    </div>
  );
}
