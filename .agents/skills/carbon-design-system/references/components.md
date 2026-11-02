# IBM Carbon Design System v11 - Component Markup Templates

This document provides production-ready HTML markup templates conforming to IBM Carbon Design System v11 BEM naming conventions (`cds--*`).

---

## 1. Buttons

```html
<!-- Primary Button -->
<button class="cds--btn cds--btn--primary" type="button">
  <span>Submit Post</span>
  <!-- Optional 16x16 Carbon SVG icon -->
</button>

<!-- Secondary Button -->
<button class="cds--btn cds--btn--secondary cds--btn--sm" type="button">
  Cancel
</button>

<!-- Danger Button -->
<button class="cds--btn cds--btn--danger" type="button">
  Delete Record
</button>

<!-- Ghost Button (Icon or Text) -->
<button class="cds--btn cds--btn--ghost cds--btn--sm" type="button">
  View Details
</button>
```

---

## 2. Shell Header & Navigation

```html
<header class="cds--header" aria-label="Application Header">
  <a class="cds--skip-to-content" href="#main-content" tabindex="0">Skip to main content</a>
  
  <button class="cds--header__menu-trigger cds--header__action" aria-label="Toggle Navigation">
    <svg class="cds--header__menu-toggle" width="20" height="20" viewBox="0 0 20 20">
      <path d="M2 14.5h16v1H2zm0-5h16v1H2zm0-5h16v1H2z"/>
    </svg>
  </button>

  <a class="cds--header__name" href="#">
    <span class="cds--header__name--prefix">IBM Carbon</span>&nbsp;App Name
  </a>

  <nav class="cds--header__nav" aria-label="Main Navigation">
    <ul class="cds--header__menu-bar" role="menubar">
      <li>
        <a class="cds--header__menu-item cds--header__menu-item--current" href="#" role="menuitem">Dashboard</a>
      </li>
      <li>
        <a class="cds--header__menu-item" href="#" role="menuitem">Reports</a>
      </li>
    </ul>
  </nav>

  <div class="cds--header__global">
    <button class="cds--header__action" aria-label="Notifications" title="Notifications">
      <!-- Notification Icon -->
    </button>
    <button class="cds--header__action" aria-label="User Profile" title="Profile">
      <!-- User Icon -->
    </button>
  </div>
</header>
```

---

## 3. Side Navigation Rail

```html
<nav class="cds--side-nav cds--side-nav--expanded" aria-label="Side Navigation">
  <ul class="cds--side-nav__items">
    <li class="cds--side-nav__item">
      <a class="cds--side-nav__link cds--side-nav__link--current" href="#">
        <span class="cds--side-nav__link-text">Overview</span>
      </a>
    </li>
    <li class="cds--side-nav__item">
      <a class="cds--side-nav__link" href="#">
        <span class="cds--side-nav__link-text">Analytics</span>
      </a>
    </li>
  </ul>
</nav>
```

---

## 4. Search Bar & Dropdown Select

```html
<!-- Carbon Search Input -->
<div class="cds--search cds--search--lg" role="search">
  <div class="cds--search-magnifier" tabindex="-1">
    <!-- Search SVG -->
  </div>
  <label id="search-label" class="cds--label" for="site-search">Search updates</label>
  <input class="cds--search-input" type="text" id="site-search" role="searchbox" placeholder="Type to filter...">
  <button class="cds--search-close" title="Clear search">
    <!-- Close SVG -->
  </button>
</div>

<!-- Carbon Select Dropdown -->
<div class="cds--form-item">
  <div class="cds--select">
    <label for="select-category" class="cds--label">Category</label>
    <div class="cds--select-input__wrapper">
      <select id="select-category" class="cds--select-input">
        <option value="all">All Categories</option>
        <option value="news">Breaking News</option>
        <option value="trades">Trade Wire</option>
      </select>
      <div class="cds--select__arrow">
        <!-- Chevron Down SVG -->
      </div>
    </div>
  </div>
</div>
```

---

## 5. Content Switcher (Tab Buttons)

```html
<div class="cds--content-switcher" role="tablist" aria-label="Feed Tabs">
  <button class="cds--content-switcher-btn cds--content-switcher--selected" role="tab" aria-selected="true">
    <span class="cds--content-switcher__label">All Updates</span>
  </button>
  <button class="cds--content-switcher-btn" role="tab" aria-selected="false">
    <span class="cds--content-switcher__label">Breaking</span>
  </button>
  <button class="cds--content-switcher-btn" role="tab" aria-selected="false">
    <span class="cds--content-switcher__label">Analysis</span>
  </button>
</div>
```

---

## 6. Tiles & Tags

