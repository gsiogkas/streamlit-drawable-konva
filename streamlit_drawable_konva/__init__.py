"""Streamlit Drawable Konva — Components v2 canvas with a compatible st_canvas API."""

from __future__ import annotations

import base64
import io
from dataclasses import dataclass
from functools import lru_cache
from typing import Any, Callable, Optional

import numpy as np
import streamlit as st
from PIL import Image


@lru_cache(maxsize=1)
def _get_component() -> Callable[..., Any]:
    """Register the CCv2 component on first use (requires Streamlit runtime)."""
    return st.components.v2.component(
        "streamlit-drawable-konva.st_canvas",
        js="index.js",
        html='<div class="react-root"></div>',
    )


@dataclass
class CanvasResult:
    """Output of the drawable canvas component.

    Attributes
    ----------
    image_data:
        RGBA image as a NumPy array, or None before the first update.
    json_data:
        JSON scene dict (Konva-oriented objects), or None before the first update.
    """

    image_data: Optional[np.ndarray] = None
    json_data: Optional[dict] = None


def _data_url_to_image(data_url: str) -> Image.Image:
    _, encoded = data_url.split(";base64,", 1)
    return Image.open(io.BytesIO(base64.b64decode(encoded)))


def _image_to_data_url(img: Image.Image) -> str:
    buf = io.BytesIO()
    img.convert("RGBA").save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def _resize_img(img: Image.Image, new_height: int, new_width: int) -> Image.Image:
    return img.resize((new_width, new_height))


def _noop() -> None:
    """Required CCv2 on_change stub so default state keys are always present."""


def st_canvas(
    fill_color: str = "#eee",
    stroke_width: int = 20,
    stroke_color: str = "black",
    background_color: str = "",
    background_image: Optional[Image.Image] = None,
    update_streamlit: bool = True,
    height: int = 400,
    width: int = 600,
    drawing_mode: str = "freedraw",
    initial_drawing: Optional[dict] = None,
    display_toolbar: bool = True,
    point_display_radius: int = 3,
    enable_viewport_controls: bool = True,
    key: Optional[str] = None,
) -> CanvasResult:
    """Create a Konva drawing canvas in a Streamlit app.

    Compatible with the core API of ``streamlit-drawable-canvas`` /
    ``streamlit-drawable-canvas-fix``, implemented on Streamlit Components v2.

    Parameters
    ----------
    fill_color:
        Fill color for shapes (CSS color). Defaults to ``"#eee"``.
    stroke_width:
        Stroke / brush width in pixels. Defaults to ``20``.
    stroke_color:
        Stroke color. Defaults to ``"black"``.
    background_color:
        Canvas background color. Empty string means transparent.
        Overridden by ``background_image``. Changing this resets the drawing.
    background_image:
        Pillow image displayed behind drawings (resized to canvas size).
        Not included in returned ``image_data``.
    update_streamlit:
        When True, send canvas data to Streamlit on mouse-up / object updates.
    height:
        Canvas height in pixels. Defaults to ``400``.
    width:
        Canvas width in pixels. Defaults to ``600``.
    drawing_mode:
        One of ``freedraw``, ``transform``, ``line``, ``rect``, ``circle``,
        ``point``, ``polygon``, ``pan``. Defaults to ``freedraw``.
    initial_drawing:
        JSON scene to load (typically a previous ``json_data``).
    display_toolbar:
        Show undo / redo / clear (and viewport) toolbar.
    point_display_radius:
        Radius used when drawing points as circles.
    enable_viewport_controls:
        Enable zoom (wheel / buttons), pan (``pan`` mode, Alt-drag, middle
        mouse), and tilt/view-rotation (toolbar). Viewport is display-only and
        does not affect exported ``image_data`` / object coordinates.
    key:
        Optional Streamlit widget key.

    Returns
    -------
    CanvasResult
        ``image_data`` is an RGBA NumPy array; ``json_data`` is the scene dict.
    """
    background_image_url: Optional[str] = None
    bg_color = background_color
    if background_image is not None:
        resized = _resize_img(background_image, height, width)
        background_image_url = _image_to_data_url(resized)
        bg_color = ""

    scene: dict[str, Any] = (
        {"version": "konva-1", "objects": []}
        if initial_drawing is None
        else dict(initial_drawing)
    )
    scene["background"] = bg_color

    toolbar_h = 0
    if display_toolbar:
        toolbar_h = 72 if enable_viewport_controls else 40
    component_height = height + toolbar_h + 8

    raw = _get_component()(
        key=key,
        data={
            "fillColor": fill_color,
            "strokeWidth": stroke_width,
            "strokeColor": stroke_color,
            "backgroundColor": bg_color,
            "backgroundImageURL": background_image_url,
            "realtimeUpdateStreamlit": update_streamlit
            and (drawing_mode != "polygon"),
            "canvasHeight": height,
            "canvasWidth": width,
            "drawingMode": drawing_mode,
            "initialDrawing": scene,
            "displayToolbar": display_toolbar,
            "displayRadius": point_display_radius,
            "enableViewportControls": enable_viewport_controls,
        },
        default={"image_data_url": None, "json_data": None},
        on_image_data_url_change=_noop,
        on_json_data_change=_noop,
        height=component_height,
    )

    image_data_url = getattr(raw, "image_data_url", None)
    json_data = getattr(raw, "json_data", None)

    if image_data_url is None:
        return CanvasResult(image_data=None, json_data=json_data)

    return CanvasResult(
        image_data=np.asarray(_data_url_to_image(image_data_url)),
        json_data=json_data,
    )
