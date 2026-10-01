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
    spline_show_control_points: bool = False,
    spline_control_point_radius: int = 5,
    tools: Optional[list[str]] = None,
    display_tool_picker: bool = False,
    tool_picker_style: str = "labels",
    display_color_pickers: bool = False,
) -> dict[str, Any]:
    style = tool_picker_style if tool_picker_style in ("labels", "icons") else "labels"
    return {
        "fillColor": fill_color,
        "strokeWidth": stroke_width,
        "strokeColor": stroke_color,
        "backgroundColor": background_color,
        "backgroundImageURL": background_image_url,
        "realtimeUpdateStreamlit": update_streamlit
        and drawing_mode not in ("polygon", "spline"),
        "canvasHeight": height,
        "canvasWidth": width,
        "drawingMode": drawing_mode,
        "initialDrawing": initial_drawing,
        "displayToolbar": display_toolbar,
        "displayRadius": point_display_radius,
        "enableViewportControls": enable_viewport_controls,
        "transformOptions": transform_options or {},
        "splineShowControlPoints": spline_show_control_points,
        "splineControlPointRadius": spline_control_point_radius,
        "tools": list(tools) if tools else [],
        "displayToolPicker": bool(display_tool_picker),
        "toolPickerStyle": style,
        "displayColorPickers": bool(display_color_pickers),
    }
