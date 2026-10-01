from __future__ import annotations

from typing import Any, Optional

from streamlit_drawable_konva.payload import build_component_data


def test_build_component_data_defaults():
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=400,
        width=600,
        drawing_mode="freedraw",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=True,
    )
    assert data["transformOptions"] == {}
    assert data["drawingMode"] == "freedraw"
    assert data["canvasHeight"] == 400
    assert data["tools"] == []
    assert data["displayToolPicker"] is False


def test_build_component_data_forwards_tools_and_picker():
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=400,
        width=600,
        drawing_mode="line",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=True,
        tools=["line", "rect", "transform"],
        display_tool_picker=True,
        tool_picker_style="icons",
    )
    assert data["tools"] == ["line", "rect", "transform"]
    assert data["displayToolPicker"] is True
    assert data["toolPickerStyle"] == "icons"


def test_build_component_data_forwards_transform_options():
    opts = {"allow_scale": False, "allow_rotate": True}
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=300,
        width=500,
        drawing_mode="transform",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=False,
        transform_options=opts,
    )
    assert data["transformOptions"] == opts


def test_locks_demo_scene_schema():
    initial: dict[str, Any] = {
        "version": "konva-1",
        "objects": [
            {
                "id": "guide",
                "type": "rect",
                "x": 40,
                "y": 40,
                "width": 520,
                "height": 220,
                "locked": True,
            },
            {
                "id": "roi",
                "type": "rect",
                "x": 120,
                "y": 80,
                "width": 160,
                "height": 100,
            },
        ],
    }
    assert initial["objects"][0]["locked"] is True
    assert "id" in initial["objects"][1]


def test_build_component_data_spline_defers_realtime_updates():
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=400,
        width=600,
        drawing_mode="spline",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=True,
    )
    assert data["drawingMode"] == "spline"
    assert data["realtimeUpdateStreamlit"] is False


def test_build_component_data_spline_control_points():
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=400,
        width=600,
        drawing_mode="spline",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=True,
        spline_show_control_points=True,
        spline_control_point_radius=7,
    )
    assert data["splineShowControlPoints"] is True
    assert data["splineControlPointRadius"] == 7


def test_build_component_data_polygon_defers_realtime_updates():
    data = build_component_data(
        fill_color="#eee",
        stroke_width=3,
        stroke_color="#000",
        background_color="#fff",
        background_image_url=None,
        update_streamlit=True,
        height=400,
        width=600,
        drawing_mode="polygon",
        initial_drawing={"version": "konva-1", "objects": []},
        display_toolbar=True,
        point_display_radius=3,
        enable_viewport_controls=True,
    )
    assert data["realtimeUpdateStreamlit"] is False


def test_spline_control_points_and_sampling():
    from streamlit_drawable_konva import (
        sample_spline,
        spline_control_points,
        splines_from_json,
    )

    scene = {
        "objects": [
            {
                "id": "s1",
                "type": "spline",
                "points": [0, 0, 100, 0, 100, 100],
                "tension": 0.5,
            }
        ]
    }
    splines = splines_from_json(scene)
    assert len(splines) == 1
    control = spline_control_points(splines[0])
    assert control == [(0.0, 0.0), (100.0, 0.0), (100.0, 100.0)]

    dense = sample_spline(splines[0], samples_per_segment=4)
    assert len(dense) > len(control)
    assert dense[0] == control[0]
    assert dense[-1] == control[-1]


def test_objects_by_group():
    from streamlit_drawable_konva import objects_by_group

    scene = {
        "objects": [
            {"id": "g1", "type": "group", "children": ["a", "b"]},
            {"id": "a", "type": "circle", "groupId": "g1"},
            {"id": "b", "type": "circle", "groupId": "g1"},
            {"id": "solo", "type": "rect"},
        ]
    }
    grouped = objects_by_group(scene)
    assert set(grouped["g1"]) == {"a", "b"}
    assert grouped["solo"] == ["solo"]


def test_coerce_image_pil_and_array():
    from PIL import Image

    from streamlit_drawable_konva import coerce_image

    pil = Image.new("RGB", (10, 8), color=(1, 2, 3))
    out = coerce_image(pil)
    assert out.size == (10, 8)
    assert out.mode == "RGBA"

    import numpy as np

    arr = np.zeros((5, 6, 3), dtype=np.uint8)
    out2 = coerce_image(arr)
    assert out2.size == (6, 5)
