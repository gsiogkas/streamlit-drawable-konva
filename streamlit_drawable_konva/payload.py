"""Build CCv2 component payload (unit-testable without Streamlit runtime)."""

from __future__ import annotations

from typing import Any, Optional


def build_component_data(
    *,
    fill_color: str,
    stroke_width: int,
    stroke_color: str,
    background_color: str,
    background_image_url: Optional[str],
    update_streamlit: bool,
    height: int,
    width: int,
    drawing_mode: str,
    initial_drawing: dict[str, Any],
    display_toolbar: bool,
    point_display_radius: int,
    enable_viewport_controls: bool,
    transform_options: Optional[dict[str, Any]] = None,
) -> dict[str, Any]:
    return {
        "fillColor": fill_color,
        "strokeWidth": stroke_width,
        "strokeColor": stroke_color,
        "backgroundColor": background_color,
        "backgroundImageURL": background_image_url,
        "realtimeUpdateStreamlit": update_streamlit and (drawing_mode != "polygon"),
        "canvasHeight": height,
        "canvasWidth": width,
        "drawingMode": drawing_mode,
        "initialDrawing": initial_drawing,
        "displayToolbar": display_toolbar,
        "displayRadius": point_display_radius,
        "enableViewportControls": enable_viewport_controls,
        "transformOptions": transform_options or {},
    }
