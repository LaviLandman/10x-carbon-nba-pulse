/**
 * IBM Carbon Design System Side Navigation Component
 */
import { icons } from './icons.js';
import { store } from '../store.js';
import { NBA_TEAMS } from '../data.js';

export function renderSideNav(container) {
  const activeConf = store.selectedConference;
  const activeTeam = store.selectedTeam;

  const eastTeams = NBA_TEAMS.filter((t) => t.conf === 'East');
  const westTeams = NBA_TEAMS.filter((t) => t.conf === 'West');

  container.innerHTML = `
    <nav class="cds--side-nav cds--side-nav--expanded" id="app-side-nav" aria-label="NBA Conference Filter Navigation">
      <div class="cds--side-nav__header" style="padding: 1rem; border-bottom: 1px solid var(--cds-border-subtle, #e0e0e0);">
        <h2 style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--cds-text-secondary, #525252);">
          Filter by Team & Conf
        </h2>
      </div>

      <ul class="cds--side-nav__items">
        <!-- All Teams / Reset -->
        <li class="cds--side-nav__item">
          <a class="cds--side-nav__link ${activeConf === 'all' && activeTeam === 'all' ? 'cds--side-nav__link--current' : ''}" href="#" id="side-nav-all">
            <span class="cds--side-nav__link-text">🏀 All Teams & Conferences</span>
          </a>
        </li>

        <!-- Eastern Conference Category -->
        <li class="cds--side-nav__item">
          <div class="cds--side-nav__submenu-title" style="padding: 0.75rem 1rem 0.25rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            EASTERN CONFERENCE
          </div>
          <a class="cds--side-nav__link ${activeConf === 'East' && activeTeam === 'all' ? 'cds--side-nav__link--current' : ''}" href="#" data-conf="East" data-team="all">
            <span class="cds--side-nav__link-text">All Eastern Teams</span>
          </a>
          <ul class="cds--side-nav__menu">
            ${eastTeams
              .map(
                (team) => `
                <li class="cds--side-nav__menu-item">
                  <a class="cds--side-nav__link ${activeTeam === team.code ? 'cds--side-nav__link--current' : ''}" href="#" data-conf="East" data-team="${team.code}">
                    <span class="cds--side-nav__link-text">${team.name} (${team.code})</span>
                  </a>
                </li>
              `
              )
              .join('')}
          </ul>
        </li>

        <!-- Western Conference Category -->
        <li class="cds--side-nav__item">
          <div class="cds--side-nav__submenu-title" style="padding: 0.75rem 1rem 0.25rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            WESTERN CONFERENCE
          </div>
          <a class="cds--side-nav__link ${activeConf === 'West' && activeTeam === 'all' ? 'cds--side-nav__link--current' : ''}" href="#" data-conf="West" data-team="all">
            <span class="cds--side-nav__link-text">All Western Teams</span>
          </a>
          <ul class="cds--side-nav__menu">
            ${westTeams
              .map(
                (team) => `
                <li class="cds--side-nav__menu-item">
                  <a class="cds--side-nav__link ${activeTeam === team.code ? 'cds--side-nav__link--current' : ''}" href="#" data-conf="West" data-team="${team.code}">
                    <span class="cds--side-nav__link-text">${team.name} (${team.code})</span>
                  </a>
                </li>
              `
              )
              .join('')}
          </ul>
        </li>

        <!-- Quick Tag Navigation -->
        <li class="cds--side-nav__item" style="border-top: 1px solid var(--cds-border-subtle, #e0e0e0); margin-top: 1rem; padding-top: 0.5rem;">
          <div class="cds--side-nav__submenu-title" style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            POPULAR TAGS
          </div>
          <div style="padding: 0 1rem 1rem; display: flex; flex-wrap: wrap; gap: 0.35rem;">
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'all' ? 'cds--tag--blue' : 'cds--tag--cool-gray'}" data-nav-tag="all">All</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'Trade' ? 'cds--tag--blue' : 'cds--tag--cool-gray'}" data-nav-tag="Trade">Trade</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'Injury' ? 'cds--tag--red' : 'cds--tag--cool-gray'}" data-nav-tag="Injury">Injury</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'Highlight' ? 'cds--tag--green' : 'cds--tag--cool-gray'}" data-nav-tag="Highlight">Highlight</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'Analysis' ? 'cds--tag--purple' : 'cds--tag--cool-gray'}" data-nav-tag="Analysis">Analysis</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === 'Discussion' ? 'cds--tag--teal' : 'cds--tag--cool-gray'}" data-nav-tag="Discussion">Discussion</button>
          </div>
        </li>
      </ul>
    </nav>
  `;

  // Event handlers
  const allBtn = container.querySelector('#side-nav-all');
  if (allBtn) {
    allBtn.addEventListener('click', (e) => {
      e.preventDefault();
      store.setConference('all');
      store.setTeam('all');
    });
  }

  container.querySelectorAll('[data-conf]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const conf = link.getAttribute('data-conf');
      const team = link.getAttribute('data-team');
      store.setConference(conf);
      store.setTeam(team);
    });
  });

  container.querySelectorAll('[data-nav-tag]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-nav-tag');
      store.setTag(tag);
    });
  });
}
