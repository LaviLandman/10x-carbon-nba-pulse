/**
 * State store for Courtside Pulse (Carbon Design System Demo)
 */
import { INITIAL_POSTS, STANDINGS_DATA, BREAKING_ALERT } from './data.js';

class CourtsideStore {
  constructor() {
    this.posts = [...INITIAL_POSTS];
    this.standings = [...STANDINGS_DATA];
    this.breakingAlert = { ...BREAKING_ALERT };
    this.activeTab = 'all'; // 'all' | 'trades' | 'recaps' | 'injuries' | 'community' | 'standings'
    this.searchQuery = '';
    this.selectedConference = 'all';
    this.selectedTeam = 'all';
    this.selectedTag = 'all';
    this.currentTheme = 'g10'; // 'white' | 'g10' | 'g90' | 'g100'
    this.tableSortField = 'pct';
    this.tableSortDirection = 'desc'; // 'asc' | 'desc'
    this.tableSearchQuery = '';
    this.tablePage = 1;
    this.tablePageSize = 5;
    this.isPostModalOpen = false;
    this.activeToast = null;
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this));
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-carbon-theme', theme);
    document.body.className = `cds--theme--${theme}`;
    this.notify();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  setSearchQuery(query) {
    this.searchQuery = query.trim().toLowerCase();
    this.notify();
  }

  setConference(conf) {
    this.selectedConference = conf;
    this.notify();
  }

  setTeam(team) {
    this.selectedTeam = team;
    this.notify();
  }

  setTag(tag) {
    this.selectedTag = tag;
    this.notify();
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedConference = 'all';
    this.selectedTeam = 'all';
    this.selectedTag = 'all';
    this.notify();
  }

  addPost(newPost) {
    const post = {
      id: `post-${Date.now()}`,
      timestamp: 'Just now',
      date: new Date().toISOString(),
      likes: 0,
      commentsCount: 0,
      comments: [],
      expanded: false,
      pinned: false,
      ...newPost,
    };
    this.posts.unshift(post);
    this.activeToast = {
      kind: 'success',
      title: 'Message Posted Successfully',
      subtitle: `Your post "${post.title}" has been published to the community feed.`,
      id: Date.now(),
    };
    this.notify();
  }

  toggleLike(postId) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      if (post.userLiked) {
        post.likes -= 1;
        post.userLiked = false;
      } else {
        post.likes += 1;
        post.userLiked = true;
      }
      this.notify();
    }
  }

  toggleExpand(postId) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      post.expanded = !post.expanded;
      this.notify();
    }
  }

  addComment(postId, author, text) {
    const post = this.posts.find((p) => p.id === postId);
    if (post && text.trim()) {
      post.comments.push({
        author: author || 'Fan Analyst',
        time: 'Just now',
        text: text.trim(),
      });
      post.commentsCount = post.comments.length;
      this.notify();
    }
  }

  dismissAlert() {
    this.breakingAlert.active = false;
    this.notify();
  }

  dismissToast() {
    this.activeToast = null;
    this.notify();
  }

  openPostModal() {
    this.isPostModalOpen = true;
    this.notify();
  }

  closePostModal() {
    this.isPostModalOpen = false;
    this.notify();
  }

  setTableSort(field) {
    if (this.tableSortField === field) {
      this.tableSortDirection = this.tableSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.tableSortField = field;
      this.tableSortDirection = 'desc';
    }
    this.notify();
  }

  setTableSearch(query) {
    this.tableSearchQuery = query.toLowerCase().trim();
    this.tablePage = 1;
    this.notify();
  }

  setTablePage(page) {
    this.tablePage = page;
    this.notify();
  }

  setTablePageSize(size) {
    this.tablePageSize = Number(size);
    this.tablePage = 1;
    this.notify();
  }

  getFilteredPosts() {
    return this.posts.filter((post) => {
      // Tab filter
      if (this.activeTab === 'trades' && post.category !== 'Trade Wire') return false;
      if (this.activeTab === 'recaps' && post.category !== 'Game Recaps') return false;
      if (this.activeTab === 'injuries' && post.category !== 'Injury Reports') return false;
      if (this.activeTab === 'community' && post.category !== 'Community Feed') return false;

      // Conference filter
      if (this.selectedConference !== 'all' && post.conference !== this.selectedConference) return false;

      // Team filter
      if (this.selectedTeam !== 'all' && post.team !== this.selectedTeam) return false;

      // Tag filter
      if (this.selectedTag !== 'all' && post.tag !== this.selectedTag) return false;

      // Search query filter
      if (this.searchQuery) {
        const text = `${post.title} ${post.summary} ${post.content} ${post.author} ${post.team}`.toLowerCase();
        if (!text.includes(this.searchQuery)) return false;
      }

      return true;
    });
  }

  getPaginatedStandings() {
    let list = [...this.standings];
    if (this.tableSearchQuery) {
      list = list.filter((item) =>
        item.team.toLowerCase().includes(this.tableSearchQuery) ||
        item.conf.toLowerCase().includes(this.tableSearchQuery) ||
        item.status.toLowerCase().includes(this.tableSearchQuery)
      );
    }

    list.sort((a, b) => {
      let valA = a[this.tableSortField];
      let valB = b[this.tableSortField];
      if (typeof valA === 'string' && valA.startsWith('.')) {
        valA = parseFloat(valA);
        valB = parseFloat(valB);
      }
      if (valA < valB) return this.tableSortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.tableSortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    const total = list.length;
    const totalPages = Math.ceil(total / this.tablePageSize) || 1;
    const currentPage = Math.min(this.tablePage, totalPages);
    const start = (currentPage - 1) * this.tablePageSize;
    const end = start + this.tablePageSize;
    const items = list.slice(start, end);

    return {
      items,
      total,
      totalPages,
      currentPage,
      pageSize: this.tablePageSize,
    };
  }
}

export const store = new CourtsideStore();
