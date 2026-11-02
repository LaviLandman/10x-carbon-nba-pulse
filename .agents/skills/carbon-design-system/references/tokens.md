# IBM Carbon Design System v11 - Design Tokens Reference

This reference catalogs core design tokens, CSS custom properties, and theme variables used across IBM Carbon Design System v11 applications.

---

## 1. Theme Model & Token Scope

Carbon v11 provides four standard themes:
- **Light Themes:** `white` (default high-contrast light), `g10` (soft warm gray background `#f4f4f4`)
- **Dark Themes:** `g90` (dark charcoal `#262626`), `g100` (deep black/gray `#161616`)

### Applying Themes
Set the theme attribute on the root HTML element and apply the matching body class:
```html
<html lang="en" data-carbon-theme="g10">
  <body class="cds--theme--g10">
    ...
  </body>
</html>
```

---

## 2. Color Tokens

Never hardcode hex values in component styling. Use Carbon CSS custom properties:

### Background & Layer Tokens
| Token | Description | Example Role |
| :--- | :--- | :--- |
| `var(--cds-background)` | Application canvas background | Page background |
| `var(--cds-layer-01)` | First surface level above background | Cards, side navigation, data table containers |
| `var(--cds-layer-02)` | Second surface level above layer-01 | Nested cards, accordion contents |
| `var(--cds-layer-03)` | Third surface level | Nested dialogs, flyouts |
| `var(--cds-layer-accent-01)` | Accent surface for layer-01 | Selected state highlights |

### Text & Icon Tokens
| Token | Description | Contrast Role |
| :--- | :--- | :--- |
| `var(--cds-text-primary)` | Highest emphasis text | Headlines, primary copy |
| `var(--cds-text-secondary)` | Medium emphasis text | Subtitles, summaries, table secondary text |
| `var(--cds-text-placeholder)` | Lowest emphasis text | Input placeholders |
| `var(--cds-text-helper)` | Microcopy | Field hints, timestamps, captions |
| `var(--cds-text-error)` | Error feedback text | Form validation alerts |
| `var(--cds-icon-primary)` | Primary icon fill | Navigation icons, standard buttons |
| `var(--cds-icon-secondary)` | Secondary icon fill | Sort indicators, clear actions |

### Border Tokens
| Token | Description | Usage |
| :--- | :--- | :--- |
| `var(--cds-border-subtle)` | Subtle divider lines | Table row separators, card borders |
| `var(--cds-border-strong)` | Distinct boundaries | Active tabs, form inputs |
| `var(--cds-border-interactive)` | Interactive element border | Focus rings, hover states |

### Interactive & Brand Tokens
| Token | Description | Value (Light) |
| :--- | :--- | :--- |
| `var(--cds-interactive)` | Primary interactive color | IBM Blue `#0f62fe` |
| `var(--cds-focus)` | Accessibility focus ring | High-contrast blue/white border outline |
| `var(--cds-highlight)` | Highlighting text | Yellow accent `#f1c21b` |

### Support & Status Tokens
| Token | Meaning | Light Theme Hex |
| :--- | :--- | :--- |
| `var(--cds-support-error)` | Error / Failure / Danger | Red 60 (`#da1e28`) |
| `var(--cds-support-success)` | Success / Confirmed | Green 50 (`#24a148`) |
| `var(--cds-support-warning)` | Warning / Caution | Yellow 30 (`#f1c21b`) |
| `var(--cds-support-info)` | Informational note | Blue 70 (`#0043ce`) |

---

## 3. Typography Tokens

Carbon v11 relies exclusively on the **IBM Plex** typeface family:
- **UI Copy & Headings:** `IBM Plex Sans`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`
- **Tabular Data & Code:** `IBM Plex Mono`, `Courier New`, `monospace`

### Font Scale & Line Heights
| Token Scale | Font Size | Line Height | Weight | Typical Element |
| :--- | :--- | :--- | :--- | :--- |
| Caption 01 | 0.75rem (12px) | 1rem (16px) | Regular (400) | Timestamps, tags, badges |
| Label 01 | 0.75rem (12px) | 1rem (16px) | SemiBold (600) | Form labels, section overlines |
| Helper Text | 0.75rem (12px) | 1rem (16px) | Regular (400) | Form hint text |
| Body Compact 01 | 0.875rem (14px) | 1.125rem (18px) | Regular (400) | Table cells, dense lists |
| Body 01 | 0.875rem (14px) | 1.25rem (20px) | Regular (400) | Standard post summaries, card copy |
| Body 02 | 1rem (16px) | 1.5rem (24px) | Regular (400) | Long-form reading paragraphs |
| Heading 01 | 0.875rem (14px) | 1.125rem (18px) | SemiBold (600) | Card subheadings |
| Heading 02 | 1rem (16px) | 1.375rem (22px) | SemiBold (600) | Widget titles, table titles |
| Heading 03 | 1.25rem (20px) | 1.625rem (26px) | SemiBold (600) | Section titles, modal titles |
| Heading 04 | 1.75rem (28px) | 2.25rem (36px) | SemiBold (600) | Page titles |

---

## 4. Spacing Scale (Carbon Mini-Unit: 8px)

Carbon layout spacing is derived from the standard 8px mini-unit system:

| Spacing Token | Pixels | Rem Equivalent | Common Usage |
| :--- | :--- | :--- | :--- |
| `$spacing-01` | 2px | 0.125rem | Micro inline padding, tag borders |
| `$spacing-02` | 4px | 0.25rem | Badge margins, icon offsets |
| `$spacing-03` | 8px | 0.5rem | Component internal padding, tag spacing |
| `$spacing-04` | 12px | 0.75rem | Compact tile padding, button vertical padding |
| `$spacing-05` | 16px | 1.0rem | Standard tile padding, grid gutters |
| `$spacing-06` | 24px | 1.5rem | Section spacing, container vertical gaps |
| `$spacing-07` | 32px | 2.0rem | Major section margins, page vertical padding |
| `$spacing-08` | 40px | 2.5rem | Header height offset, column offsets |
| `$spacing-09` | 48px | 3.0rem | Top header height (`cds--header`) |
| `$spacing-10` | 64px | 4.0rem | Hero padding |

---

## 5. Responsive Grid & Breakpoints

Carbon uses a 16-column flexible grid system (`cds--grid`, `cds--row`, `cds--col-*`).

| Breakpoint | Key | Width | Columns | Margins |
| :--- | :--- | :--- | :--- | :--- |
| Small | `sm` | 320px | 4 | 0px |
| Medium | `md` | 672px | 8 | 16px |
| Large | `lg` | 1056px | 16 | 16px |
| X-Large | `xlg` | 1312px | 16 | 16px |
| Max | `max` | 1584px | 16 | 24px |
