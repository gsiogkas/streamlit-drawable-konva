"""Before/after image comparison slider (companion to st_canvas)."""

from __future__ import annotations

import base64
import io
from functools import lru_cache
from typing import Any, Callable, Optional, Union

import numpy as np
import streamlit as st
from PIL import Image

ImageInput = Union[Image.Image, np.ndarray, str, bytes, bytearray, None]


@lru_cache(maxsize=1)
def _get_comparison_component() -> Callable[..., Any]:
    return st.components.v2.component(
        "streamlit-drawable-konva.st_image_comparison",
        js="comparison.js",
        html='<div class="react-root"></div>',
    )


def _image_to_data_url(img: Image.Image) -> str:
    buf = io.BytesIO()
    img.convert("RGBA").save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def coerce_image(source: ImageInput) -> Image.Image:
    """Accept PIL, numpy (RGB/RGBA/BGR-ish), path, URL-like data URL, or bytes."""
    if source is None:
        raise ValueError("image is required")
    if isinstance(source, Image.Image):
        return source.convert("RGBA")
    if isinstance(source, np.ndarray):
        arr = source
        if arr.ndim == 2:
            return Image.fromarray(arr.astype("uint8"), mode="L").convert("RGBA")
        if arr.shape[-1] == 4:
            return Image.fromarray(arr.astype("uint8"), mode="RGBA")
        return Image.fromarray(arr.astype("uint8"), mode="RGB").convert("RGBA")
    if isinstance(source, (bytes, bytearray)):
        return Image.open(io.BytesIO(source)).convert("RGBA")
    if isinstance(source, str):
        if source.startswith("data:image"):
            _, encoded = source.split(";base64,", 1)
            return Image.open(io.BytesIO(base64.b64decode(encoded))).convert("RGBA")
        # Local path (URLs should be downloaded by the caller).
        return Image.open(source).convert("RGBA")
    raise TypeError(f"Unsupported image type: {type(source)!r}")


def st_image_comparison(
    img1: ImageInput,
    img2: ImageInput,
    *,
    label1: str = "Before",
    label2: str = "After",
    width: int = 700,
    height: Optional[int] = None,
    starting_position: float = 50,
    show_labels: bool = True,
    key: Optional[str] = None,
) -> None:
    """Render a before/after image comparison slider.

    Companion widget to :func:`st_canvas` (same package). Drag the handle to
    reveal ``img1`` (left) vs ``img2`` (right).

    Parameters
    ----------
    img1, img2:
        PIL image, NumPy array, filesystem path, or ``data:image/...`` URL.
    label1, label2:
        Overlay labels (shown when ``show_labels`` is True).
    width:
        Widget width in pixels. Both images are resized to ``(width, height)``.
    height:
        Widget height in pixels. Defaults to preserving ``img1`` aspect ratio.
    starting_position:
        Initial slider position 0–100 (percent from the left).
    show_labels:
        Show corner labels.
    key:
        Optional Streamlit widget key.
    """
    left = coerce_image(img1)
    right = coerce_image(img2)

    if height is None:
        aspect = left.height / max(left.width, 1)
        height = max(1, int(round(width * aspect)))

    left_r = left.resize((width, height))
    right_r = right.resize((width, height))

    _get_comparison_component()(
        key=key,
        data={
            "img1URL": _image_to_data_url(left_r),
            "img2URL": _image_to_data_url(right_r),
            "label1": label1,
            "label2": label2,
            "width": width,
            "height": height,
            "startingPosition": float(starting_position),
            "showLabels": show_labels,
        },
        default={},
        height=height + 8,
    )
