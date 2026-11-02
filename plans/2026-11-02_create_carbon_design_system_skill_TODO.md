# TODO - Create Project Carbon Design System Skill

## Context
Create a project-level skill for the IBM Carbon Design System v11 located at `.agents/skills/carbon-design-system/SKILL.md`. This skill equips AI coding agents working on this project with comprehensive design guidelines, token catalogs, BEM class patterns (`cds--*`), typography conventions, grid layouts, and component markup templates tailored to the design system established in Courtside Pulse.

## Tasks

- [x] 1. Create project skill directory structure
       Files: `.agents/skills/carbon-design-system/`, `.agents/skills/carbon-design-system/references/`
       Done when: Directory structure exists in project root for progressive disclosure of skill resources.

- [x] 2. Author core Carbon Design System reference files
       Files: `.agents/skills/carbon-design-system/references/tokens.md`, `.agents/skills/carbon-design-system/references/components.md`
       Done when: Reference documents detailing theme tokens, color scales, typography rules, and HTML component snippets are created.

- [x] 3. Draft comprehensive SKILL.md for carbon-design-system
       Files: `.agents/skills/carbon-design-system/SKILL.md`
       Done when: Complete skill document exists with YAML frontmatter (name, pushy description), progressive disclosure links, design principles, token usage rules, component templates, and Courtside Pulse architectural conventions.

- [x] 4. Verify skill formatting, links, and design system consistency
       Files: `.agents/skills/carbon-design-system/SKILL.md`, `.agents/skills/carbon-design-system/references/*`
       Done when: Skill structure adheres to OpenCode/Agents skill specifications, uses space-free clickable paths, contains zero em dashes, and correctly references all Carbon v11 tokens.

## Out of Scope
- Creating user-level skills in `~/.agents/skills/` or `~/.config/opencode/skills/`.
- Modifying frontend application source files (`js/*`, `index.html`, `css/*`).
- Git commits, git pushes, or remote deployments.
