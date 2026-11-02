# TODO - NBA News & Updates Hub with Carbon Design System

## Context
Build a high-fidelity vanilla HTML/JS/CSS frontend application for an NBA News and Updates community hub ("Courtside Pulse") styled purely according to IBM's Carbon Design System. The site features posts, messages, breaking news, live game tables, filtering, search, and a rich array of standard Carbon Design System components. Per user instructions, execution covers Steps 1 through 5, stopping prior to the manual styling customization step.

## Tasks

- [x] 1. Initialize project structure and Carbon Design dependencies
       Files: `package.json`, `index.html`, `js/app.js`, `js/data.js`
       Done when: Directory contains a clean vanilla structure with Carbon Design System CSS styles and Carbon icons loaded, rendering a baseline Carbon shell.

- [x] 2. Populate mock NBA data and state store
       Files: `js/data.js`, `js/store.js`
       Done when: A rich set of realistic NBA news posts, community messages, game scores, player trade rumors, tags, and teams is structured for dynamic filtering, sorting, and posting.

- [x] 3. Implement Carbon Shell, Header, and Navigation
       Files: `index.html`, `js/components/header.js`, `js/components/nav.js`
       Done when: Carbon Header (`cds--header`), global actions, side navigation rail (`cds--side-nav`), and content switcher tabs (`cds--tabs`, `cds--content-switcher`) render and switch between news categories (All News, Trade Wire, Game Recaps, Community Feed).

- [x] 4. Implement Search, Filter Toolbar, and Feed View
       Files: `index.html`, `js/components/filters.js`, `js/components/feed.js`
       Done when: Carbon search input (`cds--search`), multiselect dropdowns (`cds--select`), tag filters (`cds--tag`), and post tiles (`cds--tile`, `cds--tile--expandable`) allow searching by headline/content and filtering by team or conference in real time.

- [x] 5. Implement NBA Stats & Game Results Data Table
       Files: `index.html`, `js/components/table.js`
       Done when: A full Carbon Data Table (`cds--data-table`) renders with sortable columns, table toolbar with search/action buttons, expandable rows, and pagination (`cds--pagination`).

- [x] 6. Implement Interactive Post/Message Creator & Modal
       Files: `index.html`, `js/components/postModal.js`, `js/components/notifications.js`
       Done when: Users can submit new messages/posts via a Carbon Modal (`cds--modal`) with input fields (`cds--text-input`, `cds--text-area`, `cds--select`, `cds--btn`), immediately updating the feed and triggering a Carbon Inline/Toast Notification (`cds--inline-notification`).

- [x] 7. Integrate Additional Carbon Design Components
       Files: `index.html`, `js/app.js`
       Done when: Site includes Carbon Accordion (`cds--accordion`), Progress Indicator / Skeleton states, Overflow Menus (`cds--overflow-menu`), and Carbon Theme Switcher (`white`, `g10`, `g90`, `g100`).

- [x] 8. Verify functionality and verify stopping gate
       Files: `index.html`, `js/*`
       Done when: Application runs in local browser, all interactions (search, filter, pagination, tab switching, post creation) work without console errors, and the project pauses before manual CSS overrides.

## Out of Scope
- Step 6: Manual custom CSS styling overrides (paused until user review).
- Step 7: Creation of a new styling skill in `~/.agents/skills/`.
- Step 8: Brand guide page for the design system.
- Step 9: Creating GitHub repository under `https://github.com/LaviLandman`, git commits, pushes, and GitHub Pages deployment (deferred to subsequent phase).
- Backend database or server APIs (frontend vanilla client-side state).
