/**
 * Courtside Pulse - NBA News & Updates Hub
 * Entry point orchestrating IBM Carbon Design System components
 */
import { store } from './store.js';
import { renderHeader } from './components/header.js';
import { renderSideNav } from './components/nav.js';
import { renderFilters } from './components/filters.js';
import { renderFeed } from './components/feed.js';
import { renderTable } from './components/table.js';
import { renderWidgets } from './components/statsWidget.js';
import { renderPostModal } from './components/postModal.js';
import { renderToast } from './components/notifications.js';

function renderApp() {
  const headerContainer = document.getElementById('header-container');
  const sideNavContainer = document.getElementById('side-nav-container');
  const filtersContainer = document.getElementById('filters-container');
  const viewContainer = document.getElementById('view-container');
  const modalContainer = document.getElementById('modal-container');
  const toastContainer = document.getElementById('toast-container');

  // Render Persistent Header and Side Nav
  renderHeader(headerContainer);
  renderSideNav(sideNavContainer);

  // Render Global Filter Toolbar
  renderFilters(filtersContainer);

  // Render Main View according to activeTab
  if (store.activeTab === 'standings') {
    // Full Standings Table View
    viewContainer.innerHTML = `
      <div class="cds--grid" style="padding: 0;">
        <div class="cds--row">
          <div class="cds--col-lg-12">
            <div id="full-table-target"></div>
          </div>
        </div>
        <div class="cds--row" style="margin-top: 1.5rem;">
          <div class="cds--col-lg-12">
            <div id="secondary-widgets-target"></div>
          </div>
        </div>
      </div>
    `;
    renderTable(document.getElementById('full-table-target'));
    renderWidgets(document.getElementById('secondary-widgets-target'));
  } else {
    // Standard Updates Feed + Secondary Column (Standings & Widgets)
    viewContainer.innerHTML = `
      <div class="cds--grid" style="padding: 0;">
        <div class="cds--row">
          <!-- Main Left Column: Posts Feed -->
          <div class="cds--col-lg-10 cds--col-md-5 cds--col-sm-4">
            <div id="feed-target"></div>
          </div>

          <!-- Right Sidebar Column: Live Standings Table & Carbon Widgets -->
          <div class="cds--col-lg-6 cds--col-md-3 cds--col-sm-4" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div id="sidebar-table-target"></div>
            <div id="sidebar-widgets-target"></div>
          </div>
        </div>
      </div>
    `;
    renderFeed(document.getElementById('feed-target'));
    renderTable(document.getElementById('sidebar-table-target'));
    renderWidgets(document.getElementById('sidebar-widgets-target'));
  }

  // Render Modal and Toast Notifications
  renderPostModal(modalContainer);
  renderToast(toastContainer);
}

// Initialize on DOM load or immediately if already loaded
function init() {
  store.subscribe(() => {
    renderApp();
  });

  renderApp();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
