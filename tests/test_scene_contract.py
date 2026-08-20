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
