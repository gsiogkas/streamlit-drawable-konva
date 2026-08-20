# SPEC: Interaction locks, groups, and constrained handles

**Target package:** `streamlit-drawable-konva` (this repo)  
**Current version:** `0.2.2`  
**Goal version:** `0.3.0` (minor; additive API, backward compatible)  
**Audience:** implementer agent / maintainer  
**Scope:** generic canvas primitives — **not** domain-specific (no parking, no PVS, no perch)

---

## 0. Non-goals

- Do **not** add domain objects (`stall`, `aisle`, parking geometry, map projections).
- Do **not** change Components v2 registration, asset_dir layout, or Python return type `CanvasResult(image_data, json_data)`.
- Do **not** break existing `drawing_mode` values or existing demos.
- Do **not** bake viewport transforms into `json_data` / `image_data` (viewport stays display-only).
- Do **not** replace Konva / react-konva with Fabric.

---

## 1. Problem statement (generic)

Many annotation / diagram UIs need:

1. **Some shapes locked** (visible, not selectable / not movable / no Transformer).
2. **Some shapes freely transformable** (current `transform` behavior).
3. **A set of shapes that move/rotate as one unit** (logical group).
4. **Handles that drag under constraints** (axis-only, or custom drag bound).
5. **Optional disable of scale** while keeping move + rotate.

Today (`DrawableCanvas.tsx`), in `transform` mode **every** scene object is forced:

```tsx
draggable={drawingMode === "transform" || (drawingMode === "rect_crop" && obj.type === "crop")}
```

Per-object `draggable` / lock flags in `initial_drawing` are ignored. There is no group type and no constrained drag. Callers cannot implement “locked overlay + one movable control” without fighting the component.

---

## 2. Design principles (match existing architecture)

Follow the patterns already in this repo:

| Existing pattern | Keep / extend |
| --- | --- |
| Scene = `{ version, background, objects[] }` | Keep `version: "konva-1"`; add optional fields on objects |
| Flat object list with `id` + `type` | Prefer flat list + optional `groupId` / `type: "group"` rather than nested React trees in JSON |
| React state `scene` + history stack | Same `commitScene` / undo-redo path |
| `emitToStreamlit` exports identity viewport | Unchanged |
| Modes: `freedraw|line|rect|…|transform|pan` | Prefer **object flags + transform options**, not many new modes |
| `SceneObject` maps JSON → Konva node | Extend mapper; do not fork a second canvas |
| Demo pages in `app.py` | Add new demo page(s); keep existing pages working |
| Python `st_canvas(...)` thin wrapper | Pass new optional kwargs through `data={...}` only |

**Prefer flags over new modes** so callers can mix locked + interactive objects in one scene under `drawing_mode="transform"`.

---

## 3. Root cause in current code (must fix)

File: `streamlit_drawable_konva/frontend/src/DrawableCanvas.tsx`

1. **Hardcoded draggable** when mapping objects (~line 958): ignores object attrs.
2. **Transformer always enables resize anchors** in transform mode (~line 1022): no way to disable scale.
3. **Selection** (`onObjectClick`) allows selecting any object in transform mode — locked objects must not enter `selectedId` / Transformer.
4. **Double-click delete** deletes selected object — locked objects must not be deletable this way (optional: still allow if `deletable: true`).

---

## 4. Proposed public API (Python)

### 4.1 New optional kwargs on `st_canvas` (all optional; defaults preserve current behavior)

```python
st_canvas(
    ...,
    # Existing args unchanged...
    transform_options: dict | None = None,
)
```

`transform_options` (JSON-serializable dict, default `None` ≡ current behavior):

```python
{
  "allow_select": True,      # default True
  "allow_drag": True,        # default True
  "allow_rotate": True,      # default True
  "allow_scale": True,       # default True  ← set False for annotation overlays
  "allow_delete": True,      # default True (double-click delete)
  "respect_object_locks": True,  # default True when any lock field present;
                                 # if False, behave like 0.2.2 (everything editable)
}
```

**Backward compatibility rule:**

- If `transform_options is None` **and** no object carries lock/group/handle fields → **identical** to 0.2.2.
- If objects include new fields, interpret them even when `transform_options is None` (locks honored).

Pass through CCv2 `data`:

```python
"transformOptions": transform_options or {},
```

### 4.2 Do **not** require new drawing modes for v1 of this feature

Optional later (out of scope for 0.3.0 unless easy):

