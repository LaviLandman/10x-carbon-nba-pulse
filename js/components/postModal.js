/**
 * IBM Carbon Design System Modal for Creating New Posts & Messages
 */
import { icons } from './icons.js';
import { store } from '../store.js';
import { NBA_TEAMS } from '../data.js';

export function renderPostModal(container) {
  if (!store.isPostModalOpen) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="cds--modal is-visible" role="dialog" aria-modal="true" aria-labelledby="modal-post-title" tabindex="-1">
      <div class="cds--modal-container" style="max-width: 640px; width: 100%;">
        <!-- Modal Header -->
        <div class="cds--modal-header">
          <h2 class="cds--modal-header__heading" id="modal-post-title">
            Publish NBA Update or Message
          </h2>
          <button class="cds--modal-close" type="button" aria-label="Close modal" id="btn-close-modal">
            ${icons.close}
          </button>
        </div>

        <!-- Modal Body / Form -->
        <div class="cds--modal-content">
          <form id="form-new-post" style="display: flex; flex-direction: column; gap: 1rem;">
            <!-- Post Title -->
            <div class="cds--form-item">
              <label for="post-input-title" class="cds--label">Headline / Title <span style="color: #da1e28;">*</span></label>
              <input type="text" id="post-input-title" class="cds--text-input" placeholder="e.g. Lakers Acquire 3-and-D Wing in Multi-Team Agreement" required>
            </div>

            <!-- Two-column row: Category & Team -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="cds--form-item">
                <div class="cds--select">
                  <label for="post-select-category" class="cds--label">Feed Category</label>
                  <div class="cds--select-input__wrapper">
                    <select id="post-select-category" class="cds--select-input">
                      <option value="Trade Wire">Trade Wire</option>
                      <option value="Game Recaps">Game Recaps</option>
                      <option value="Injury Reports">Injury Reports</option>
                      <option value="Community Feed" selected>Community Feed</option>
                    </select>
                    <div class="cds--select__arrow">${icons.chevronDown}</div>
                  </div>
                </div>
              </div>

              <div class="cds--form-item">
                <div class="cds--select">
                  <label for="post-select-team" class="cds--label">Associated Team</label>
                  <div class="cds--select-input__wrapper">
                    <select id="post-select-team" class="cds--select-input">
                      ${NBA_TEAMS.map(
                        (team) => `
                        <option value="${team.code}">${team.name} (${team.code})</option>
                      `
                      ).join('')}
                    </select>
                    <div class="cds--select__arrow">${icons.chevronDown}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Two-column row: Tag & Urgency -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="cds--form-item">
                <div class="cds--select">
                  <label for="post-select-tag" class="cds--label">Tag Type</label>
                  <div class="cds--select-input__wrapper">
                    <select id="post-select-tag" class="cds--select-input">
                      <option value="Trade">Trade</option>
                      <option value="Injury">Injury</option>
                      <option value="Highlight">Highlight</option>
                      <option value="Analysis">Analysis</option>
                      <option value="Discussion" selected>Discussion</option>
                    </select>
                    <div class="cds--select__arrow">${icons.chevronDown}</div>
                  </div>
                </div>
              </div>

              <div class="cds--form-item">
                <div class="cds--select">
                  <label for="post-select-urgency" class="cds--label">Urgency Level</label>
                  <div class="cds--select-input__wrapper">
                    <select id="post-select-urgency" class="cds--select-input">
                      <option value="low">Standard / Low</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">Breaking / High Urgency</option>
                    </select>
                    <div class="cds--select__arrow">${icons.chevronDown}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Summary -->
            <div class="cds--form-item">
              <label for="post-input-summary" class="cds--label">Summary / Teaser <span style="color: #da1e28;">*</span></label>
              <input type="text" id="post-input-summary" class="cds--text-input" placeholder="Short description of the event or report" required>
            </div>

            <!-- Full Content -->
            <div class="cds--form-item">
              <label for="post-input-content" class="cds--label">Full Post Content / Body</label>
              <textarea id="post-input-content" class="cds--text-area" rows="4" placeholder="Detailed analysis, quotes, background context, or commentary..."></textarea>
            </div>

            <!-- Author & Role -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="cds--form-item">
                <label for="post-input-author" class="cds--label">Author Name</label>
                <input type="text" id="post-input-author" class="cds--text-input" value="Lavi Landman">
              </div>
              <div class="cds--form-item">
                <label for="post-input-role" class="cds--label">Role / Affiliation</label>
                <input type="text" id="post-input-role" class="cds--text-input" value="Community Insider">
              </div>
            </div>
          </form>
        </div>

        <!-- Modal Footer -->
        <div class="cds--modal-footer">
          <button class="cds--btn cds--btn--secondary" type="button" id="btn-cancel-modal">
            Cancel
          </button>
          <button class="cds--btn cds--btn--primary" type="button" id="btn-submit-post">
            Publish Post
          </button>
        </div>
      </div>
      <span tabindex="0"></span>
    </div>
  `;

  // Attach event handlers
  const closeModal = () => store.closePostModal();

  const closeBtn = container.querySelector('#btn-close-modal');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const cancelBtn = container.querySelector('#btn-cancel-modal');
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  const submitBtn = container.querySelector('#btn-submit-post');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const title = container.querySelector('#post-input-title').value.trim();
      const summary = container.querySelector('#post-input-summary').value.trim();
      const content = container.querySelector('#post-input-content').value.trim();
      const category = container.querySelector('#post-select-category').value;
      const teamCode = container.querySelector('#post-select-team').value;
      const tag = container.querySelector('#post-select-tag').value;
      const urgency = container.querySelector('#post-select-urgency').value;
      const author = container.querySelector('#post-input-author').value.trim() || 'Anonymous Insider';
      const role = container.querySelector('#post-input-role').value.trim() || 'Contributor';

      if (!title || !summary) {
        alert('Please fill out both the Title and the Summary fields.');
        return;
      }

      const teamObj = NBA_TEAMS.find((t) => t.code === teamCode) || { conf: 'East' };
      const tagColors = {
        Trade: 'blue',
        Injury: 'red',
        Highlight: 'green',
        Analysis: 'purple',
        Discussion: 'teal',
      };

      store.addPost({
        type: category.toLowerCase().split(' ')[0],
        category,
        tag,
        tagColor: tagColors[tag] || 'blue',
        urgency,
        title,
        team: teamCode,
        conference: teamObj.conf,
        author,
        role,
        summary,
        content: content || summary,
      });

      store.closePostModal();
    });
  }
}
