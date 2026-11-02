---
name: carbon-design-system
description: IBM Carbon Design System v11 styling guidelines, tokens, CSS custom properties, and BEM component patterns (cds--*). Use whenever designing, styling, building, or modifying UI components, CSS files, layouts, tables, modals, forms, or themes in this project. Also activate whenever the user mentions Carbon Design System, styles, UI design, color tokens, IBM Plex, dark/light themes, data tables, or layout updates.
---

# IBM Carbon Design System v11 (Project Design Skill)

This skill governs all user interface design, styling, and markup generation for the **Courtside Pulse** NBA application and related views built on the **IBM Carbon Design System v11**.

---

## 1. Core Principles

1. **Strict Prefix Convention (`cds--*`):**
   Always use Carbon v11 official BEM class names prefixed with `cds--` (e.g. `cds--btn`, `cds--header`, `cds--data-table`, `cds--tile`, `cds--tag`, `cds--search`). Never use legacy Carbon v10 prefixes like `bx--`.

2. **Systematic Tokenization:**
   Never write arbitrary hex color codes (e.g. `#0f62fe` or `#f4f4f4`) in custom CSS rules or inline styles. Always bind styles to official Carbon CSS custom properties:
   - Backgrounds: `var(--cds-background)`
   - Surfaces & Cards: `var(--cds-layer-01)`, `var(--cds-layer-02)`, `var(--cds-layer-03)`
   - Typography: `var(--cds-text-primary)`, `var(--cds-text-secondary)`, `var(--cds-text-helper)`
   - Borders: `var(--cds-border-subtle)`, `var(--cds-border-strong)`, `var(--cds-border-interactive)`
   - Status & Alerts: `var(--cds-support-error)`, `var(--cds-support-success)`, `var(--cds-support-warning)`, `var(--cds-support-info)`

3. **Typography Standard:**
   - **UI Copy & Headings:** `IBM Plex Sans`
   - **Tabular Figures & Code:** `IBM Plex Mono`
   - Never substitute arbitrary sans-serif typefaces like Arial, Helvetica, or Inter.

4. **8px Mini-Unit Spacing:**
   All layout margins, paddings, and component dimensions adhere to the 8px mini-unit scale (`0.125rem` / 2px, `0.25rem` / 4px, `0.5rem` / 8px, `0.75rem` / 12px, `1rem` / 16px, `1.5rem` / 24px, `2rem` / 32px, `3rem` / 48px).

---

## 2. Progressive Disclosure & Detailed References

When you need exact token definitions or complete HTML component templates, consult the bundled reference documents:

- **Tokens & Theming Reference:** Read `references/tokens.md` for the complete catalog of Carbon v11 CSS custom properties, theme tokens (`white`, `g10`, `g90`, `g100`), font scale pairings, and breakpoint definitions.
- **Component Markup Templates:** Read `references/components.md` for production-ready HTML markup structures covering Headers, Side Nav, Data Tables, Pagination, Content Switchers, Modals, Toasts, Inline Notifications, and Accordions.

---

## 3. Theme Implementation Rules

Courtside Pulse supports dynamic runtime switching across Carbon's four primary themes:
- **`white`**: High-contrast crisp light theme.
- **`g10`**: Warm gray light theme (default for Courtside Pulse).
- **`g90`**: Dark charcoal gray theme.
- **`g100`**: Deep obsidian black theme.

### Theme Binding
Theme state must be synchronized on both the `<html>` root and `<body>` tags:
```javascript
document.documentElement.setAttribute('data-carbon-theme', theme);
document.body.className = `cds--theme--${theme}`;
```

Because Carbon v11 scopes CSS variables to the active `cds--theme--*` container class, any element relying on `var(--cds-*)` automatically adapts to light and dark modes with zero duplicate CSS declarations.

---

## 4. Component Patterns & BEM Guidelines

### Header & Shell
- Header container: `<header class="cds--header">`
- Skip link for accessibility: `<a class="cds--skip-to-content" href="#main-content">`
- Action buttons: `<button class="cds--header__action">`
- Top navigation bar: `<nav class="cds--header__nav"><ul class="cds--header__menu-bar">`
- Active menu indicator: `cds--header__menu-item--current`

### Side Navigation Rail
- Nav container: `<nav class="cds--side-nav cds--side-nav--expanded" id="app-side-nav">`
- Nav item links: `cds--side-nav__link` with `cds--side-nav__link--current` on the active item.
- Responsive handling: Collapse side rail off-canvas below 1056px breakpoint (`transform: translateX(-100%)`). Toggle with `cds--side-nav--expanded`.

### Content Switchers & Tabs
- Wrapper: `<div class="cds--content-switcher" role="tablist">`
- Switcher button: `<button class="cds--content-switcher-btn">`
- Selected state: `cds--content-switcher--selected`

### Form Controls & Filter Toolbar
- Search input: `<div class="cds--search cds--search--lg" role="search">`
- Text input: `<input class="cds--text-input">`
- Text area: `<textarea class="cds--text-area">`
- Dropdown select: `<div class="cds--select"><select class="cds--select-input">`
- Filter chips: `<span class="cds--tag cds--tag--filter">`

### Feed Tiles & Cards
- Base tile: `<article class="cds--tile">`
- Clickable tile: `<div class="cds--tile cds--tile--clickable">`
- Priority accents: Apply a 4px left border indicator (`border-left: 4px solid ...`) using Carbon status tokens for high urgency items.

### Data Tables & Pagination
- Container: `<div class="cds--data-table-container">`
- Table root: `<table class="cds--data-table cds--data-table--sort cds--data-table--zebra">`
- Sort buttons: `<button class="cds--table-sort cds--table-sort--active">`
- Numeric columns: Right-align or format with monospace figures (`IBM Plex Mono`).
- Pagination wrapper: `<div class="cds--pagination">`

### Modals
- Dialog wrapper: `<div class="cds--modal is-visible" role="dialog" aria-modal="true">`
- Inner container: `<div class="cds--modal-container">`
- Header: `<div class="cds--modal-header">`
- Body: `<div class="cds--modal-content">`
- Footer: `<div class="cds--modal-footer">` with primary action on the right and secondary dismiss on the left.

### Notifications
- Inline (banner/alert): `<div class="cds--inline-notification cds--inline-notification--warning" role="alert">`
- Toast (temporary floating alert): `<div class="cds--toast-notification cds--toast-notification--success" role="status">`

---

## 5. Courtside Pulse Architecture Guidelines

1. **State Integration:**
   When adding or updating UI controls, connect them to `store` in `js/store.js` using reactive pub/sub events. Always call `store.notify()` after modifying state properties.

2. **Refactoring Inline Styles into Classes:**
   When performing CSS customization, extract inline `style="..."` attributes into semantic BEM or modifier classes in a dedicated stylesheet. Keep overrides strictly within Carbon's CSS custom property contracts.

3. **Performance & Bundling:**
   After editing component files in `js/components/`, always execute `npm run build` to compile the changes into `js/bundle.js`.

---

## 6. Carbon Compliance Checklist

Before finalizing any UI, component, or style change, verify:
- [ ] Every Carbon class uses the official `cds--*` prefix.
- [ ] All colors derive from Carbon custom properties (`var(--cds-*)`).
- [ ] Typography uses `IBM Plex Sans` for UI text and `IBM Plex Mono` for tabular data.
- [ ] Interactive controls include proper ARIA roles and accessible keyboard states.
- [ ] Layout adjusts cleanly across small (320px), medium (672px), and large (1056px+) viewports.
- [ ] Theme changes toggle seamlessly without hardcoded light/dark color conflicts.
