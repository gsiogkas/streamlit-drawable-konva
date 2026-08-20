# Publishing guide

Do these in order for a **first** release: **GitHub → PyPI → Streamlit `.app` demo → Components gallery**.

For later releases, see [Updating an existing release](#updating-an-existing-release-eg-010--020) below.

Live demo: https://drawable-konva-demo.streamlit.app

Current package version: **0.3.1**

---

## 1. GitHub (you do this)

From the repo root (`streamlit-drawable-konva`):

```bash
# rebuild frontend before release commits
cd streamlit_drawable_konva/frontend
npm install
npm run build
cd ../..

git add .
git status   # confirm streamlit_drawable_konva/frontend/build/index.js is included
git commit -m "Release 0.2.0: viewport zoom/pan/tilt and migration guide"
```

Create an empty repo on GitHub named `streamlit-drawable-konva` (no README/license — this tree already has them), then:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USER/streamlit-drawable-konva.git
git push -u origin main
```

Optional tag:

```bash
git tag v0.2.0
git push origin v0.2.0
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

Bump `version` in both before each new upload (PyPI versions are immutable):

- root [`pyproject.toml`](pyproject.toml)
- [`streamlit_drawable_konva/pyproject.toml`](streamlit_drawable_konva/pyproject.toml)

Also keep [`streamlit_drawable_konva/frontend/package.json`](streamlit_drawable_konva/frontend/package.json) in sync for clarity.

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

Your demo URL:

`https://drawable-konva-demo.streamlit.app`

Put that URL into `gallery/streamlit-drawable-konva.json` → `links.demo`.

### After PyPI exists (optional)

You can change `requirements.txt` to install from PyPI instead of the repo copy:

```text
streamlit>=1.51
numpy
pillow
pandas
streamlit-drawable-konva>=0.2.0
```

Keeping `.` is fine and always matches the demo branch (recommended while iterating).

---

## 4. Streamlit Components gallery

Gallery submissions are a PR to the open registry:

https://github.com/streamlit/gallery/tree/main/components/registry

### First-time listing

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

## Updating an existing release (e.g. 0.1.0 → 0.2.0)

Use this whenever you ship a new version after the project is already on GitHub / PyPI / Cloud / gallery.

### A. Bump version locally

1. Set the new version in:
   - [`pyproject.toml`](pyproject.toml)
   - [`streamlit_drawable_konva/pyproject.toml`](streamlit_drawable_konva/pyproject.toml)
   - [`streamlit_drawable_konva/frontend/package.json`](streamlit_drawable_konva/frontend/package.json)
2. Rebuild frontend (required if JS/TS changed):

```bash
cd streamlit_drawable_konva/frontend
npm install
npm run build
cd ../..
```

3. Commit and push to GitHub:

```bash
git add .
git commit -m "Release 0.2.0: <short summary of changes>"
git push origin main
git tag v0.2.0
git push origin v0.2.0
```

### B. Publish the new version to PyPI

PyPI **never** overwrites a version. Always bump first, then:

```bash
uv build
uv publish
```

Check https://pypi.org/project/streamlit-drawable-konva/ shows **0.2.0**.

Users upgrade with:

```bash
pip install -U streamlit-drawable-konva
# or
uv add streamlit-drawable-konva==0.2.0
```

### C. Refresh the Streamlit `.app` demo

- If `requirements.txt` uses `.` (this repo): Community Cloud usually **auto-redeploys** after you push `main`. If not, open the app in the Cloud dashboard → **Reboot** / **Redeploy**.
- If `requirements.txt` pins PyPI (`streamlit-drawable-konva>=0.2.0`): bump the pin if needed, push, then reboot the app so it picks up the new wheel.

### D. Update the Streamlit Components gallery entry

You usually **do not** need a new gallery PR for a version bump. The gallery tracks your GitHub repo + PyPI project name; stars/downloads refresh automatically.

Open a follow-up PR to `streamlit/gallery` only if something in the registry JSON changed, for example:

- new `links.demo` / docs URL
- title, categories, or install command
- author GitHub handle
- media image

Edit `components/registry/components/streamlit-drawable-konva.json` in your fork and PR again.

---

## Checklist

### First release

- [ ] Frontend `npm run build` artifacts committed
- [ ] GitHub repo public and pushed
- [ ] PyPI package `streamlit-drawable-konva` live
- [ ] Community Cloud app live (`*.streamlit.app`)
- [ ] Gallery JSON filled with real GitHub / PyPI / demo URLs
- [ ] PR opened to `streamlit/gallery`

### Each update (0.x.y → next)

- [ ] Version bumped in both `pyproject.toml` files (+ frontend `package.json`)
- [ ] Frontend rebuilt and committed if UI changed
- [ ] GitHub `main` pushed (+ optional `vX.Y.Z` tag)
- [ ] New version uploaded with `uv publish`
- [ ] Streamlit Cloud redeployed / rebooted
- [ ] Gallery JSON PR only if metadata/links changed
