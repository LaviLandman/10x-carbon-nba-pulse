# TODO - Build Standalone Brand Guide HTML Page

## Context
Create a standalone `brand-guide.html` page at the repository root showcasing the IBM Carbon Design System v11 as applied to Courtside Pulse. The page serves as a comprehensive, interactive design system documentation hub and component gallery featuring brand identity, dynamic theme switching (white, g10, g90, g100), color palette swatches, typography specimens (IBM Plex Sans and IBM Plex Mono), the 8px mini-unit spacing scale, and live Carbon UI component specimens with copyable HTML snippets.

## Tasks

- [x] 1. Initialize `brand-guide.html` baseline shell and layout
       Files: `brand-guide.html`
       Done when: HTML5 document loads Carbon CSS (`css/carbon-styles.min.css`), Google Fonts (IBM Plex Sans, IBM Plex Mono), responsive navigation, and root layout structure.

- [x] 2. Implement Brand Identity, Voice & Tone, and Theme Switcher
       Files: `brand-guide.html`
       Done when: Brand introduction, design philosophy, and functional runtime theme switcher (`white`, `g10`, `g90`, `g100`) operate smoothly across all guide sections.

- [x] 3. Build Color System and Theme Token Swatches
       Files: `brand-guide.html`
       Done when: Interactive swatch cards display Carbon core colors (Blue, Gray, Red, Green, Yellow, Teal, Purple) and semantic CSS custom properties (`--cds-background`, `--cds-layer-01`, `--cds-text-primary`, `--cds-support-*`) with click-to-copy token utility.

- [x] 4. Build Typography Specimens and 8px Spacing Grid
       Files: `brand-guide.html`
       Done when: Interactive specimens showcase IBM Plex Sans (Headings 01-04, Body, Label, Caption) and IBM Plex Mono tabular figures alongside an interactive 8px mini-unit spacing scale ($spacing-01 to $spacing-10).

- [x] 5. Build Interactive Component Showcase with Copyable Snippets
       Files: `brand-guide.html`
       Done when: Live specimens for Carbon Buttons, Tags, Tiles, Notifications (Inline & Toast), Data Table, Pagination, Accordion, Progress Bar, Content Switcher, and Form Inputs render with copyable HTML code tabs.

- [x] 6. Verify page interactions, syntax, and design system compliance
       Files: `brand-guide.html`
       Done when: All theme changes, copy-to-clipboard interactions, and accordion/modal triggers work without console errors, and the document contains zero em dashes.

## Out of Scope
- Modifying `index.html` or main application JavaScript files (`js/*`).
- Git commits, git pushes, or remote deployment.