- `drawing_mode="select"` alias of transform with `allow_scale=False` defaults — **skip for now**.

---

## 5. Scene / object schema extensions

### 5.1 Existing `CanvasObject` fields (keep)

```ts
id, type, x?, y?, width?, height?, radius?, points?,
stroke?, strokeWidth?, fill?, rotation?, scaleX?, scaleY?
```

Types today: `line | rect | circle | point | polygon | freedraw | crop`

### 5.2 New optional interaction fields (all optional)

```ts
export type CanvasObject = {
  // ...existing...

  /** If true, object cannot be selected, dragged, transformed, or deleted. */
  locked?: boolean;

  /** Overrides; if omitted, inferred from locked / mode / transformOptions. */
  draggable?: boolean;
  selectable?: boolean;
  listening?: boolean; // Konva listening; false ⇒ hit-test ignore

  /** If false, Transformer must not show scale anchors for this node. */
  scalable?: boolean;

  /** If false, Transformer rotate handle off for this node. */
  rotatable?: boolean;

  /** If false, double-click delete ignored for this node. */
  deletable?: boolean;

  /**
   * Logical group membership. Objects sharing the same groupId
   * transform together when any selectable member is transformed
   * (see §6). Empty/undefined ⇒ ungrouped.
   */
  groupId?: string;

  /**
   * Constrained drag (handle behavior). Only meaningful when not locked
   * and draggable under current mode.
   */
  dragConstraint?: {
    /** Restrict translation to a direction in content space. */
    type: "axis" | "none";
    /** Unit direction for axis constraint (content coords). Required if type==="axis". */
    axis?: { x: number; y: number };
    /** Optional clamp of signed distance along axis from drag start (content px). */
    min?: number;
    max?: number;
  };
};
```

### 5.3 Optional `type: "group"` object (recommended)

Add a **non-rendered** (or optionally rendered as invisible) group descriptor:

```ts
{
  id: "g_roi_bundle",
  type: "group",
  // children referenced by id; must exist in objects[]
  children: ["obj_a", "obj_b", "obj_c"],
  // group-level interaction defaults applied when selecting the group
  locked?: boolean,
  draggable?: boolean,
  rotatable?: boolean,
  scalable?: boolean, // default false for groups unless explicitly true
  // optional visual origin for rotate (content coords); default = bbox center
  originX?: number,
  originY?: number,
}
```

**Rendering rules for `type: "group"`:**

- Do **not** draw a visible shape by default (`listening: false`, no fill).
- Selection: clicking a child that belongs to a group selects the **group** (Transformer attaches to a Konva.Group wrapper **or** multi-node Transformer — pick one approach and document it; prefer single Konva.Group wrapper for rotate-about-origin correctness).
- Export: `group` objects **remain** in `json_data.objects`; children keep their absolute content coordinates after transform (bake transform into child `x/y/rotation/points` on commit — same philosophy as rect scale bake today).

**Alternative without `type: "group"`:** only `groupId` on children. Then create an ephemeral Konva.Group at runtime keyed by `groupId`. Still export only flat children with baked coords; optionally emit a synthetic group descriptor. Prefer explicit `type: "group"` for round-trip clarity.

### 5.4 Versioning

Keep `"version": "konva-1"`. New fields are additive. Do not bump to `konva-2` unless a breaking schema change is required (avoid).

---

## 6. Behavior specification

### 6.1 Effective interaction matrix

For each object, compute:

```
lockedEffective = obj.locked === true
selectableEffective =
  !lockedEffective
  && (obj.selectable !== false)
  && (obj.listening !== false)
  && transformOptions.allow_select
  && drawingMode in {"transform", "rect_crop"(crop only)}

draggableEffective =
  selectableEffective
  && (obj.draggable !== false)
  && transformOptions.allow_drag
  && (drawingMode === "transform" || (rect_crop && type===crop))

scalableEffective =
  selectableEffective
  && (obj.scalable !== false)
  && transformOptions.allow_scale

rotatableEffective =
  selectableEffective
  && (obj.rotatable !== false)
  && transformOptions.allow_rotate

deletableEffective =
  selectableEffective
  && (obj.deletable !== false)
  && transformOptions.allow_delete
```

**Critical:** when `drawingMode === "transform"`, set Konva `draggable={draggableEffective}` — **never** blindly `true` for all objects.

### 6.2 Locked objects

- `listening={listening !== false && !locked}` — recommend `listening=false` when locked so clicks pass through to objects below / stage.
- Not added to Transformer.
- Not deleted via double-click.
- Still appear in `image_data` and `json_data`.

