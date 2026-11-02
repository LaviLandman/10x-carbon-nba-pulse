/**
 * IBM Carbon Design System Header Component
 */
import { icons } from './icons.js';
import { store } from '../store.js';

export function renderHeader(container) {
  const currentTheme = store.currentTheme;

  container.innerHTML = `
    <header class="cds--header" aria-label="Courtside Pulse Navigation">
      <a class="cds--skip-to-content" href="#main-content" tabindex="0">Skip to main content</a>
      
      <button class="cds--header__menu-trigger cds--header__action" aria-label="Open side navigation" title="Toggle side navigation" id="btn-toggle-side-nav">
        ${icons.switcher}
      </button>

      <a class="cds--header__name" href="#" id="brand-home-link">
        <span class="cds--header__name--prefix">IBM Carbon</span>&nbsp;Courtside Pulse
      </a>

      <nav class="cds--header__nav" aria-label="Categories">
        <ul class="cds--header__menu-bar" role="menubar">
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'all' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="all" role="menuitem">
              All News
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'trades' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="trades" role="menuitem">
              Trade Wire
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'recaps' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="recaps" role="menuitem">
              Game Recaps
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'injuries' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="injuries" role="menuitem">
              Injury Reports
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'standings' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="standings" role="menuitem">
              Standings & Stats
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === 'community' ? 'cds--header__menu-item--current' : ''}" href="#" data-tab="community" role="menuitem">
              Community Feed
            </a>
          </li>
        </ul>
      </nav>

      <div class="cds--header__global">
        <!-- New Post Primary Button -->
        <button class="cds--btn cds--btn--primary cds--btn--sm" type="button" id="btn-open-new-post" title="Create a new post or message">
          <span>New Post</span>
          ${icons.add}
        </button>

        <!-- Theme Switcher Selector -->
        <div class="cds--header__global-action-group" style="display: flex; align-items: center; margin-left: 0.5rem;">
          <select id="theme-selector" class="cds--select-input" style="height: 32px; font-size: 0.75rem; background: var(--cds-layer-01, #f4f4f4); color: inherit; border: 1px solid var(--cds-border-subtle, #e0e0e0); padding: 0 1.5rem 0 0.5rem;" title="Switch IBM Carbon Theme">
            <option value="white" ${currentTheme === 'white' ? 'selected' : ''}>Theme: White</option>
            <option value="g10" ${currentTheme === 'g10' ? 'selected' : ''}>Theme: Gray 10</option>
            <option value="g90" ${currentTheme === 'g90' ? 'selected' : ''}>Theme: Gray 90</option>
            <option value="g100" ${currentTheme === 'g100' ? 'selected' : ''}>Theme: Gray 100</option>
          </select>
        </div>

        <!-- Global Action: Notifications -->
        <button class="cds--header__action" aria-label="Notifications (1 breaking)" title="Notifications" id="btn-global-notifications">
          ${icons.notification}
          <span class="cds--badge" style="position: absolute; top: 8px; right: 8px; width: 8px; height: 8px; background: #da1e28; border-radius: 50%;"></span>
        </button>

        <!-- Global Action: User profile -->
        <button class="cds--header__action" aria-label="User profile: Lavi Landman" title="Profile: Lavi Landman" id="btn-global-user">
          ${icons.user}
        </button>
      </div>
    </header>
  `;

  // Event handlers
  container.querySelectorAll('[data-tab]').forEach((tabEl) => {
    tabEl.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = tabEl.getAttribute('data-tab');
      store.setActiveTab(tab);
    });
  });

  const homeLink = container.querySelector('#brand-home-link');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      store.setActiveTab('all');
      store.resetFilters();
    });
  }

  const newPostBtn = container.querySelector('#btn-open-new-post');
  if (newPostBtn) {
    newPostBtn.addEventListener('click', () => {
      store.openPostModal();
    });
  }

  const themeSelector = container.querySelector('#theme-selector');
  if (themeSelector) {
    themeSelector.addEventListener('change', (e) => {
      store.setTheme(e.target.value);
    });
  }

  const toggleSideNavBtn = container.querySelector('#btn-toggle-side-nav');
  if (toggleSideNavBtn) {
    toggleSideNavBtn.addEventListener('click', () => {
      const sideNav = document.getElementById('app-side-nav');
      if (sideNav) {
        sideNav.classList.toggle('cds--side-nav--expanded');
      }
    });
  }
}
