"""Demo / testing app for streamlit-drawable-konva."""

from __future__ import annotations

import base64
from io import BytesIO

import pandas as pd
import streamlit as st
from PIL import Image

from streamlit_drawable_konva import crop_box_from_json, st_canvas

st.set_page_config(
    page_title="Streamlit Drawable Konva Demo",
    page_icon=":pencil2:",
)
st.title("Drawable Konva Demo")


def about() -> None:
    st.markdown(
        """
        Welcome to the demo of **Streamlit Drawable Konva**.

        This component mirrors the API of
        [streamlit-drawable-canvas-fix](https://pypi.org/project/streamlit-drawable-canvas-fix/)
        but uses [Konva.js](https://konvajs.org/) via Streamlit **Components v2**.

        What you can do:

        * Draw freely, lines, circles, boxes, points and polygons
        * Crop a single rectangular region (`rect_crop`)
        * Transform (move / scale / rotate) objects
        * Zoom, pan, and tilt the viewport (display-only)
        * Use a background color or image
        * Get image data and object JSON back to Streamlit
        * Update in realtime or on demand
        * Undo, redo, or clear the canvas
        """
    )


def basic_example() -> None:
    st.sidebar.header("Configuration")
    st.markdown(
        """
        Draw on the canvas and get drawings back to Streamlit.

        * Configure tools in the sidebar
        * In **transform** mode, double-click an object to remove it
        * In **polygon** mode: left-click to add points, right-click to close,
          double-click to remove the latest point
        """
    )

    drawing_mode = st.sidebar.selectbox(
        "Drawing tool:",
        (
            "freedraw",
            "line",
            "rect",
            "rect_crop",
            "circle",
            "transform",
            "polygon",
            "point",
            "pan",
        ),
    )
    stroke_width = st.sidebar.slider("Stroke width: ", 1, 25, 3)
    point_display_radius = 3
    if drawing_mode == "point":
        point_display_radius = st.sidebar.slider("Point display radius: ", 1, 25, 3)
    stroke_color = st.sidebar.color_picker("Stroke color hex: ")
    bg_color = st.sidebar.color_picker("Background color hex: ", "#eee")
    bg_image = st.sidebar.file_uploader("Background image:", type=["png", "jpg", "jpeg"])
    realtime_update = st.sidebar.checkbox("Update in realtime", True)
    display_toolbar = st.sidebar.checkbox("Display toolbar", True)

    canvas_result = st_canvas(
        fill_color="rgba(255, 165, 0, 0.3)",
        stroke_width=stroke_width,
        stroke_color=stroke_color,
        background_color=bg_color,
        background_image=Image.open(bg_image) if bg_image else None,
        update_streamlit=realtime_update,
        height=300,
        width=600,
        drawing_mode=drawing_mode,
        point_display_radius=point_display_radius if drawing_mode == "point" else 0,
        display_toolbar=display_toolbar,
        key="basic_example",
    )

    if canvas_result.image_data is not None:
        st.image(canvas_result.image_data, caption="Returned image_data")
    if canvas_result.json_data is not None:
        objects = pd.json_normalize(canvas_result.json_data.get("objects", []))
        for col in objects.select_dtypes(include=["object", "string"]).columns:
            objects[col] = objects[col].astype("str")
        st.dataframe(objects)


def color_annotation() -> None:
    st.markdown(
        """
        Map fill colors to labels with session state (simple ROI annotation).
        Toggle **Move ROIs** to switch into transform mode.
        """
    )
    if "color_to_label" not in st.session_state:
        st.session_state["color_to_label"] = {}

    label_color = st.sidebar.color_picker("Annotation color: ", "#EA1010") + "77"
    label = st.sidebar.text_input("Label", "Default")
    mode = "transform" if st.sidebar.checkbox("Move ROIs", False) else "rect"

    canvas_result = st_canvas(
        fill_color=label_color,
        stroke_width=3,
        background_color="#f7f7f7",
        height=320,
        width=512,
        drawing_mode=mode,
        key="color_annotation",
    )

    if canvas_result.json_data is not None:
        df = pd.json_normalize(canvas_result.json_data.get("objects", []))
        if len(df) == 0:
            return
        st.session_state["color_to_label"][label_color] = label
        if "fill" in df.columns:
            df["label"] = df["fill"].map(st.session_state["color_to_label"])
            cols = [c for c in ["top", "left", "x", "y", "width", "height", "fill", "label"] if c in df.columns]
            st.dataframe(df[cols])
        with st.expander("Color to label mapping"):
            st.json(st.session_state["color_to_label"])