### 6.3 Transformer configuration

When selection changes, configure Transformer:

```ts
tr.rotateEnabled(rotatableEffective);
tr.enabledAnchors(
  scalableEffective
    ? DEFAULT_ANCHORS  // current list
    : []               // move+rotate only, or rotate-only handle
);
tr.resizeEnabled(scalableEffective);
```

If `allow_scale` is false globally, no object gets scale anchors.

### 6.4 Group transform

**User story:** select any child of group G (or the group) → move/rotate applies to all members of G.

**Implementation recommendation (matches Konva mental model):**

1. On scene render, for each distinct `groupId` / `type:"group"`, wrap children in `<Group id={groupId} draggable={...}>`.
2. Attach Transformer to that Group node when selected.
3. On `transformend` / `dragend`:
   - Read each child’s **absolute** position/rotation in content space.
   - Write baked values back into each child object in `scene.objects`.
   - Reset group node `x/y/rotation/scale` to identity after bake (same pattern as current rect scale bake).

**Polygon / freedraw / line bake:** transform points through the group matrix into new `points` arrays; set object `x/y` to 0 if points are absolute (current polygon style uses `points` with `x/y` often 0).

**Ungrouped objects:** keep current per-node transform path.

### 6.5 Constrained handles (`dragConstraint`)

**User story:** a circle/point handle moves only along an axis (e.g. alignment guides, slider-on-line, shared boundary).

On `dragmove` (not only dragend):

```ts
if (constraint.type === "axis" && axis) {
  const u = normalize(axis);
  const dx = node.x() - startX;
  const dy = node.y() - startY;
  let t = dx * u.x + dy * u.y;
  if (min != null) t = Math.max(min, t);
  if (max != null) t = Math.min(max, t);
  node.position({ x: startX + t * u.x, y: startY + t * u.y });
}
```

Rules:

- Constraints apply in **content coordinates** (after viewport inverse — already true if node lives under viewport group).
- Handle should typically be `scalable: false`, `rotatable: false`.
- If handle has `groupId`, decide explicitly: **default = handles are NOT group-dragged**; they are independent. Document this. (Grouped handles are an advanced case; skip in 0.3.0 unless trivial.)

### 6.6 Crop mode interaction

Do not regress `rect_crop`:

- Only `type === "crop"` is interactive in that mode.
- Crop remains singular.
- Crop still excluded from `image_data`.

### 6.7 Streamlit update payload (optional enhancement)

Keep emitting full `json_data` scene (required for compatibility).

**Optional additive field** (nice for consumers; not required for 0.3.0 MVP):

```ts
// Still inside CanvasScene OR alongside via a second state key — prefer stay in scene:
{
  version: "konva-1",
  background: "...",
  objects: [...],
  meta?: {
    lastChange?: {
      type: "drag" | "transform" | "add" | "delete" | "clear",
      ids: string[],
    }
  }
}
```

If added, document as optional; demos may ignore it.

---

## 7. Frontend implementation plan (files)

| File | Changes |
| --- | --- |
| `frontend/src/types.ts` | Extend `CanvasObject`, add `TransformOptions`, `group` type, `dragConstraint` |
| `frontend/src/scene.ts` | Normalize unknown types safely; preserve new fields in `cloneScene` |
| `frontend/src/DrawableCanvas.tsx` | Effective flags; Transformer config; group wrappers; drag constraint; stop forced draggable |
| `frontend/src/index.tsx` | Pass `transformOptions` from CCv2 data |
| `__init__.py` | Document + forward `transform_options` |
| `app.py` | New demo page(s) |
| `README.md` / `MIGRATION.md` | Document new fields |
| **New:** `tests/` | Python unit tests for normalize/helpers; frontend tests if feasible |

Suggested small pure helpers (unit-testable without Streamlit):

```ts
// frontend/src/interaction.ts
export function effectiveInteraction(obj, mode, options): { ... }
export function projectAxisDrag(pos, start, axis, min?, max?)
export function bakeGroupTransform(children, groupMatrix): CanvasObject[]
```

Keep `DrawableCanvas.tsx` from growing further without extraction.

---

## 8. Python surface

```python
def st_canvas(
    ...
    transform_options: Optional[dict] = None,
) -> CanvasResult:
```

Docstring additions:

- Document object lock / group / dragConstraint fields.
- Document that `transform_options["allow_scale"]=False` disables resize anchors.

