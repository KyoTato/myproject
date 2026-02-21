# Simple Static Website

This folder contains a personal "About Me" static website scaffold.

Quick start:

1. Open `website/index.html` directly in your browser, or run a simple HTTP server:

```powershell
cd website
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

What to edit:

- `index.html` — update `Your Name`, the About bio, projects, and social links.
- `styles.css` — tweak colors, spacing, and fonts. The theme is dark/neon by default.
- `script.js` — contains nav toggle, contact form demo, and a "copy email" helper.

Add an avatar image at `website/assets/avatar.png` or change the `img` src in `index.html`.

When you're ready, tell me your name, short bio, links to projects (title + url + description), and social URLs and I'll populate the site with them.
