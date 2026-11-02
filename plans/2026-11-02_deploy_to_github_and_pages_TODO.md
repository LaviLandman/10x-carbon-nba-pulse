# TODO - Deploy Project to GitHub and GitHub Pages

## Context
Deploy Courtside Pulse (`10x-carbon-nba-pulse`) to a public GitHub repository under account `LaviLandman` (`https://github.com/LaviLandman/10x-carbon-nba-pulse`), configure GitHub Pages from the `main` branch root, and verify public access URLs for both the main application (`index.html`) and the standalone Brand Guide (`brand-guide.html`).

## Tasks

- [x] 1. Author repository README.md
       Files: `README.md`
       Done when: Polished `README.md` exists detailing project overview, IBM Carbon Design System v11 features, live demo links, architecture, and local development commands.

- [x] 2. Initialize local Git repository and verify .gitignore
       Files: `.git/`, `.gitignore`
       Done when: Git repository is initialized with default branch `main`, and `.gitignore` ignores `node_modules`, `.DS_Store`, and build artifacts.

- [x] 3. Create initial Git commit
       Files: Repository source tree
       Done when: Initial commit is recorded on branch `main` containing project files, skill, brand guide, and configuration.

- [x] 4. Switch GitHub CLI to LaviLandman and create public repository
       Files: Remote `origin`
       Done when: GitHub repository `https://github.com/LaviLandman/10x-carbon-nba-pulse` is created as public and code is pushed to `origin/main`.

- [x] 5. Enable and configure GitHub Pages
       Files: GitHub repository settings
       Done when: GitHub Pages is enabled on the `main` branch root `/`, returning public site URL `https://lavilandman.github.io/10x-carbon-nba-pulse/`.

- [x] 6. Update project roadmap documentation
       Files: `AGENTS.md`
       Done when: `AGENTS.md` marks Step 9 as completed with the live repository and Pages links.

## Out of Scope
- Pushing to any repository other than `LaviLandman/10x-carbon-nba-pulse`.
- Modifying UI components or styles.