No change to `crop_box_from_json`.

Optional helper (generic, not domain-specific):

```python
def objects_by_group(json_data: dict | None) -> dict[str, list[dict]]:
    """Group objects by groupId / group.children."""
```

Place in `__init__.py` only if small; otherwise skip.

---

## 9. Tests (required)

There are **no tests today**. Add a minimal suite that does **not** require a browser for core logic.

### 9.1 Python tests (`tests/test_scene_contract.py` or similar)

Use `pytest` (add to `[project.optional-dependencies] devel` / `dependency-groups.dev`).

Cases:

1. **Default kwargs:** calling signature still accepts old args only.
2. **`transform_options` forwarding:** monkeypatch / inspect `data` dict passed to component mock if practical; otherwise test a small pure function that builds the component payload.
3. **Schema examples:** validate example scenes used by demos load as dicts with required keys.

Prefer extracting:

```python
# streamlit_drawable_konva/payload.py
def build_component_data(..., transform_options=None) -> dict: ...
```

and unit-test that.

### 9.2 Frontend unit tests (Vitest)

Add Vitest next to Vite (frontend already uses Vite).

Files:

- `frontend/src/interaction.test.ts` — axis projection, effective flags matrix table.
- `frontend/src/scene.test.ts` — normalize preserves `locked`, `groupId`, `dragConstraint`.

### 9.3 Manual / demo acceptance (checklist in PR)

See §10. Must be runnable via `uv run streamlit run app.py`.

---

## 10. Demo pages (required)

Add to `app.py` `PAGES`:

### 10.1 Page: **Locks & transform options**

Seed `initial_drawing` with:

- 1 locked rect (gray) labeled via caption in markdown
- 1 unlocked rect (orange)
- Sidebar toggle `allow_scale` on/off
- Instructions: locked must not move; unlocked moves; with scale off, no corner resize

Assert visually + show `json_data` dataframe.

### 10.2 Page: **Groups**

Seed:

- 3 circles with same `groupId` (or a `type:"group"` + children)
- 1 independent rect
- Instructions: dragging one circle moves all three; rect moves alone; rotation rotates group about origin

Show exported child coordinates after transform.

### 10.3 Page: **Axis handles**

Seed:

- A static locked line from (100,200)–(500,200)
- A circle handle at midpoint with  
  `dragConstraint: { type: "axis", axis: { x: 1, y: 0 }, min: -150, max: 150 }`  
  (relative to drag start — document clearly in UI)
- Instructions: handle slides only horizontally; vertical mouse motion ignored

### 10.4 Keep existing pages unchanged

About, Basic, Crop, Zoom/pan/tilt, Color annotation, PNG export.

---

## 11. Acceptance criteria

### Must pass

1. **Regression:** Basic example + Crop + Viewport pages behave as in 0.2.2 with no new args.
2. **Lock:** Object with `locked: true` cannot be selected, dragged, scaled, rotated, or double-click deleted in `transform` mode.
3. **Per-object draggable:** `draggable: false` without full lock still non-draggable (if `selectable` true, may select but not drag — define: prefer selectable false when draggable false unless explicitly selectable true).
4. **`allow_scale: false`:** Transformer has no resize anchors; rotate+move still work when enabled.
5. **Group:** Transforming one member updates all members’ baked coordinates consistently; undo restores previous scene.
6. **Axis constraint:** Handle y stays constant for horizontal axis (±0.5 px tolerance) during drag.
7. **Export:** Viewport zoom does not change object coordinates; `image_data` still identity-view export.
8. **Crop:** Still single crop; still excluded from image export.

### Nice to have

- `meta.lastChange.ids` on emit
- Click-through locked objects (`listening: false`)

---

## 12. Worked generic examples (for demos / docs)

### 12.1 Locked overlay + editable ROI

```python
initial = {
  "version": "konva-1",
  "background": "",
  "objects": [
    {
      "id": "guide",
      "type": "rect",
      "x": 40, "y": 40, "width": 520, "height": 220,
      "stroke": "#888", "strokeWidth": 1, "fill": "rgba(0,0,0,0)",
      "locked": True,
    },
    {
      "id": "roi",
      "type": "rect",
      "x": 120, "y": 80, "width": 160, "height": 100,
      "stroke": "#e67e22", "strokeWidth": 2, "fill": "rgba(230,126,34,0.25)",
    },
  ],
}

st_canvas(
    drawing_mode="transform",
    initial_drawing=initial,
    transform_options={"allow_scale": False},
    key="locks_demo",
)
```

