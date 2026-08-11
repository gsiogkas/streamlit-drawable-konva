# Publishing guide

Do these in order: **GitHub → PyPI → Streamlit `.app` demo → Components gallery**.

Replace `YOUR_GITHUB_USER` and `YOUR_APP_SLUG` with your values.

---

## 1. GitHub (you do this)

From the repo root (`streamlit-drawable-konva`):

```bash
# optional: rebuild frontend before the first commit
cd streamlit_drawable_konva/frontend
npm install
npm run build
cd ../..

git add .
git status   # confirm streamlit_drawable_konva/frontend/build/index.js is included
git commit -m "Initial release: Streamlit Drawable Konva (Components v2)"
```

Create an empty repo on GitHub named `streamlit-drawable-konva` (no README/license — this tree already has them), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USER/streamlit-drawable-konva.git
git push -u origin main
```

Update these files after you know the final URLs:

- [`pyproject.toml`](pyproject.toml) — `[project.urls]`
- [`gallery/streamlit-drawable-konva.json`](gallery/streamlit-drawable-konva.json) — author + links
- This guide’s placeholders

---

## 2. PyPI

### One-time setup

1. Create an account at [pypi.org](https://pypi.org) (and ideally [test.pypi.org](https://test.pypi.org)).
2. Create an **API token** (Account settings → API tokens).
3. Prefer Trusted Publishing later; for a first publish, token is fine.

### Build and publish

```bash
# from repo root, with frontend already built
uv build
uv publish
```

`uv publish` will prompt for credentials, or set:

```bash
# Windows PowerShell example
$env:UV_PUBLISH_TOKEN = "pypi-...."
uv publish
```

Optional dry run on TestPyPI:

```bash
uv publish --publish-url https://test.pypi.org/legacy/
```

Verify: https://pypi.org/project/streamlit-drawable-konva/

Bump `version` in both:

- root [`pyproject.toml`](pyproject.toml)
- [`streamlit_drawable_konva/pyproject.toml`](streamlit_drawable_konva/pyproject.toml)

…before each new release.

---

## 3. Streamlit Community Cloud demo (`.streamlit.app`)

This repo is already Cloud-ready:

- [`app.py`](app.py) — demo entrypoint
- [`requirements.txt`](requirements.txt) — installs Streamlit deps **and this package from `.`**
- Built assets committed under `streamlit_drawable_konva/frontend/build/`

### Deploy

1. Open [share.streamlit.io](https://share.streamlit.io) / Community Cloud and sign in with GitHub.
2. **New app** → select `YOUR_GITHUB_USER/streamlit-drawable-konva`.
3. Main file: `app.py`
4. Branch: `main`
5. Deploy.

Your demo URL will look like:

`https://YOUR_APP_SLUG.streamlit.app`

Put that URL into `gallery/streamlit-drawable-konva.json` → `links.demo`.

### After PyPI exists (optional)

You can change `requirements.txt` to install from PyPI instead of the repo copy:

```text
streamlit>=1.51
numpy
pillow
pandas
streamlit-drawable-konva>=0.1.0
```

Keeping `.` is fine and always matches the demo branch.

---

## 4. Streamlit Components gallery

Gallery submissions are a PR to the open registry:

https://github.com/streamlit/gallery/tree/main/components/registry

### Steps

1. Publish to PyPI and deploy the `.streamlit.app` demo first (gallery wants real links).
2. Fork https://github.com/streamlit/gallery
3. Add a file:

   `components/registry/components/streamlit-drawable-konva.json`

4. Copy from this repo’s template after editing placeholders:

   [`gallery/streamlit-drawable-konva.json`](gallery/streamlit-drawable-konva.json)

5. Open a PR to `streamlit/gallery`. CI validates the JSON.
6. After merge, the component appears on https://streamlit.io/components after the weekly refresh (early Monday UTC).

Suggested categories (already in the template): `Images & video`, `Widgets`.

---

## Checklist

- [ ] Frontend `npm run build` artifacts committed
- [ ] GitHub repo public and pushed
- [ ] PyPI package `streamlit-drawable-konva` live
- [ ] Community Cloud app live (`*.streamlit.app`)
- [ ] Gallery JSON filled with real GitHub / PyPI / demo URLs
- [ ] PR opened to `streamlit/gallery`
