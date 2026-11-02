/**
 * IBM Carbon Design System Data Table & Pagination Component
 */
import { icons } from './icons.js';
import { store } from '../store.js';

export function renderTable(container) {
  const { items, total, totalPages, currentPage, pageSize } = store.getPaginatedStandings();
  const sortField = store.tableSortField;
  const sortDir = store.tableSortDirection;

  const renderSortHeader = (label, field) => {
    const isSorted = sortField === field;
    return `
      <th scope="col">
        <button class="cds--table-sort ${isSorted ? 'cds--table-sort--active' : ''}" data-sort-field="${field}">
          <span class="cds--table-sort__flex">
            <span class="cds--table-header-label">${label}</span>
            <span class="cds--table-sort__icon">
              ${icons.sort}
            </span>
          </span>
        </button>
      </th>
    `;
  };

  container.innerHTML = `
    <div class="cds--data-table-container" style="background: var(--cds-layer-01, #f4f4f4); padding: 1.5rem; border: 1px solid var(--cds-border-subtle, #e0e0e0); margin-bottom: 2rem;">
      <!-- Table Header -->
      <div class="cds--data-table-header" style="margin-bottom: 1rem;">
        <h4 class="cds--data-table-header__title" style="font-size: 1.25rem; font-weight: 600;">
          2026 NBA Conference Power Standings
        </h4>
        <p class="cds--data-table-header__description" style="font-size: 0.875rem; color: var(--cds-text-secondary, #525252);">
          Live records, win percentages, current win/loss streaks, and team injury statuses across the association.
        </p>
      </div>

      <!-- Table Toolbar -->
      <section class="cds--table-toolbar" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
        <div class="cds--table-toolbar-content" style="display: flex; gap: 0.5rem; flex: 1; max-width: 400px;">
          <div class="cds--search cds--search--sm" role="search" style="width: 100%;">
            <div class="cds--search-magnifier" tabindex="-1">
              ${icons.search}
            </div>
            <label class="cds--label" for="table-search">Search standings</label>
            <input class="cds--search-input" id="table-search" type="text" role="searchbox" placeholder="Filter teams or status..." value="${store.tableSearchQuery}">
          </div>
        </div>

        <div class="cds--toolbar-actions" style="display: flex; gap: 0.5rem;">
          <button class="cds--btn cds--btn--secondary cds--btn--sm" id="btn-export-csv">
            Export Data
          </button>
          <button class="cds--btn cds--btn--primary cds--btn--sm" id="btn-refresh-standings">
            Refresh Standings
          </button>
        </div>
      </section>

      <!-- Carbon Data Table -->
      <div class="cds--data-table-content" style="overflow-x: auto;">
        <table class="cds--data-table cds--data-table--sort cds--data-table--zebra" aria-label="NBA Standings Table">
          <thead>
            <tr>
              ${renderSortHeader('Team', 'team')}
              ${renderSortHeader('Conf', 'conf')}
              ${renderSortHeader('W', 'w')}
              ${renderSortHeader('L', 'l')}
              ${renderSortHeader('Win %', 'pct')}
              ${renderSortHeader('Streak', 'streak')}
              ${renderSortHeader('L10', 'l10')}
              ${renderSortHeader('Point Diff', 'diff')}
              ${renderSortHeader('Status', 'status')}
            </tr>
          </thead>
          <tbody>
            ${
              items.length === 0
                ? `
              <tr>
                <td colspan="9" style="text-align: center; padding: 2rem;">No matching standings data found.</td>
              </tr>
            `
                : items
                    .map(
                      (row) => `
              <tr>
                <td><strong>${row.team}</strong></td>
                <td><span class="cds--tag cds--tag--sm ${row.conf === 'East' ? 'cds--tag--blue' : 'cds--tag--purple'}">${row.conf}</span></td>
                <td>${row.w}</td>
                <td>${row.l}</td>
                <td><strong>${row.pct}</strong></td>
                <td>
                  <span class="cds--tag cds--tag--sm ${row.streak.startsWith('W') ? 'cds--tag--green' : 'cds--tag--red'}">${row.streak}</span>
                </td>
                <td>${row.l10}</td>
                <td style="color: ${row.diff.startsWith('+') ? '#24a148' : '#da1e28'}; font-weight: 600;">${row.diff}</td>
                <td>
                  <span class="cds--tag cds--tag--sm ${
                    row.status === 'Healthy'
                      ? 'cds--tag--green'
                      : row.status === 'Day-to-Day'
                      ? 'cds--tag--yellow'
                      : 'cds--tag--red'
                  }">${row.status}</span>
                </td>
              </tr>
            `
                    )
                    .join('')
            }
          </tbody>
        </table>
      </div>

      <!-- Carbon Pagination Component -->
      <div class="cds--pagination" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--cds-border-subtle, #e0e0e0); padding: 0.75rem 0.5rem; margin-top: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
        <div class="cds--pagination__left" style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="cds--pagination__text" style="font-size: 0.8125rem;">
            Showing <strong>${items.length ? (currentPage - 1) * pageSize + 1 : 0}-${Math.min(currentPage * pageSize, total)}</strong> of <strong>${total}</strong> teams
          </span>
          <div class="cds--form-item" style="display: inline-flex; align-items: center; gap: 0.25rem;">
            <label for="select-page-size" style="font-size: 0.75rem;">Items per page:</label>
            <select id="select-page-size" class="cds--select-input" style="height: 28px; padding: 0 1rem 0 0.5rem; font-size: 0.75rem;">
              <option value="5" ${pageSize === 5 ? 'selected' : ''}>5</option>
              <option value="10" ${pageSize === 10 ? 'selected' : ''}>10</option>
            </select>
          </div>
        </div>

        <div class="cds--pagination__right" style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8125rem;">Page ${currentPage} of ${totalPages}</span>
          <button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-page-prev" ${currentPage <= 1 ? 'disabled' : ''}>
            Previous
          </button>
          <button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-page-next" ${currentPage >= totalPages ? 'disabled' : ''}>
            Next
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach event handlers
  container.querySelectorAll('[data-sort-field]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const field = btn.getAttribute('data-sort-field');
      store.setTableSort(field);
    });
  });

  const searchInput = container.querySelector('#table-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      store.setTableSearch(e.target.value);
    });
  }

  const pageSizeSelect = container.querySelector('#select-page-size');
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', (e) => {
      store.setTablePageSize(e.target.value);
    });
  }

  const prevBtn = container.querySelector('#btn-page-prev');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        store.setTablePage(currentPage - 1);
      }
    });
  }

  const nextBtn = container.querySelector('#btn-page-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        store.setTablePage(currentPage + 1);
      }
    });
  }

  const exportBtn = container.querySelector('#btn-export-csv');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      alert('Standings export simulated: CSV generated for ' + total + ' records.');
    });
  }

  const refreshBtn = container.querySelector('#btn-refresh-standings');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      store.notify();
    });
  }
}