### 12.2 Grouped shapes

```python
initial = {
  "version": "konva-1",
  "objects": [
    {"id": "g1", "type": "group", "children": ["a", "b"], "scalable": False},
    {"id": "a", "type": "circle", "x": 200, "y": 150, "radius": 30,
     "fill": "rgba(52,152,219,0.4)", "stroke": "#2980b9", "strokeWidth": 2,
     "groupId": "g1"},
    {"id": "b", "type": "circle", "x": 280, "y": 150, "radius": 30,
     "fill": "rgba(52,152,219,0.4)", "stroke": "#2980b9", "strokeWidth": 2,
     "groupId": "g1"},
    {"id": "alone", "type": "rect", "x": 400, "y": 120, "width": 80, "height": 60,
     "fill": "rgba(46,204,113,0.3)", "stroke": "#27ae60", "strokeWidth": 2},
  ],
}
```

### 12.3 Axis handle

```python
initial = {
  "version": "konva-1",
  "objects": [
    {"id": "rail", "type": "line", "points": [100, 200, 500, 200],
     "stroke": "#333", "strokeWidth": 2, "locked": True},
    {"id": "knob", "type": "circle", "x": 300, "y": 200, "radius": 10,
     "fill": "#f1c40f", "stroke": "#000", "strokeWidth": 2,
     "scalable": False, "rotatable": False,
     "dragConstraint": {"type": "axis", "axis": {"x": 1, "y": 0}, "min": -200, "max": 200}},
  ],
}
```

---

## 13. Implementation order (recommended PR sequence)

### PR A — Locks + transform_options (smallest, highest value)

1. Types + effective interaction helper + tests  
2. Stop forced `draggable=true`  
3. Transformer honor `allow_scale` / per-object scalable/rotatable  
4. Demo page **Locks & transform options**  
5. README blurb  

### PR B — Groups

1. Group wrapper render path  
2. Bake-on-commit for children (rect/circle/polygon/line/freedraw)  
3. Demo page **Groups**  
4. Undo/redo verification  

### PR C — Axis dragConstraint

1. `dragmove` projection helper + tests  
2. Demo page **Axis handles**  
3. README  

Do not combine A+B+C in one giant PR if avoidable.

---

## 14. Risks & edge cases

| Risk | Mitigation |
| --- | --- |
| Baking group transform for `points`-based shapes is error-prone | Shared matrix helper; unit tests with known 90° rotation |
| Selecting locked object under unlocked object | `listening:false` on locked |
| `initial_drawing` replace logic (`objectsKey`) drops local edits | Keep existing replace policy; document that parent must change key to hard-reset |
| Double-click delete vs polygon point remove | Existing mode guards; ensure locked never deletes |
| Performance with many groups | One Konva.Group per groupId; avoid nesting groups in v1 |
| Scale + axis constraint interaction | Handles set `scalable:false` |

---

## 15. Out-of-scope follow-ups (do not implement in 0.3.0 unless asked)

- Nested groups  
- Magnetic snapping / grid  
- Multi-select (Shift+click) without groupId  
- Skew / free transform  
- Collaborative cursors  
- Domain-specific tools  

---

## 16. Definition of done

- [ ] PR A merged or ready: locks + `transform_options` + demo + tests  
- [ ] PR B: groups + demo + bake tests  
- [ ] PR C: axis handles + demo + tests  
- [ ] README + MIGRATION updated  
- [ ] Version bump to `0.3.0` in both `pyproject.toml` files  
- [ ] `uv run streamlit run app.py` shows new pages; old pages OK  
- [ ] `npm test` / `pytest` green in CI or documented local commands  

---

## 17. Local verification commands

```bash
# repo root: /data2/dev/cvrlab/streamlit-drawable-konva
uv sync

cd streamlit_drawable_konva/frontend
npm install
npm run build
# after adding vitest:
# npm test

cd ../..
uv run pytest -q
uv run streamlit run app.py
```

Frontend watch (existing workflow):

```bash
# terminal A
cd streamlit_drawable_konva/frontend && npm run dev
# terminal B
uv run streamlit run app.py
```

---

## 18. Note for consumers (informative only — do not encode domain logic here)

Downstream apps (diagram editors, ROI tools, measurement UIs, etc.) should compose **locked guides + groups + axis handles + dimension fields in Streamlit**. This component only supplies interaction primitives; geometry/business rules stay in the app.
