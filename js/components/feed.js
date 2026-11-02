/**
 * IBM Carbon Design System Feed Component (Posts & Messages)
 */
import { icons } from './icons.js';
import { store } from '../store.js';

export function renderFeed(container) {
  const posts = store.getFilteredPosts();
  const alert = store.breakingAlert;

  container.innerHTML = `
    <!-- Breaking Alert Inline Notification (Carbon Inline Notification) -->
    ${
      alert.active
        ? `
      <div class="cds--inline-notification cds--inline-notification--warning" role="alert" style="margin-bottom: 1.5rem; width: 100%;">
        <div class="cds--inline-notification__details">
          ${icons.warning}
          <div class="cds--inline-notification__text-wrapper">
            <p class="cds--inline-notification__title">${alert.title}:</p>
            <p class="cds--inline-notification__subtitle">${alert.subtitle}</p>
          </div>
        </div>
        <button class="cds--inline-notification__close-button" type="button" aria-label="Dismiss notification" id="btn-dismiss-alert">
          ${icons.close}
        </button>
      </div>
    `
        : ''
    }

    <!-- Content Switcher Tabs -->
    <div class="cds--content-switcher" role="tablist" aria-label="News Feeds" style="margin-bottom: 1.25rem;">
      <button class="cds--content-switcher-btn ${store.activeTab === 'all' ? 'cds--content-switcher--selected' : ''}" data-tab="all" role="tab">
        <span class="cds--content-switcher__label">All Updates</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === 'trades' ? 'cds--content-switcher--selected' : ''}" data-tab="trades" role="tab">
        <span class="cds--content-switcher__label">Trade Wire</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === 'recaps' ? 'cds--content-switcher--selected' : ''}" data-tab="recaps" role="tab">
        <span class="cds--content-switcher__label">Game Recaps</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === 'injuries' ? 'cds--content-switcher--selected' : ''}" data-tab="injuries" role="tab">
        <span class="cds--content-switcher__label">Injury Reports</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === 'community' ? 'cds--content-switcher--selected' : ''}" data-tab="community" role="tab">
        <span class="cds--content-switcher__label">Community</span>
      </button>
    </div>

    <!-- Posts Stream -->
    <div class="posts-stream" style="display: flex; flex-direction: column; gap: 1rem;">
      ${
        posts.length === 0
          ? `
        <div class="cds--tile" style="text-align: center; padding: 3rem 1rem;">
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">No updates found</h3>
          <p style="color: var(--cds-text-secondary, #525252); margin-bottom: 1rem;">Try clearing your search query or adjusting your team and category filters.</p>
          <button class="cds--btn cds--btn--secondary" id="btn-empty-reset">Reset All Filters</button>
        </div>
      `
          : posts
              .map((post) => {
                return `
          <article class="cds--tile ${post.pinned ? 'cds--tile--light' : ''}" id="${post.id}" style="position: relative; border-left: 4px solid ${
                  post.urgency === 'high' ? '#da1e28' : post.urgency === 'medium' ? '#f1c21b' : '#0f62fe'
                };">
            <!-- Header Row -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span class="cds--tag cds--tag--${post.tagColor || 'blue'} cds--tag--sm">${post.tag}</span>
                <span class="cds--tag cds--tag--outline cds--tag--sm">${post.team} (${post.conference})</span>
                ${post.pinned ? `<span class="cds--tag cds--tag--red cds--tag--sm">PINNED</span>` : ''}
                <span style="font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f);">${post.timestamp}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.25rem;">
                <span style="font-size: 0.75rem; color: var(--cds-text-secondary, #525252);">By <strong>${post.author}</strong> (${post.role})</span>
              </div>
            </div>

            <!-- Title & Summary -->
            <h3 style="font-size: 1.125rem; font-weight: 600; line-height: 1.4; margin-bottom: 0.5rem; color: var(--cds-text-primary, #161616);">
              ${post.title}
            </h3>
            <p style="font-size: 0.875rem; line-height: 1.5; color: var(--cds-text-secondary, #525252); margin-bottom: 0.75rem;">
              ${post.summary}
            </p>

            <!-- Expanded Body (Accordion style) -->
            ${
              post.expanded
                ? `
              <div class="post-expanded-content" style="padding: 1rem; background: var(--cds-layer-01, #f4f4f4); border-left: 2px solid var(--cds-border-subtle, #e0e0e0); margin-bottom: 1rem; font-size: 0.875rem; line-height: 1.6;">
                <p style="margin-bottom: 1rem;">${post.content}</p>
                
                <!-- Comments Section -->
                <div class="post-comments-container" style="border-top: 1px solid var(--cds-border-subtle, #e0e0e0); padding-top: 0.75rem;">
                  <h4 style="font-size: 0.8125rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase;">
                    Community Discussion (${post.comments.length})
                  </h4>
                  ${
                    post.comments.length === 0
                      ? `<p style="font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f); margin-bottom: 0.75rem;">No replies yet. Start the conversation!</p>`
                      : post.comments
                          .map(
                            (c) => `
                        <div style="padding: 0.5rem; background: var(--cds-background, #ffffff); border-radius: 2px; margin-bottom: 0.5rem; font-size: 0.8125rem;">
                          <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <strong>${c.author}</strong>
                            <span style="font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f);">${c.time}</span>
                          </div>
                          <p>${c.text}</p>
                        </div>
                      `
                          )
                          .join('')
                  }

                  <!-- Add Comment Form -->
                  <div class="add-comment-box" style="display: flex; gap: 0.5rem; margin-top: 0.75rem;">
                    <input type="text" class="cds--text-input cds--text-input--sm" id="comment-input-${post.id}" placeholder="Write a comment..." style="flex: 1;">
                    <button class="cds--btn cds--btn--secondary cds--btn--sm btn-submit-comment" data-post-id="${post.id}">Reply</button>
                  </div>
                </div>
              </div>
            `
                : ''
            }

            <!-- Card Actions Toolbar -->
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--cds-border-subtle, #e0e0e0); padding-top: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="cds--btn cds--btn--ghost cds--btn--sm btn-like-post ${post.userLiked ? 'cds--btn--field' : ''}" data-post-id="${post.id}" title="Like update">
                  ${icons.thumbsUp}&nbsp;<span>${post.likes}</span>
                </button>
                <button class="cds--btn cds--btn--ghost cds--btn--sm btn-toggle-expand" data-post-id="${post.id}">
                  ${icons.chat}&nbsp;<span>${post.commentsCount} Comments</span>
                </button>
              </div>

              <div>
                <button class="cds--btn cds--btn--tertiary cds--btn--sm btn-toggle-expand" data-post-id="${post.id}">
                  ${post.expanded ? 'Hide Details' : 'Read Full Analysis'}
                </button>
              </div>
            </div>
          </article>
        `;
              })
              .join('')
      }
    </div>
  `;

  // Attach event handlers
  const dismissBtn = container.querySelector('#btn-dismiss-alert');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      store.dismissAlert();
    });
  }

  container.querySelectorAll('.cds--content-switcher-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      store.setActiveTab(tab);
    });
  });

  const emptyResetBtn = container.querySelector('#btn-empty-reset');
  if (emptyResetBtn) {
    emptyResetBtn.addEventListener('click', () => {
      store.resetFilters();
    });
  }

  container.querySelectorAll('.btn-like-post').forEach((btn) => {
    btn.addEventListener('click', () => {
      const postId = btn.getAttribute('data-post-id');
      store.toggleLike(postId);
    });
  });

  container.querySelectorAll('.btn-toggle-expand').forEach((btn) => {
    btn.addEventListener('click', () => {
      const postId = btn.getAttribute('data-post-id');
      store.toggleExpand(postId);
    });
  });

  container.querySelectorAll('.btn-submit-comment').forEach((btn) => {
    btn.addEventListener('click', () => {
      const postId = btn.getAttribute('data-post-id');
      const input = container.querySelector(`#comment-input-${postId}`);
      if (input && input.value.trim()) {
        store.addComment(postId, 'Lavi Landman', input.value.trim());
      }
    });
  });
}
