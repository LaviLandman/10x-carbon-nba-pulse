# Courtside Pulse (10x-carbon-nba-pulse)

> NBA News & Community Intelligence Hub built strictly on the **IBM Carbon Design System v11**.

[![Design System](https://img.shields.io/badge/Design%20System-IBM%20Carbon%20v11-0f62fe?logo=ibm)](https://carbondesignsystem.com/)
[![Typography](https://img.shields.io/badge/Typography-IBM%20Plex%20Sans%20%26%20Mono-161616)](https://fonts.google.com/specimen/IBM+Plex+Sans)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-24a148?logo=github)](https://lavilandman.github.io/10x-carbon-nba-pulse/)

---

## Live Demos

- **Main Application:** [https://lavilandman.github.io/10x-carbon-nba-pulse/](https://lavilandman.github.io/10x-carbon-nba-pulse/)
- **Brand & Design System Guide:** [https://lavilandman.github.io/10x-carbon-nba-pulse/brand-guide.html](https://lavilandman.github.io/10x-carbon-nba-pulse/brand-guide.html)

---

## Project Overview

**Courtside Pulse** is a high-density, real-time NBA community intelligence platform that showcases enterprise design system rigor applied to sports media. It features live game updates, breaking trade rumors, injury tracking, an interactive conference standings data table with sortable columns and pagination, and interactive post creation.

Every component, token, spacing unit, and typography scale strictly conforms to **IBM Carbon Design System v11** standards.

---

## Key Features

1. **Carbon Shell & Navigation:**
   - Fixed Carbon Header (`cds--header`) with global action triggers and skip-to-content accessibility.
   - Side navigation rail (`cds--side-nav`) for conference and team filtering, with responsive off-canvas collapse below 1056px breakpoint.
   - Content Switcher tabs (`cds--content-switcher`) for switching between All Updates, Trade Wire, Game Recaps, Injury Reports, and Community Feed.

2. **Real-Time Search & Multi-Facet Filters:**
   - Carbon Search toolbar (`cds--search`) with instant text filtering across headlines, summaries, and authors.
   - Dropdown selectors (`cds--select`) for conference and team classification.
   - Active filter chips (`cds--tag--filter`) with click-to-remove tags.

3. **Conference Power Standings Data Table:**
   - Carbon Data Table (`cds--data-table`) with sortable headers, zebra striping, and status indicators.
   - Column figures formatted with monospace alignment using **IBM Plex Mono**.
   - Client-side pagination controls (`cds--pagination`).

4. **Interactive Post Publishing Modal:**
   - Carbon Modal dialog (`cds--modal`) with structured inputs (`cds--text-input`, `cds--text-area`, `cds--select`).
   - Dispatches instant toast notifications (`cds--toast-notification`) and updates the reactive feed stream in real time.

5. **Dynamic Theming:**
   - Native support for all four Carbon themes: **White**, **Gray 10** (default), **Gray 90**, and **Gray 100**.
   - Zero-reload theme switching via `data-carbon-theme` and `cds--theme--*` container tokens.

6. **Interactive Brand Guide (`brand-guide.html`):**
   - Standalone brand identity guide detailing core design philosophy and voice & tone.
   - Interactive palette swatches with click-to-copy CSS custom properties (`var(--cds-*)`).
   - Typography specimens for **IBM Plex Sans** and **IBM Plex Mono**.
   - Visual 8px mini-unit spacing scale ($spacing-01 to $spacing-09).
   - Component gallery with copyable HTML markup templates.

7. **Project Design System Skill:**
   - Agent skill located at `.agents/skills/carbon-design-system/` with bundled token catalogs and markup snippets.

---

## Technical Stack & Architecture

- **Runtime & Language:** Vanilla HTML5, CSS3, JavaScript ES Modules (no React or framework dependencies).
- **Bundler:** `esbuild` for compiling an IIFE standalone bundle (`js/bundle.js`) supporting direct `file://` and static hosting.
- **Design System Styles:** Vendored IBM Carbon Design System v11 CSS (`css/carbon-styles.min.css`).
- **Typography:** `IBM Plex Sans` (UI copy) and `IBM Plex Mono` (tabular numbers) via Google Fonts.
- **State Architecture:** Central reactive pub/sub store (`js/store.js`).

---

## Directory Structure

```
10x-carbon-nba-pulse/
├── README.md                  # Project documentation & live links
├── AGENTS.md                  # AI agent guidelines & operational context
├── package.json               # Scripts and Carbon styles dependency
├── index.html                 # Main application entry point & Carbon grid
├── brand-guide.html           # Standalone Brand & Design System Guide page
├── .agents/                   # Project-level agent skills
│   └── skills/
│       └── carbon-design-system/
│           ├── SKILL.md       # Project Carbon v11 design skill instructions
│           └── references/    # Token and component markup templates
├── css/
│   └── carbon-styles.min.css  # Vendored IBM Carbon Design System v11 CSS
├── js/
│   ├── app.js                 # View orchestration & mount logic
│   ├── bundle.js              # Compiled standalone script
│   ├── store.js               # Reactive pub/sub state store
│   ├── data.js                # Mock NBA teams, posts, and standings data
│   └── components/            # Carbon component modules
│       ├── header.js          # Carbon Header
│       ├── nav.js             # Side navigation rail
│       ├── filters.js         # Search & filter toolbar
│       ├── feed.js            # Posts feed stream & post tiles
│       ├── table.js           # Standings data table & pagination
│       ├── statsWidget.js     # Accordion & trade window progress bar
│       ├── postModal.js       # New post modal dialog
│       ├── notifications.js   # Toast notifications
│       └── icons.js           # Carbon SVG icon paths
└── plans/                     # Implementation plans and task trackers
```

---

## Local Development

### 1. Build the standalone bundle:

```bash
npm run build
```

### 2. Run local development server:

```bash
npm start
# Server starts at http://localhost:3000
```

Or using Python:

```bash
python3 -m http.server 8080
```

### 3. Syntax verification:

```bash
node --check js/app.js
node --check js/store.js
node --check js/data.js
```

---

## License

Apache-2.0
