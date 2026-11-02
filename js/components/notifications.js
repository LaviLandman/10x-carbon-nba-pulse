/**
 * IBM Carbon Design System Toast Notification Component
 */
import { icons } from './icons.js';
import { store } from '../store.js';

export function renderToast(container) {
  const toast = store.activeToast;
  if (!toast) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="cds--toast-notification cds--toast-notification--${toast.kind || 'success'}" role="status"
         style="position: fixed; bottom: 2rem; right: 2rem; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 420px;">
      <div class="cds--toast-notification__details">
        <h3 class="cds--toast-notification__title">${toast.title}</h3>
        <div class="cds--toast-notification__subtitle">${toast.subtitle}</div>
        <p class="cds--toast-notification__caption">Now</p>
      </div>
      <button class="cds--toast-notification__close-button" type="button" aria-label="Close notification" id="btn-close-toast">
        ${icons.close}
      </button>
    </div>
  `;

  const closeBtn = container.querySelector('#btn-close-toast');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      store.dismissToast();
    });
  }

  // Auto dismiss after 5s
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    store.dismissToast();
  }, 5000);
}