def png_export() -> None:
    st.markdown(
        """
        Realtime update is disabled. Draw, then press **Send to Streamlit**
        on the canvas toolbar (or rely on the export below once data arrives).
        """
    )
    data = st_canvas(
        update_streamlit=False,
        height=300,
        width=600,
        background_color="#ffffff",
        key="png_export",
    )
    if data.image_data is not None:
        im = Image.fromarray(data.image_data.astype("uint8"), mode="RGBA")
        buffered = BytesIO()
        im.save(buffered, format="PNG")
        b64 = base64.b64encode(buffered.getvalue()).decode()
        st.download_button(
            "Download PNG",
            data=buffered.getvalue(),
            file_name="canvas.png",
            mime="image/png",
        )
        st.image(im)
        st.code(f"data:image/png;base64,{b64[:80]}...", language="text")


def viewport_controls() -> None:
    st.markdown(
        """
        ### Zoom / pan / tilt (viewport)

        These controls change the **view** only. Object coordinates and exported
        `image_data` stay in content space (1:1).

        | Action | How |
        | --- | --- |
        | **Zoom** | Mouse wheel, or **Zoom + / −** on the toolbar |
        | **Pan** | Set tool to **pan** and drag, or hold **Alt** and drag, or **middle-click** drag |
        | **Tilt** | **Tilt ↶ / ↷** rotates the view (±15°) |
        | **Reset** | **Reset view** returns to 100% / 0° |

        Draw a few shapes first, then switch to **pan** and try the wheel.
        """
    )
    st.sidebar.header("Viewport demo")
    drawing_mode = st.sidebar.selectbox(
        "Drawing tool:",
        ("rect", "freedraw", "circle", "pan", "transform"),
        key="viewport_mode",
    )
    enable_viewport = st.sidebar.checkbox("Enable viewport controls", True)

    canvas_result = st_canvas(
        fill_color="rgba(70, 130, 180, 0.35)",
        stroke_width=3,
        stroke_color="#1b4f72",
        background_color="#f4f6f8",
        update_streamlit=True,
        height=360,
        width=640,
        drawing_mode=drawing_mode,
        display_toolbar=True,
        enable_viewport_controls=enable_viewport,
        key="viewport_controls",
    )

    if canvas_result.json_data is not None:
        n = len(canvas_result.json_data.get("objects", []))
        st.caption(f"{n} object(s) in content coordinates (viewport ignored).")
    if canvas_result.image_data is not None:
        st.image(canvas_result.image_data, caption="Exported image_data (no zoom/pan/tilt)")


def crop_example() -> None:
    st.markdown(
        """
        Draw **one** crop rectangle over a background image.

        * Drag a new box to replace the current crop
        * Drag corners / edges to resize, or drag the box to move it
        * Double-click the crop box to remove it
        * Crop coordinates are in canvas pixels (same space as the background image)
        """
    )
    bg_image = st.sidebar.file_uploader(
        "Background image:",
        type=["png", "jpg", "jpeg"],
        key="crop_bg",
    )
    stroke_color = st.sidebar.color_picker("Crop border:", "#00ff88", key="crop_stroke")
    stroke_width = st.sidebar.slider("Border width:", 1, 8, 2, key="crop_sw")

    source = Image.open(bg_image) if bg_image else None
    canvas_h, canvas_w = 400, 600

    canvas_result = st_canvas(
        stroke_width=stroke_width,
        stroke_color=stroke_color,
        background_color="#222",
        background_image=source,
        update_streamlit=True,
        height=canvas_h,
        width=canvas_w,
        drawing_mode="rect_crop",
        display_toolbar=True,
        enable_viewport_controls=True,
        key="crop_example",
    )

    box = crop_box_from_json(canvas_result.json_data)
    if box is None:
        st.info("Draw a crop rectangle on the canvas.")
        return

    x, y, w, h = box
    st.write(f"Crop box: x={x}, y={y}, width={w}, height={h}")

    if source is not None:
        resized = source.convert("RGBA").resize((canvas_w, canvas_h))
        cropped = resized.crop((x, y, x + w, y + h))
        col1, col2 = st.columns(2)
        with col1:
            st.image(resized, caption="Background (resized to canvas)")
        with col2:
            st.image(cropped, caption="Cropped preview")


PAGES = {
    "About": about,
    "Basic example": basic_example,
    "Crop": crop_example,
    "Zoom / pan / tilt": viewport_controls,
    "Color-based annotation": color_annotation,
    "PNG export": png_export,
}

page = st.sidebar.selectbox("Page:", options=list(PAGES.keys()))
PAGES[page]()
