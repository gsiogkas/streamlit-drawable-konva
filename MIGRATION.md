# Migration guide: Fabric canvas → Drawable Konva

This guide helps you move from
[`streamlit-drawable-canvas`](https://pypi.org/project/streamlit-drawable-canvas/)
/ [`streamlit-drawable-canvas-fix`](https://pypi.org/project/streamlit-drawable-canvas-fix/)
(Fabric.js) to **`streamlit-drawable-konva`** (Konva.js + Streamlit Components v2).

## Install

```bash
# before
pip install streamlit-drawable-canvas-fix

# after
pip install streamlit-drawable-konva
# or from this repo: uv sync
```

## Import rename

```python
# before
from streamlit_drawable_canvas import st_canvas

# after
from streamlit_drawable_konva import st_canvas
```

`st_canvas(...)` argument names and `CanvasResult(image_data, json_data)` stay
the same for the common path.

## Drop-in checklist

| Item | Fabric package | Konva package |
| --- | --- | --- |
| `fill_color`, `stroke_*`, `background_*` | yes | yes |
| `update_streamlit`, `height`, `width`, `key` | yes | yes |
| `drawing_mode` values | freedraw, line, rect, circle, point, polygon, transform | same **+ `pan`** |
| `initial_drawing` / `json_data` round-trip | Fabric JSON | Konva-oriented JSON (not Fabric-compatible) |
| `display_toolbar` | yes | yes (+ viewport buttons when enabled) |
| `point_display_radius` | yes | yes |
| `enable_viewport_controls` | n/a | **new** (default `True`) |
| Components API | v1 `declare_component` | **v2** `st.components.v2` |
| Min Streamlit | varies | `>= 1.51` |

## Code change example

```python
import streamlit as st
from PIL import Image
from streamlit_drawable_konva import st_canvas  # was streamlit_drawable_canvas

canvas_result = st_canvas(
    fill_color="rgba(255, 165, 0, 0.3)",
    stroke_width=3,
    stroke_color="#000000",
    background_color="#eee",
    background_image=None,
    update_streamlit=True,
    height=300,
    width=600,
    drawing_mode="freedraw",
    display_toolbar=True,
    enable_viewport_controls=True,  # optional; default True
    key="canvas",
)

if canvas_result.image_data is not None:
    st.image(canvas_result.image_data)

if canvas_result.json_data is not None:
    objects = canvas_result.json_data.get("objects", [])
    st.write(objects)
```

## JSON / object schema differences

Do **not** assume Fabric fields. Typical mappings:

| Concept | Fabric (`json_data`) | Konva (`json_data`) |
| --- | --- | --- |
| Position | `left`, `top` | `x`, `y` |
| Freehand | `path` (path commands) | `points` (flat `[x1,y1,x2,y2,…]`) |
| Type | `type`: `rect`, `circle`, `path`, … | `type`: `rect`, `circle`, `freedraw`, `line`, `polygon`, `point` |
| Size | `width`, `height`, `radius` | same where applicable |
| Transform | `angle`, `scaleX`, … | `rotation`, `scaleX`, `scaleY` |

If you stored Fabric JSON in a database, convert objects before passing them as
`initial_drawing`, or re-draw once and save the new Konva scene.

### Example: Fabric rect → Konva rect

```python
def fabric_rect_to_konva(obj: dict) -> dict:
    return {
        "id": obj.get("id") or f"migrated_{id(obj)}",
        "type": "rect",
        "x": obj.get("left", 0),
        "y": obj.get("top", 0),
        "width": obj.get("width", 0) * obj.get("scaleX", 1),
        "height": obj.get("height", 0) * obj.get("scaleY", 1),
        "stroke": obj.get("stroke"),
        "strokeWidth": obj.get("strokeWidth", 1),
        "fill": obj.get("fill"),
        "rotation": obj.get("angle", 0),
    }
```

Freehand Fabric `path` data has no 1:1 import; re-capture strokes or write a
custom path→points flattener for your data.

## Viewport zoom / pan / tilt

These are **new** relative to the Fabric component:

- **Zoom** — mouse wheel or toolbar
- **Pan** — `drawing_mode="pan"`, Alt-drag, or middle-mouse drag
- **Tilt** — view rotation via toolbar (not 3D perspective)

Viewport transforms are **display-only**: they do not change `json_data`
coordinates or the pixels in `image_data`. Disable with
`enable_viewport_controls=False` if you want a fixed view.

## Behavior quirks to expect

1. **Components v2** — requires Streamlit ≥ 1.51; plain `python -c "import …"`
   may error about `asset_dir` outside `streamlit run` (normal for CCv2).
2. **Background image** — still excluded from returned `image_data`, same idea
   as upstream.
3. **Polygon** — left-click add, right-click close, double-click remove last
   point (same UX as upstream).
4. **Transform delete** — double-click selected object (same idea as upstream).

## Testing your migration

1. Swap the import and run your app under Streamlit ≥ 1.51.
2. Confirm drawing modes you use still work.
3. If you depended on Fabric JSON columns (`left`/`top`/`path`), update
   post-processing to Konva fields (`x`/`y`/`points`).

## 0.3 interaction features (locks, groups, handles)

Version **0.3.0** adds optional object interaction fields (backward compatible):

| Field | Purpose |
| --- | --- |
| `locked: true` | Visible but not selectable / draggable / transformable |
| `groupId` + `type: "group"` | Move/rotate members together in transform mode |
| `dragConstraint` | Axis-locked drag for handle UIs |
| `transform_options` kwarg | Global toggles e.g. `allow_scale=False` |

See demo pages **Locks & transform options**, **Groups**, **Axis handles** in `app.py`.
4. Optionally open the demo page **Zoom / pan / tilt** to try the new viewport.
