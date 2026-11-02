# AGENTS.md - Courtside Pulse (10x-carbon-nba-pulse)

## Project Overview

**Courtside Pulse** (`10x-carbon-nba-pulse`) is a frontend application for an NBA News & Updates community hub built with vanilla HTML5, JavaScript (ES modules), and styled strictly according to **IBM Carbon Design System v11**.

The site showcases posts, breaking trade alerts, live game recaps, injury reports, a sortable standings data table with pagination, and interactive post creation.

---

## Technical Stack & Architecture

- **Language & Runtime:** Vanilla ES Modules (no React, no bundler required).
- **Design System:** IBM Carbon Design System v11 (`@carbon/styles`).
- **Typography:** IBM Plex Sans and IBM Plex Mono loaded from Google Fonts.
- **State Management:** Reactive pub/sub store (`js/store.js`) handling filters, search, posts, likes, comments, and theme tokens.

---

## Directory Structure

```
10x-carbon-nba-pulse/
├── AGENTS.md                  # Project context and agent instructions
├── README.md                  # Project readme (if present)
├── package.json               # Local scripts and dependencies (@carbon/styles)
├── .gitignore                 # Excludes node_modules, dist, .DS_Store
├── index.html                 # Main entry point and Carbon grid structure
├── brand-guide.html           # Standalone Brand & Design System Guide page
├── .agents/                   # Project-level agent skills
│   └── skills/
│       └── carbon-design-system/
│           ├── SKILL.md       # Project Carbon v11 design skill instructions
│           └── references/    # Token and component markup templates
├── css/
│   └── carbon-styles.min.css  # Vendored IBM Carbon Design System v11 CSS
├── js/
│   ├── app.js                 # Application entry point & view orchestration
│   ├── bundle.js              # Compiled standalone script (supports direct file:// and web)
│   ├── store.js               # Reactive state store & event dispatching
│   ├── data.js                # Mock NBA teams, posts, standings, and alerts
│   └── components/
│       ├── icons.js           # Standard IBM Carbon SVG icon paths
│       ├── header.js          # Carbon Header (cds--header, global actions)
│       ├── nav.js             # Carbon Side Navigation rail (cds--side-nav)
│       ├── filters.js         # Carbon Search & Dropdown filters (cds--search, cds--select)
│       ├── feed.js            # News feed stream & Post tiles (cds--tile)
│       ├── table.js           # Standings Data Table & Pagination (cds--data-table, cds--pagination)
│       ├── statsWidget.js     # Carbon Accordion & Progress Bar (cds--accordion, cds--progress-bar)
│       ├── postModal.js       # New Post Modal Dialog (cds--modal)
│       └── notifications.js   # Carbon Toast & Alert notifications (cds--toast-notification)
└── plans/                     # Implementation plans and task trackers
```

---

## IBM Carbon Design System Conventions

1. **Prefix Convention:** Always use the official Carbon v11 prefix `cds--*` for all component classes (e.g., `cds--header`, `cds--btn`, `cds--data-table`, `cds--tile`, `cds--tag`, `cds--search`).
2. **Typography:** Use `IBM Plex Sans` for UI copy and headings, and `IBM Plex Mono` for tabular figures or code.
3. **Theming:** The application supports standard Carbon theme tokens (`white`, `g10`, `g90`, `g100`). Themes are applied via the `data-carbon-theme` attribute on `<html>` and the matching `cds--theme--*` class on `<body>`.
4. **Color Tokens:** Utilize Carbon CSS custom properties (`var(--cds-background)`, `var(--cds-layer-01)`, `var(--cds-text-primary)`, `var(--cds-border-subtle)`) rather than arbitrary hex values.
5. **Tags & Badges:** Use native Carbon tag classes: `cds--tag--blue`, `cds--tag--green`, `cds--tag--red`, `cds--tag--purple`, `cds--tag--teal`, `cds--tag--outline`.

---

## Local Development & Testing

Build standalone script:

```bash
npm run build
```

Run a static local server from the project root:

```bash
# Using npm script:
npm start

# Or using npx serve:
npx serve . -l 3000

# Or using Python 3:
python3 -m http.server 8080
```

Verify JavaScript syntax:

```bash
node --check js/app.js
node --check js/store.js
node --check js/data.js
```

---

## Agent Guidelines & Safety Rules

- **Never use an em dash:** Replace with regular hyphen minus (-) only.
- **Git Operations:** Always ask for explicit user permission before performing any `git commit` or `git push`. Never push or commit without confirmation.
- **Path Formatting:** Always format file paths as markdown hyperlinks with the explicit `file://` URI scheme accompanied by the folder location in parentheses (e.g. `[filename](file:///full/path) (~/folder/path/)`), or as plain absolute text paths.
- **Roadmap Execution Phases:**
  - Steps 1-5: Base project and Carbon component implementation (COMPLETED).
  - Step 6: Manual styling customization using CSS (PAUSED / AWAITING INSTRUCTION).
  - Step 7: Create styling skill for this design system (COMPLETED - project skill at `.agents/skills/carbon-design-system/`).
  - Step 8: Build brand guide page (COMPLETED - standalone page at `brand-guide.html`).
  - Step 9: Deploy to GitHub (`https://github.com/LaviLandman/10x-carbon-nba-pulse`) and configure GitHub Pages (DEFERRED).
