/**
 * IBM Carbon Design System Filters and Search Toolbar Component
 */
import { icons } from './icons.js';
import { store } from '../store.js';
import { NBA_TEAMS } from '../data.js';

export function renderFilters(container) {
  const filteredPosts = store.getFilteredPosts();
  const hasActiveFilters =
    store.searchQuery !== '' ||
    store.selectedConference !== 'all' ||
    store.selectedTeam !== 'all' ||
    store.selectedTag !== 'all';

  container.innerHTML = `
    <div class="cds--grid" style="padding: 0; margin-bottom: 1.5rem;">
      <div class="cds--row" style="align-items: center; gap: 1rem 0;">
        <!-- Search Input -->
        <div class="cds--col-lg-6 cds--col-md-4 cds--col-sm-4">
          <div class="cds--search cds--search--lg" role="search">
            <div class="cds--search-magnifier" tabindex="-1">
              ${icons.search}
            </div>
            <label id="search-input-label" class="cds--label" for="news-search-input">Search NBA updates</label>
            <input class="cds--search-input" type="text" id="news-search-input" role="searchbox"
                   placeholder="Search trades, game recaps, player rumors, teams..."
                   value="${store.searchQuery}">
            ${
              store.searchQuery
                ? `<button class="cds--search-close" id="btn-clear-search" title="Clear search">${icons.close}</button>`
                : ''
            }
          </div>
        </div>

        <!-- Conference Selector -->
        <div class="cds--col-lg-2 cds--col-md-2 cds--col-sm-2">
          <div class="cds--form-item">
            <div class="cds--select">
              <label for="select-conference" class="cds--label">Conference</label>
              <div class="cds--select-input__wrapper">
                <select id="select-conference" class="cds--select-input">
                  <option value="all" ${store.selectedConference === 'all' ? 'selected' : ''}>All Conferences</option>
                  <option value="East" ${store.selectedConference === 'East' ? 'selected' : ''}>Eastern Conference</option>
                  <option value="West" ${store.selectedConference === 'West' ? 'selected' : ''}>Western Conference</option>
                </select>
                <div class="cds--select__arrow">${icons.chevronDown}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Selector -->
        <div class="cds--col-lg-2 cds--col-md-2 cds--col-sm-2">
          <div class="cds--form-item">
            <div class="cds--select">
              <label for="select-team" class="cds--label">Team</label>
              <div class="cds--select-input__wrapper">
                <select id="select-team" class="cds--select-input">
                  <option value="all" ${store.selectedTeam === 'all' ? 'selected' : ''}>All 30 Teams</option>
                  ${NBA_TEAMS.map(
                    (team) => `
                    <option value="${team.code}" ${store.selectedTeam === team.code ? 'selected' : ''}>
                      ${team.name} (${team.code})
                    </option>
                  `
                  ).join('')}
                </select>
                <div class="cds--select__arrow">${icons.chevronDown}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tag Selector -->
        <div class="cds--col-lg-2 cds--col-md-2 cds--col-sm-2">
          <div class="cds--form-item">
            <div class="cds--select">
              <label for="select-tag" class="cds--label">Category Tag</label>
              <div class="cds--select-input__wrapper">
                <select id="select-tag" class="cds--select-input">
                  <option value="all" ${store.selectedTag === 'all' ? 'selected' : ''}>All Tags</option>
                  <option value="Trade" ${store.selectedTag === 'Trade' ? 'selected' : ''}>Trade Wire</option>
                  <option value="Injury" ${store.selectedTag === 'Injury' ? 'selected' : ''}>Injury Report</option>
                  <option value="Highlight" ${store.selectedTag === 'Highlight' ? 'selected' : ''}>Highlight & Recap</option>
                  <option value="Analysis" ${store.selectedTag === 'Analysis' ? 'selected' : ''}>Deep Analysis</option>
                  <option value="Discussion" ${store.selectedTag === 'Discussion' ? 'selected' : ''}>Fan Discussion</option>
                </select>
                <div class="cds--select__arrow">${icons.chevronDown}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Active Filter Chips & Reset Bar -->
      <div class="cds--row" style="margin-top: 0.75rem; align-items: center;">
        <div class="cds--col-lg-12" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; font-weight: 600; color: var(--cds-text-secondary, #525252); text-transform: uppercase;">
            Matching Updates:
          </span>
          <span class="cds--tag cds--tag--outline">${filteredPosts.length} Results</span>

          ${
            store.selectedConference !== 'all'
              ? `<span class="cds--tag cds--tag--blue cds--tag--filter" data-remove-filter="conf">${store.selectedConference} Conf ${icons.close}</span>`
              : ''
          }
          ${
            store.selectedTeam !== 'all'
              ? `<span class="cds--tag cds--tag--purple cds--tag--filter" data-remove-filter="team">Team: ${store.selectedTeam} ${icons.close}</span>`
              : ''
          }
          ${
            store.selectedTag !== 'all'
              ? `<span class="cds--tag cds--tag--teal cds--tag--filter" data-remove-filter="tag">Tag: ${store.selectedTag} ${icons.close}</span>`
              : ''
          }
          ${
            store.searchQuery
              ? `<span class="cds--tag cds--tag--warm-gray cds--tag--filter" data-remove-filter="search">"${store.searchQuery}" ${icons.close}</span>`
              : ''
          }

          ${
            hasActiveFilters
              ? `<button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-reset-all-filters" style="margin-left: auto;">Reset Filters</button>`
              : ''
          }
        </div>
      </div>
    </div>
  `;

  // Search input listeners
  const searchInput = container.querySelector('#news-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      store.setSearchQuery(e.target.value);
    });
  }

  const clearSearchBtn = container.querySelector('#btn-clear-search');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      store.setSearchQuery('');
    });
  }

  const confSelect = container.querySelector('#select-conference');
  if (confSelect) {
    confSelect.addEventListener('change', (e) => {
      store.setConference(e.target.value);
    });
  }

  const teamSelect = container.querySelector('#select-team');
  if (teamSelect) {
    teamSelect.addEventListener('change', (e) => {
      store.setTeam(e.target.value);
    });
  }

  const tagSelect = container.querySelector('#select-tag');
  if (tagSelect) {
    tagSelect.addEventListener('change', (e) => {
      store.setTag(e.target.value);
    });
  }

  const resetBtn = container.querySelector('#btn-reset-all-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      store.resetFilters();
    });
  }

  container.querySelectorAll('[data-remove-filter]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const type = chip.getAttribute('data-remove-filter');
      if (type === 'conf') store.setConference('all');
      if (type === 'team') store.setTeam('all');
      if (type === 'tag') store.setTag('all');
      if (type === 'search') store.setSearchQuery('');
    });
  });
}
