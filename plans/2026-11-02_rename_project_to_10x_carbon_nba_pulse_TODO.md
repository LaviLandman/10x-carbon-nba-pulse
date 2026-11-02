# TODO - Rename Project to 10x-carbon-nba-pulse

## Context
Rename the project from `10x-design-systems-demo` to `10x-carbon-nba-pulse` across all project configuration files, documentation references, IDE module definitions, and the physical directory on disk at `/Users/lavilandman/_Gits-10x/10x-carbon-nba-pulse`, followed by migrating the OpenCode session path.

## Tasks

- [x] 1. Update project metadata in `package.json` and `package-lock.json`
       Files: `package.json`, `package-lock.json`
       Done when: Package names are set to `10x-carbon-nba-pulse`.

- [x] 2. Update documentation and repo references in `AGENTS.md`
       Files: `AGENTS.md`
       Done when: `AGENTS.md` references `10x-carbon-nba-pulse`, updated directory tree root, and GitHub repo URL `https://github.com/LaviLandman/10x-carbon-nba-pulse`.

- [x] 3. Update IDE module definitions
       Files: `.idea/modules.xml`, `.idea/10x-carbon-nba-pulse.iml`
       Done when: `.idea/10x-design-systems-demo.iml` is renamed and references in `modules.xml` point to `10x-carbon-nba-pulse.iml`.

- [x] 4. Rename physical directory on disk and update OpenCode session location
       Files: `/Users/lavilandman/_Gits-10x/10x-carbon-nba-pulse`
       Done when: Directory is moved via `mv` on disk and session working directory is updated to `/Users/lavilandman/_Gits-10x/10x-carbon-nba-pulse`.

## Out of Scope
- Committing or pushing git changes.
- Modifying UI components or styles.
