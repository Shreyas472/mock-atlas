# Atlas — SRA VJTI

Landing page for **Atlas**, the SRA VJTI knowledge hub for first-year domains.

Six domains, each with its own resources page:

Intelligent Systems · Computer Architecture · Robotics · Embedded Systems · CAD / CAM · PCB Designing

## How to run

This is a plain static site (HTML, CSS, JS) with no build step and no dependencies. It is not hosted on GitHub Pages, so run it locally.

1. Clone or download the repo and open a terminal in its root folder (the one containing `index.html`).
2. Start a local server with any one of:

   ```bash
   # Python 3 (recommended)
   python -m http.server 8743

   # Node.js
   npx serve .
   ```

   With VS Code you can instead use the **Live Server** extension: right-click `index.html` and choose **Open with Live Server**.
3. Open <http://localhost:8743/> (or the address `npx serve` prints).
4. Press `Ctrl+C` in the terminal to stop the server.

Opening `index.html` directly in a browser also works, but a local server matches how the site will behave once hosted.

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
