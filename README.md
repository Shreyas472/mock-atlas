# Atlas — SRA VJTI

Landing page for **Atlas**, the SRA VJTI knowledge hub for first-year domains.

Six domains, each with its own resources page:

Intelligent Systems · Computer Architecture · Robotics · Embedded Systems · CAD / CAM · PCB Designing

## Run locally

It is a static site, but it must be served over HTTP (not opened via `file://`).

```bash
python -m http.server 8743
```

Then open <http://localhost:8743/>.

## Project structure

```
.
├── index.html             # landing page
├── domains/               # one resources page per domain (empty for now)
├── css/style.css
├── js/
│   ├── main.js            # domain list + landing cards
│   └── wave.js            # animated background
└── assets/images/arm.png  # hero illustration
```

## Adding content

- The domain list lives in the `DOMAINS` array in `js/main.js`.
- Each domain's resources go inside the `<section class="resources">` of its file in `domains/`.

## Deploy (GitHub Pages)

Push to GitHub, then **Settings → Pages → Deploy from a branch → `main` / root**. All paths are relative, so it works on a project site.