```html
<!-- Standard Content Tile -->
<article class="cds--tile">
  <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
    <span class="cds--tag cds--tag--blue cds--tag--sm">Trade</span>
    <span class="cds--tag cds--tag--outline cds--tag--sm">Eastern Conf</span>
  </div>
  <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">
    Headline Title
  </h3>
  <p style="font-size: 0.875rem; color: var(--cds-text-secondary);">
    Summary copy describing the item concisely.
  </p>
</article>

<!-- Tag Variants -->
<span class="cds--tag cds--tag--blue">Blue Tag</span>
<span class="cds--tag cds--tag--green">Green / Success</span>
<span class="cds--tag cds--tag--red">Red / High Urgency</span>
<span class="cds--tag cds--tag--purple">Purple / Category</span>
<span class="cds--tag cds--tag--teal">Teal / Discussion</span>
<span class="cds--tag cds--tag--outline">Outline Variant</span>
```

---

## 7. Data Table with Sort & Pagination

```html
<div class="cds--data-table-container">
  <table class="cds--data-table cds--data-table--sort cds--data-table--zebra" aria-label="Sample Table">
    <thead>
      <tr>
        <th scope="col">
          <button class="cds--table-sort cds--table-sort--active">
            <span class="cds--table-sort__flex">
              <span class="cds--table-header-label">Team</span>
              <span class="cds--table-sort__icon"><!-- Sort Icon --></span>
            </span>
          </button>
        </th>
        <th scope="col"><span class="cds--table-header-label">Wins</span></th>
        <th scope="col"><span class="cds--table-header-label">Losses</span></th>
        <th scope="col"><span class="cds--table-header-label">Pct</span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Boston Celtics</strong></td>
        <td>42</td>
        <td>12</td>
        <td>.778</td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination Bar -->
  <div class="cds--pagination">
    <div class="cds--pagination__left">
      <span class="cds--pagination__text">Items per page: 10</span>
      <span class="cds--pagination__text">1-10 of 30 items</span>
    </div>
    <div class="cds--pagination__right">
      <span class="cds--pagination__text">Page 1 of 3</span>
      <button class="cds--pagination__button cds--pagination__button--backward" disabled title="Previous page"></button>
      <button class="cds--pagination__button cds--pagination__button--forward" title="Next page"></button>
    </div>
  </div>
</div>
```

---

## 8. Modals

```html
<div class="cds--modal is-visible" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
  <div class="cds--modal-container">
    <div class="cds--modal-header">
      <h2 class="cds--modal-header__heading" id="modal-title">Modal Title</h2>
      <button class="cds--modal-close" type="button" aria-label="Close modal">
        <!-- Close SVG -->
      </button>
    </div>

    <div class="cds--modal-content">
      <form class="cds--form">
        <div class="cds--form-item">
          <label for="input-field" class="cds--label">Field Name</label>
          <input type="text" id="input-field" class="cds--text-input" placeholder="Enter text...">
        </div>
      </form>
    </div>

    <div class="cds--modal-footer">
      <button class="cds--btn cds--btn--secondary" type="button">Cancel</button>
      <button class="cds--btn cds--btn--primary" type="button">Save</button>
    </div>
  </div>
</div>
```

---

## 9. Notifications (Inline & Toast)

```html
<!-- Inline Notification (Warning / Alert) -->
<div class="cds--inline-notification cds--inline-notification--warning" role="alert">
  <div class="cds--inline-notification__details">
    <!-- Warning Icon -->
    <div class="cds--inline-notification__text-wrapper">
      <p class="cds--inline-notification__title">Trade Deadline Alert:</p>
      <p class="cds--inline-notification__subtitle">Window closes in 48 hours.</p>
    </div>
  </div>
  <button class="cds--inline-notification__close-button" type="button" aria-label="Dismiss">
    <!-- Close Icon -->
  </button>
</div>

<!-- Toast Notification (Success / Status) -->
<div class="cds--toast-notification cds--toast-notification--success" role="status">
  <div class="cds--toast-notification__details">
    <h3 class="cds--toast-notification__title">Post Published</h3>
    <div class="cds--toast-notification__subtitle">Your update is now live in the community feed.</div>
    <p class="cds--toast-notification__caption">Now</p>
  </div>
  <button class="cds--toast-notification__close-button" type="button" aria-label="Close notification">
    <!-- Close Icon -->
  </button>
</div>
```

---

## 10. Accordion

```html
<ul class="cds--accordion">
  <li class="cds--accordion__item">
    <button class="cds--accordion__heading" type="button" aria-expanded="false">
      <span class="cds--accordion__arrow"><!-- Chevron Down SVG --></span>
      <div class="cds--accordion__title">Salary Cap Apron Rules</div>
    </button>
    <div class="cds--accordion__content">
      Teams above the second apron cannot aggregate player salaries in multi-team transactions.
    </div>
  </li>
</ul>
```
