/**
 * IBM Carbon Design System Widgets & Secondary Components
 * Demonstrating Carbon Accordion, Progress Bar, Tiles, and Badges
 */
import { icons } from './icons.js';

export function renderWidgets(container) {
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <!-- Carbon Tile: Season Progress & Cap Space Tracker -->
      <div class="cds--tile">
        <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span>2026 Trade Deadline Window</span>
          <span class="cds--tag cds--tag--purple cds--tag--sm">84% Elapsed</span>
        </h4>
        <p style="font-size: 0.8125rem; color: var(--cds-text-secondary, #525252); margin-bottom: 0.75rem;">
          Teams have 12 days remaining to execute roster moves before the hard deadline locks.
        </p>

        <!-- Carbon Progress Bar -->
        <div class="cds--progress-bar" style="margin-bottom: 1rem;">
          <div class="cds--progress-bar__track" style="background: var(--cds-layer-02, #e0e0e0); height: 8px; width: 100%; border-radius: 4px; overflow: hidden;">
            <div class="cds--progress-bar__filled-track" style="background: #0f62fe; height: 100%; width: 84%;"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f);">
          <span>Season Tipoff (Oct 22)</span>
          <span>Trade Deadline (Feb 6)</span>
        </div>
      </div>

      <!-- Carbon Accordion: League Guidelines & Collective Bargaining Rules -->
      <div class="cds--tile" style="padding: 1rem;">
        <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.75rem;">
          League Salary Cap & Trade CBA Notes
        </h4>
        
        <ul class="cds--accordion">
          <!-- Accordion Item 1 -->
          <li class="cds--accordion__item" id="acc-item-1">
            <button class="cds--accordion__heading" type="button" aria-expanded="false">
              <span class="cds--accordion__arrow">${icons.chevronDown}</span>
              <div class="cds--accordion__title">Second Apron Restrictions</div>
            </button>
            <div class="cds--accordion__content" style="display: none; padding: 0.5rem 0.5rem 1rem; font-size: 0.8125rem; line-height: 1.5; color: var(--cds-text-secondary, #525252);">
              Teams above the second tax apron cannot aggregate salaries in trades, cannot send cash considerations, and cannot use trade exceptions generated in prior league years.
            </div>
          </li>

          <!-- Accordion Item 2 -->
          <li class="cds--accordion__item" id="acc-item-2">
            <button class="cds--accordion__heading" type="button" aria-expanded="false">
              <span class="cds--accordion__arrow">${icons.chevronDown}</span>
              <div class="cds--accordion__title">Active Traded Player Exceptions (TPE)</div>
            </button>
            <div class="cds--accordion__content" style="display: none; padding: 0.5rem 0.5rem 1rem; font-size: 0.8125rem; line-height: 1.5; color: var(--cds-text-secondary, #525252);">
              Boston holds an $11.2M exception expiring in December. Oklahoma City and Dallas maintain smaller salary absorption allowances ($4.8M and $6.1M respectively).
            </div>
          </li>

          <!-- Accordion Item 3 -->
          <li class="cds--accordion__item" id="acc-item-3">
            <button class="cds--accordion__heading" type="button" aria-expanded="false">
              <span class="cds--accordion__arrow">${icons.chevronDown}</span>
              <div class="cds--accordion__title">Carbon Design System Compliance</div>
            </button>
            <div class="cds--accordion__content" style="display: none; padding: 0.5rem 0.5rem 1rem; font-size: 0.8125rem; line-height: 1.5; color: var(--cds-text-secondary, #525252);">
              Courtside Pulse uses 100% authentic IBM Carbon Design System v11 tokens, type scale (IBM Plex Sans), spacing units (Carbon mini-unit 8px scale), and native BEM classes.
            </div>
          </li>
        </ul>
      </div>

      <!-- Carbon Component Highlights Quick Reference -->
      <div class="cds--tile">
        <h4 style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; margin-bottom: 0.75rem; color: var(--cds-text-secondary, #525252);">
          Active Carbon UI Components
        </h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--header</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--side-nav</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--data-table</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--pagination</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--content-switcher</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--search</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--select</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--modal</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--inline-notification</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--toast-notification</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--tile</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--accordion</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--progress-bar</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--tag</span>
          <span class="cds--tag cds--tag--blue cds--tag--sm">cds--btn</span>
        </div>
      </div>
    </div>
  `;

  // Accordion toggle handlers
  container.querySelectorAll('.cds--accordion__heading').forEach((heading) => {
    heading.addEventListener('click', () => {
      const item = heading.closest('.cds--accordion__item');
      const content = item.querySelector('.cds--accordion__content');
      const isExpanded = heading.getAttribute('aria-expanded') === 'true';

      heading.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        content.style.display = 'block';
        item.classList.add('cds--accordion__item--active');
      } else {
        content.style.display = 'none';
        item.classList.remove('cds--accordion__item--active');
      }
    });
  });
}
