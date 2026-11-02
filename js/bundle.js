(() => {
  // js/data.js
  var NBA_TEAMS = [
    { code: "BOS", name: "Boston Celtics", conf: "East", div: "Atlantic" },
    { code: "MIL", name: "Milwaukee Bucks", conf: "East", div: "Central" },
    { code: "NYK", name: "New York Knicks", conf: "East", div: "Atlantic" },
    { code: "CLE", name: "Cleveland Cavaliers", conf: "East", div: "Central" },
    { code: "IND", name: "Indiana Pacers", conf: "East", div: "Central" },
    { code: "PHI", name: "Philadelphia 76ers", conf: "East", div: "Atlantic" },
    { code: "MIA", name: "Miami Heat", conf: "East", div: "Southeast" },
    { code: "ORL", name: "Orlando Magic", conf: "East", div: "Southeast" },
    { code: "DEN", name: "Denver Nuggets", conf: "West", div: "Northwest" },
    { code: "OKC", name: "Oklahoma City Thunder", conf: "West", div: "Northwest" },
    { code: "MIN", name: "Minnesota Timberwolves", conf: "West", div: "Northwest" },
    { code: "LAC", name: "LA Clippers", conf: "West", div: "Pacific" },
    { code: "DAL", name: "Dallas Mavericks", conf: "West", div: "Southwest" },
    { code: "PHX", name: "Phoenix Suns", conf: "West", div: "Pacific" },
    { code: "LAL", name: "Los Angeles Lakers", conf: "West", div: "Pacific" },
    { code: "GSW", name: "Golden State Warriors", conf: "West", div: "Pacific" }
  ];
  var INITIAL_POSTS = [
    {
      id: "post-1",
      type: "trade",
      category: "Trade Wire",
      tag: "Trade",
      tagColor: "blue",
      urgency: "high",
      title: "Blockbuster 3-Team Trade Proposed Ahead of Deadline",
      team: "NYK",
      conference: "East",
      author: "Adrian Wojnarowski",
      role: "Senior Insider",
      timestamp: "12 minutes ago",
      date: "2026-11-02T18:30:00Z",
      summary: "Sources indicate front offices in New York, Minnesota, and Phoenix have re-engaged in advanced discussions on a multi-player package involving future first-round draft capital and bench wing depth.",
      content: "According to league executives speaking on condition of anonymity, the framework revolves around perimeter defense and salary cap flexibility for the 2027 season. Final medical evaluations are expected over the next 24 hours before submitting paperwork to the league office.",
      likes: 342,
      commentsCount: 88,
      comments: [
        { author: "Marcus V.", time: "8m ago", text: "If Knicks pull this off without surrendering unprotected 2027 picks, it is an absolute masterclass." },
        { author: "Sarah Jenkins", time: "5m ago", text: "Wolves defense will take a temporary hit, but the offensive ceiling expands significantly." }
      ],
      expanded: false,
      pinned: true
    },
    {
      id: "post-2",
      type: "recap",
      category: "Game Recaps",
      tag: "Highlight",
      tagColor: "green",
      urgency: "medium",
      title: "Celtics Hold Off Thunder in 118-115 Double-OT Thriller",
      team: "BOS",
      conference: "East",
      author: "Zach Lowe",
      role: "Lead Analyst",
      timestamp: "45 minutes ago",
      date: "2026-11-02T17:45:00Z",
      summary: "A signature clash of conference frontrunners at TD Garden ended with clutch defensive stops and a dagger corner triple with 4.2 seconds remaining.",
      content: "Boston erased an 11-point deficit in the fourth quarter behind relentless ball movement and 38 combined points from the wing duo. Oklahoma City forced both overtimes on transition drives, but ran out of fouls in the final frame.",
      likes: 512,
      commentsCount: 142,
      comments: [
        { author: "David K.", time: "20m ago", text: "That final inbound defensive rotation was picture perfect Carbon-level precision." }
      ],
      expanded: false,
      pinned: false
    },
    {
      id: "post-3",
      type: "injury",
      category: "Injury Reports",
      tag: "Injury",
      tagColor: "red",
      urgency: "high",
      title: "Star Guard Undergoes MRI on Right Ankle Sprain; Out 2-3 Weeks",
      team: "DAL",
      conference: "West",
      author: "Shams Charania",
      role: "NBA Insider",
      timestamp: "2 hours ago",
      date: "2026-11-02T16:15:00Z",
      summary: "Dallas medical staff confirms Grade 2 lateral ankle sprain following fourth-quarter landing in Sunday night contest against Phoenix.",
      content: "Re-evaluation is scheduled in fourteen days. The team will elevate backup ballhandlers into the starting five and utilize two-way guard allocations to manage back-to-back road scheduling.",
      likes: 189,
      commentsCount: 64,
      comments: [
        { author: "Elena Rostova", time: "1h ago", text: "Tough blow during a six-game road trip. Next man up mentality needed in Texas." }
      ],
      expanded: false,
      pinned: false
    },
    {
      id: "post-4",
      type: "community",
      category: "Community Feed",
      tag: "Analysis",
      tagColor: "purple",
      urgency: "low",
      title: "Deep Dive: Is Pace-and-Space Being Replaced by Giant Ball in 2026?",
      team: "DEN",
      conference: "West",
      author: "Elena Chen",
      role: "Analytics Contributor",
      timestamp: "3 hours ago",
      date: "2026-11-02T15:00:00Z",
      summary: "Analyzing rebounding differentials, post-up efficiency, and the revival of twin-tower lineups across Western Conference contenders.",
      content: "Looking at tracking data across the first 10 games of the season, possessions featuring two 6-foot-10+ players on court show a 4.8 net rating improvement over small-ball variants, primarily driven by second-chance conversion rates.",
      likes: 275,
      commentsCount: 95,
      comments: [],
      expanded: false,
      pinned: false
    },
    {
      id: "post-5",
      type: "community",
      category: "Community Feed",
      tag: "Discussion",
      tagColor: "teal",
      urgency: "low",
      title: "Fan Poll: Which Rookie Has Exceeded Expectations Most Through Week 3?",
      team: "MIN",
      conference: "West",
      author: "Jordan Bell",
      role: "Community Moderator",
      timestamp: "5 hours ago",
      date: "2026-11-02T13:30:00Z",
      summary: "Vote in the comments below. Highlighting standout playmaking, defensive versatility, and shooting efficiency among the top draft selections.",
      content: "Cast your thoughts on who is making the most immediate winning impact. The current consensus highlights perimeter defense from the #4 pick and transition speed from the late first-round sleepers.",
      likes: 410,
      commentsCount: 204,
      comments: [],
      expanded: false,
      pinned: false
    },
    {
      id: "post-6",
      type: "trade",
      category: "Trade Wire",
      tag: "Roster",
      tagColor: "cool-gray",
      urgency: "medium",
      title: "Warriors Convert Two-Way Contract to Standard Multi-Year Deal",
      team: "GSW",
      conference: "West",
      author: "Anthony Slater",
      role: "Beat Reporter",
      timestamp: "6 hours ago",
      date: "2026-11-02T12:00:00Z",
      summary: "Front office locks in defensive spark plug guard through 2028 season using remaining mid-level exception allowance.",
      content: "The 23-year-old guard has averaged 12.4 points and 2.1 steals in 22 minutes off the bench, earning praise from the coaching staff for on-ball perimeter harassment.",
      likes: 220,
      commentsCount: 38,
      comments: [],
      expanded: false,
      pinned: false
    }
  ];
  var STANDINGS_DATA = [
    { id: "1", team: "Boston Celtics", conf: "East", w: 9, l: 1, pct: ".900", streak: "W6", l10: "9-1", diff: "+11.2", status: "Healthy" },
    { id: "2", team: "Cleveland Cavaliers", conf: "East", w: 8, l: 2, pct: ".800", streak: "W3", l10: "8-2", diff: "+8.4", status: "Healthy" },
    { id: "3", team: "New York Knicks", conf: "East", w: 7, l: 3, pct: ".700", streak: "W2", l10: "7-3", diff: "+5.1", status: "Day-to-Day" },
    { id: "4", team: "Oklahoma City Thunder", conf: "West", w: 8, l: 2, pct: ".800", streak: "L1", l10: "8-2", diff: "+9.7", status: "Healthy" },
    { id: "5", team: "Denver Nuggets", conf: "West", w: 7, l: 3, pct: ".700", streak: "W4", l10: "7-3", diff: "+6.3", status: "Healthy" },
    { id: "6", team: "Minnesota Timberwolves", conf: "West", w: 6, l: 4, pct: ".600", streak: "W1", l10: "6-4", diff: "+3.8", status: "Injured" },
    { id: "7", team: "Dallas Mavericks", conf: "West", w: 6, l: 4, pct: ".600", streak: "L1", l10: "6-4", diff: "+2.1", status: "Injured" },
    { id: "8", team: "Golden State Warriors", conf: "West", w: 5, l: 5, pct: ".500", streak: "W2", l10: "5-5", diff: "+0.5", status: "Healthy" },
    { id: "9", team: "Milwaukee Bucks", conf: "East", w: 5, l: 5, pct: ".500", streak: "L2", l10: "5-5", diff: "-1.2", status: "Day-to-Day" },
    { id: "10", team: "Miami Heat", conf: "East", w: 4, l: 6, pct: ".400", streak: "L3", l10: "4-6", diff: "-2.8", status: "Injured" }
  ];
  var BREAKING_ALERT = {
    id: "alert-trade-deadline",
    title: "BREAKING TRADE ALERT",
    subtitle: "Woj Bomb: Eastern Conference contenders finalizing blockbuster 3-team swap ahead of tonight's tipoff.",
    kind: "warning",
    linkText: "View Details",
    active: true
  };

  // js/store.js
  var CourtsideStore = class {
    constructor() {
      this.posts = [...INITIAL_POSTS];
      this.standings = [...STANDINGS_DATA];
      this.breakingAlert = { ...BREAKING_ALERT };
      this.activeTab = "all";
      this.searchQuery = "";
      this.selectedConference = "all";
      this.selectedTeam = "all";
      this.selectedTag = "all";
      this.currentTheme = "g10";
      this.tableSortField = "pct";
      this.tableSortDirection = "desc";
      this.tableSearchQuery = "";
      this.tablePage = 1;
      this.tablePageSize = 5;
      this.isPostModalOpen = false;
      this.activeToast = null;
      this.listeners = /* @__PURE__ */ new Set();
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
      document.documentElement.setAttribute("data-carbon-theme", theme);
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
      this.searchQuery = "";
      this.selectedConference = "all";
      this.selectedTeam = "all";
      this.selectedTag = "all";
      this.notify();
    }
    addPost(newPost) {
      const post = {
        id: `post-${Date.now()}`,
        timestamp: "Just now",
        date: (/* @__PURE__ */ new Date()).toISOString(),
        likes: 0,
        commentsCount: 0,
        comments: [],
        expanded: false,
        pinned: false,
        ...newPost
      };
      this.posts.unshift(post);
      this.activeToast = {
        kind: "success",
        title: "Message Posted Successfully",
        subtitle: `Your post "${post.title}" has been published to the community feed.`,
        id: Date.now()
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
          author: author || "Fan Analyst",
          time: "Just now",
          text: text.trim()
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
        this.tableSortDirection = this.tableSortDirection === "asc" ? "desc" : "asc";
      } else {
        this.tableSortField = field;
        this.tableSortDirection = "desc";
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
        if (this.activeTab === "trades" && post.category !== "Trade Wire") return false;
        if (this.activeTab === "recaps" && post.category !== "Game Recaps") return false;
        if (this.activeTab === "injuries" && post.category !== "Injury Reports") return false;
        if (this.activeTab === "community" && post.category !== "Community Feed") return false;
        if (this.selectedConference !== "all" && post.conference !== this.selectedConference) return false;
        if (this.selectedTeam !== "all" && post.team !== this.selectedTeam) return false;
        if (this.selectedTag !== "all" && post.tag !== this.selectedTag) return false;
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
        list = list.filter(
          (item) => item.team.toLowerCase().includes(this.tableSearchQuery) || item.conf.toLowerCase().includes(this.tableSearchQuery) || item.status.toLowerCase().includes(this.tableSearchQuery)
        );
      }
      list.sort((a, b) => {
        let valA = a[this.tableSortField];
        let valB = b[this.tableSortField];
        if (typeof valA === "string" && valA.startsWith(".")) {
          valA = parseFloat(valA);
          valB = parseFloat(valB);
        }
        if (valA < valB) return this.tableSortDirection === "asc" ? -1 : 1;
        if (valA > valB) return this.tableSortDirection === "asc" ? 1 : -1;
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
        pageSize: this.tablePageSize
      };
    }
  };
  var store = new CourtsideStore();

  // js/components/icons.js
  var icons = {
    search: `<svg class="cds--search-magnifier-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15 13.6L10.9 9.5C11.6 8.5 12 7.3 12 6c0-3.3-2.7-6-6-6S0 2.7 0 6s2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l4.1 4.1L15 13.6zM2 6c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/></svg>`,
    close: `<svg class="cds--search-clear" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M12 4.7L11.3 4 8 7.3 4.7 4 4 4.7 7.3 8 4 11.3 4.7 12 8 8.7 11.3 12 12 11.3 8.7 8z"/></svg>`,
    add: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M9 7V2H7v5H2v2h5v5h2V9h5V7H9z"/></svg>`,
    filter: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M15 2H1l5 6.3V14l4-2V8.3L15 2z"/></svg>`,
    user: `<svg class="cds--header__menu-item" width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7zM26 30H24V25a5 5 0 0 0-5-5H13a5 5 0 0 0-5 5v5H6V25a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"/></svg>`,
    notification: `<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M28.7 24.3l-2.7-4.1V13a10 10 0 0 0-8-9.8V2a2 2 0 0 0-4 0v1.2A10 10 0 0 0 6 13v7.2L3.3 24.3A2 2 0 0 0 5 27h6a5 5 0 0 0 10 0h6a2 2 0 0 0 1.7-2.7zM16 29a3 3 0 0 1-3-2h6a3 3 0 0 1-3 2zm10.3-4H5.7l2.3-3.5V13a8 8 0 0 1 16 0v8.5z"/></svg>`,
    switcher: `<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M14 4h4v4h-4zm0 10h4v4h-4zm0 10h4v4h-4zM4 4h4v4H4zm0 10h4v4H4zm0 10h4v4H4zm20-20h4v4h-4zm0 10h4v4h-4zm0 10h4v4h-4z"/></svg>`,
    chevronDown: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 11L3 6l.7-.7L8 9.6l4.3-4.3.7.7z"/></svg>`,
    chevronUp: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 5l5 5-.7.7L8 6.4 3.7 10.7 3 10z"/></svg>`,
    thumbsUp: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M6 15H2V7h4v8zm-2-2h-1V9h1v4zm4-6V5.5C8 4.1 9.1 3 10.5 3c.4 0 .8.1 1.1.4.3.3.4.7.4 1.1v2.5H15l-1.5 6H8V7zm2 2h3.2l.8-3.2-.8-.8H10.5c-.3 0-.5.2-.5.5V9z"/></svg>`,
    chat: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M14 2H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h2v3l3.5-3H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 10H7.1L5 13.8V12H2V3h12v9z"/></svg>`,
    overflowMenu: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="3" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="8" cy="13" r="1.5"/></svg>`,
    warning: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1L1 18h18L10 1zm0 3.3L16.7 16H3.3L10 4.3zM9 8h2v4H9V8zm0 5h2v2H9v-2z"/></svg>`,
    success: `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1C5 1 1 5 1 10s4 9 9 9 9-4 9-9-4-9-9-9zm-1.2 12.8L4.6 9.6l1.4-1.4 2.8 2.8 5.6-5.6 1.4 1.4-7 7z"/></svg>`,
    basketball: `<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm12 13a12 12 0 0 0-3.3-8.3A12.1 12.1 0 0 1 17 15zm-13 0a12.1 12.1 0 0 1-7.7-8.3A12 12 0 0 0 4 15zm0 2H4a12 12 0 0 0 3.3 8.3A12.1 12.1 0 0 1 15 17zm2 0a12.1 12.1 0 0 1 7.7 8.3A12 12 0 0 0 28 17zM16 4a12.1 12.1 0 0 1 4 8H12a12.1 12.1 0 0 1 4-8zm0 24a12.1 12.1 0 0 1-4-8h8a12.1 12.1 0 0 1-4 8z"/></svg>`,
    theme: `<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor"><path d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm0 26a12 12 0 0 1 0-24v24z"/></svg>`,
    sort: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11 6V2h-1v4H8l2.5 3L13 6h-2zM5 10v4h1v-4h2L5.5 7 3 10h2z"/></svg>`
  };

  // js/components/header.js
  function renderHeader(container) {
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
            <a class="cds--header__menu-item ${store.activeTab === "all" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="all" role="menuitem">
              All News
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === "trades" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="trades" role="menuitem">
              Trade Wire
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === "recaps" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="recaps" role="menuitem">
              Game Recaps
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === "injuries" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="injuries" role="menuitem">
              Injury Reports
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === "standings" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="standings" role="menuitem">
              Standings & Stats
            </a>
          </li>
          <li>
            <a class="cds--header__menu-item ${store.activeTab === "community" ? "cds--header__menu-item--current" : ""}" href="#" data-tab="community" role="menuitem">
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
            <option value="white" ${currentTheme === "white" ? "selected" : ""}>Theme: White</option>
            <option value="g10" ${currentTheme === "g10" ? "selected" : ""}>Theme: Gray 10</option>
            <option value="g90" ${currentTheme === "g90" ? "selected" : ""}>Theme: Gray 90</option>
            <option value="g100" ${currentTheme === "g100" ? "selected" : ""}>Theme: Gray 100</option>
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
    container.querySelectorAll("[data-tab]").forEach((tabEl) => {
      tabEl.addEventListener("click", (e) => {
        e.preventDefault();
        const tab = tabEl.getAttribute("data-tab");
        store.setActiveTab(tab);
      });
    });
    const homeLink = container.querySelector("#brand-home-link");
    if (homeLink) {
      homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        store.setActiveTab("all");
        store.resetFilters();
      });
    }
    const newPostBtn = container.querySelector("#btn-open-new-post");
    if (newPostBtn) {
      newPostBtn.addEventListener("click", () => {
        store.openPostModal();
      });
    }
    const themeSelector = container.querySelector("#theme-selector");
    if (themeSelector) {
      themeSelector.addEventListener("change", (e) => {
        store.setTheme(e.target.value);
      });
    }
    const toggleSideNavBtn = container.querySelector("#btn-toggle-side-nav");
    if (toggleSideNavBtn) {
      toggleSideNavBtn.addEventListener("click", () => {
        const sideNav = document.getElementById("app-side-nav");
        if (sideNav) {
          sideNav.classList.toggle("cds--side-nav--expanded");
        }
      });
    }
  }

  // js/components/nav.js
  function renderSideNav(container) {
    const activeConf = store.selectedConference;
    const activeTeam = store.selectedTeam;
    const eastTeams = NBA_TEAMS.filter((t) => t.conf === "East");
    const westTeams = NBA_TEAMS.filter((t) => t.conf === "West");
    container.innerHTML = `
    <nav class="cds--side-nav cds--side-nav--expanded" id="app-side-nav" aria-label="NBA Conference Filter Navigation">
      <div class="cds--side-nav__header" style="padding: 1rem; border-bottom: 1px solid var(--cds-border-subtle, #e0e0e0);">
        <h2 style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: var(--cds-text-secondary, #525252);">
          Filter by Team & Conf
        </h2>
      </div>

      <ul class="cds--side-nav__items">
        <!-- All Teams / Reset -->
        <li class="cds--side-nav__item">
          <a class="cds--side-nav__link ${activeConf === "all" && activeTeam === "all" ? "cds--side-nav__link--current" : ""}" href="#" id="side-nav-all">
            <span class="cds--side-nav__link-text">\u{1F3C0} All Teams & Conferences</span>
          </a>
        </li>

        <!-- Eastern Conference Category -->
        <li class="cds--side-nav__item">
          <div class="cds--side-nav__submenu-title" style="padding: 0.75rem 1rem 0.25rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            EASTERN CONFERENCE
          </div>
          <a class="cds--side-nav__link ${activeConf === "East" && activeTeam === "all" ? "cds--side-nav__link--current" : ""}" href="#" data-conf="East" data-team="all">
            <span class="cds--side-nav__link-text">All Eastern Teams</span>
          </a>
          <ul class="cds--side-nav__menu">
            ${eastTeams.map(
      (team) => `
                <li class="cds--side-nav__menu-item">
                  <a class="cds--side-nav__link ${activeTeam === team.code ? "cds--side-nav__link--current" : ""}" href="#" data-conf="East" data-team="${team.code}">
                    <span class="cds--side-nav__link-text">${team.name} (${team.code})</span>
                  </a>
                </li>
              `
    ).join("")}
          </ul>
        </li>

        <!-- Western Conference Category -->
        <li class="cds--side-nav__item">
          <div class="cds--side-nav__submenu-title" style="padding: 0.75rem 1rem 0.25rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            WESTERN CONFERENCE
          </div>
          <a class="cds--side-nav__link ${activeConf === "West" && activeTeam === "all" ? "cds--side-nav__link--current" : ""}" href="#" data-conf="West" data-team="all">
            <span class="cds--side-nav__link-text">All Western Teams</span>
          </a>
          <ul class="cds--side-nav__menu">
            ${westTeams.map(
      (team) => `
                <li class="cds--side-nav__menu-item">
                  <a class="cds--side-nav__link ${activeTeam === team.code ? "cds--side-nav__link--current" : ""}" href="#" data-conf="West" data-team="${team.code}">
                    <span class="cds--side-nav__link-text">${team.name} (${team.code})</span>
                  </a>
                </li>
              `
    ).join("")}
          </ul>
        </li>

        <!-- Quick Tag Navigation -->
        <li class="cds--side-nav__item" style="border-top: 1px solid var(--cds-border-subtle, #e0e0e0); margin-top: 1rem; padding-top: 0.5rem;">
          <div class="cds--side-nav__submenu-title" style="padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; color: var(--cds-text-helper, #6f6f6f);">
            POPULAR TAGS
          </div>
          <div style="padding: 0 1rem 1rem; display: flex; flex-wrap: wrap; gap: 0.35rem;">
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "all" ? "cds--tag--blue" : "cds--tag--cool-gray"}" data-nav-tag="all">All</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "Trade" ? "cds--tag--blue" : "cds--tag--cool-gray"}" data-nav-tag="Trade">Trade</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "Injury" ? "cds--tag--red" : "cds--tag--cool-gray"}" data-nav-tag="Injury">Injury</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "Highlight" ? "cds--tag--green" : "cds--tag--cool-gray"}" data-nav-tag="Highlight">Highlight</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "Analysis" ? "cds--tag--purple" : "cds--tag--cool-gray"}" data-nav-tag="Analysis">Analysis</button>
            <button class="cds--tag cds--tag--sm ${store.selectedTag === "Discussion" ? "cds--tag--teal" : "cds--tag--cool-gray"}" data-nav-tag="Discussion">Discussion</button>
          </div>
        </li>
      </ul>
    </nav>
  `;
    const allBtn = container.querySelector("#side-nav-all");
    if (allBtn) {
      allBtn.addEventListener("click", (e) => {
        e.preventDefault();
        store.setConference("all");
        store.setTeam("all");
      });
    }
    container.querySelectorAll("[data-conf]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const conf = link.getAttribute("data-conf");
        const team = link.getAttribute("data-team");
        store.setConference(conf);
        store.setTeam(team);
      });
    });
    container.querySelectorAll("[data-nav-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-nav-tag");
        store.setTag(tag);
      });
    });
  }

  // js/components/filters.js
  function renderFilters(container) {
    const filteredPosts = store.getFilteredPosts();
    const hasActiveFilters = store.searchQuery !== "" || store.selectedConference !== "all" || store.selectedTeam !== "all" || store.selectedTag !== "all";
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
            ${store.searchQuery ? `<button class="cds--search-close" id="btn-clear-search" title="Clear search">${icons.close}</button>` : ""}
          </div>
        </div>

        <!-- Conference Selector -->
        <div class="cds--col-lg-2 cds--col-md-2 cds--col-sm-2">
          <div class="cds--form-item">
            <div class="cds--select">
              <label for="select-conference" class="cds--label">Conference</label>
              <div class="cds--select-input__wrapper">
                <select id="select-conference" class="cds--select-input">
                  <option value="all" ${store.selectedConference === "all" ? "selected" : ""}>All Conferences</option>
                  <option value="East" ${store.selectedConference === "East" ? "selected" : ""}>Eastern Conference</option>
                  <option value="West" ${store.selectedConference === "West" ? "selected" : ""}>Western Conference</option>
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
                  <option value="all" ${store.selectedTeam === "all" ? "selected" : ""}>All 30 Teams</option>
                  ${NBA_TEAMS.map(
      (team) => `
                    <option value="${team.code}" ${store.selectedTeam === team.code ? "selected" : ""}>
                      ${team.name} (${team.code})
                    </option>
                  `
    ).join("")}
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
                  <option value="all" ${store.selectedTag === "all" ? "selected" : ""}>All Tags</option>
                  <option value="Trade" ${store.selectedTag === "Trade" ? "selected" : ""}>Trade Wire</option>
                  <option value="Injury" ${store.selectedTag === "Injury" ? "selected" : ""}>Injury Report</option>
                  <option value="Highlight" ${store.selectedTag === "Highlight" ? "selected" : ""}>Highlight & Recap</option>
                  <option value="Analysis" ${store.selectedTag === "Analysis" ? "selected" : ""}>Deep Analysis</option>
                  <option value="Discussion" ${store.selectedTag === "Discussion" ? "selected" : ""}>Fan Discussion</option>
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

          ${store.selectedConference !== "all" ? `<span class="cds--tag cds--tag--blue cds--tag--filter" data-remove-filter="conf">${store.selectedConference} Conf ${icons.close}</span>` : ""}
          ${store.selectedTeam !== "all" ? `<span class="cds--tag cds--tag--purple cds--tag--filter" data-remove-filter="team">Team: ${store.selectedTeam} ${icons.close}</span>` : ""}
          ${store.selectedTag !== "all" ? `<span class="cds--tag cds--tag--teal cds--tag--filter" data-remove-filter="tag">Tag: ${store.selectedTag} ${icons.close}</span>` : ""}
          ${store.searchQuery ? `<span class="cds--tag cds--tag--warm-gray cds--tag--filter" data-remove-filter="search">"${store.searchQuery}" ${icons.close}</span>` : ""}

          ${hasActiveFilters ? `<button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-reset-all-filters" style="margin-left: auto;">Reset Filters</button>` : ""}
        </div>
      </div>
    </div>
  `;
    const searchInput = container.querySelector("#news-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        store.setSearchQuery(e.target.value);
      });
    }
    const clearSearchBtn = container.querySelector("#btn-clear-search");
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", () => {
        store.setSearchQuery("");
      });
    }
    const confSelect = container.querySelector("#select-conference");
    if (confSelect) {
      confSelect.addEventListener("change", (e) => {
        store.setConference(e.target.value);
      });
    }
    const teamSelect = container.querySelector("#select-team");
    if (teamSelect) {
      teamSelect.addEventListener("change", (e) => {
        store.setTeam(e.target.value);
      });
    }
    const tagSelect = container.querySelector("#select-tag");
    if (tagSelect) {
      tagSelect.addEventListener("change", (e) => {
        store.setTag(e.target.value);
      });
    }
    const resetBtn = container.querySelector("#btn-reset-all-filters");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        store.resetFilters();
      });
    }
    container.querySelectorAll("[data-remove-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        const type = chip.getAttribute("data-remove-filter");
        if (type === "conf") store.setConference("all");
        if (type === "team") store.setTeam("all");
        if (type === "tag") store.setTag("all");
        if (type === "search") store.setSearchQuery("");
      });
    });
  }

  // js/components/feed.js
  function renderFeed(container) {
    const posts = store.getFilteredPosts();
    const alert2 = store.breakingAlert;
    container.innerHTML = `
    <!-- Breaking Alert Inline Notification (Carbon Inline Notification) -->
    ${alert2.active ? `
      <div class="cds--inline-notification cds--inline-notification--warning" role="alert" style="margin-bottom: 1.5rem; width: 100%;">
        <div class="cds--inline-notification__details">
          ${icons.warning}
          <div class="cds--inline-notification__text-wrapper">
            <p class="cds--inline-notification__title">${alert2.title}:</p>
            <p class="cds--inline-notification__subtitle">${alert2.subtitle}</p>
          </div>
        </div>
        <button class="cds--inline-notification__close-button" type="button" aria-label="Dismiss notification" id="btn-dismiss-alert">
          ${icons.close}
        </button>
      </div>
    ` : ""}

    <!-- Content Switcher Tabs -->
    <div class="cds--content-switcher" role="tablist" aria-label="News Feeds" style="margin-bottom: 1.25rem;">
      <button class="cds--content-switcher-btn ${store.activeTab === "all" ? "cds--content-switcher--selected" : ""}" data-tab="all" role="tab">
        <span class="cds--content-switcher__label">All Updates</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === "trades" ? "cds--content-switcher--selected" : ""}" data-tab="trades" role="tab">
        <span class="cds--content-switcher__label">Trade Wire</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === "recaps" ? "cds--content-switcher--selected" : ""}" data-tab="recaps" role="tab">
        <span class="cds--content-switcher__label">Game Recaps</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === "injuries" ? "cds--content-switcher--selected" : ""}" data-tab="injuries" role="tab">
        <span class="cds--content-switcher__label">Injury Reports</span>
      </button>
      <button class="cds--content-switcher-btn ${store.activeTab === "community" ? "cds--content-switcher--selected" : ""}" data-tab="community" role="tab">
        <span class="cds--content-switcher__label">Community</span>
      </button>
    </div>

    <!-- Posts Stream -->
    <div class="posts-stream" style="display: flex; flex-direction: column; gap: 1rem;">
      ${posts.length === 0 ? `
        <div class="cds--tile" style="text-align: center; padding: 3rem 1rem;">
          <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">No updates found</h3>
          <p style="color: var(--cds-text-secondary, #525252); margin-bottom: 1rem;">Try clearing your search query or adjusting your team and category filters.</p>
          <button class="cds--btn cds--btn--secondary" id="btn-empty-reset">Reset All Filters</button>
        </div>
      ` : posts.map((post) => {
      return `
          <article class="cds--tile ${post.pinned ? "cds--tile--light" : ""}" id="${post.id}" style="position: relative; border-left: 4px solid ${post.urgency === "high" ? "#da1e28" : post.urgency === "medium" ? "#f1c21b" : "#0f62fe"};">
            <!-- Header Row -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                <span class="cds--tag cds--tag--${post.tagColor || "blue"} cds--tag--sm">${post.tag}</span>
                <span class="cds--tag cds--tag--outline cds--tag--sm">${post.team} (${post.conference})</span>
                ${post.pinned ? `<span class="cds--tag cds--tag--red cds--tag--sm">PINNED</span>` : ""}
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
            ${post.expanded ? `
              <div class="post-expanded-content" style="padding: 1rem; background: var(--cds-layer-01, #f4f4f4); border-left: 2px solid var(--cds-border-subtle, #e0e0e0); margin-bottom: 1rem; font-size: 0.875rem; line-height: 1.6;">
                <p style="margin-bottom: 1rem;">${post.content}</p>
                
                <!-- Comments Section -->
                <div class="post-comments-container" style="border-top: 1px solid var(--cds-border-subtle, #e0e0e0); padding-top: 0.75rem;">
                  <h4 style="font-size: 0.8125rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase;">
                    Community Discussion (${post.comments.length})
                  </h4>
                  ${post.comments.length === 0 ? `<p style="font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f); margin-bottom: 0.75rem;">No replies yet. Start the conversation!</p>` : post.comments.map(
        (c) => `
                        <div style="padding: 0.5rem; background: var(--cds-background, #ffffff); border-radius: 2px; margin-bottom: 0.5rem; font-size: 0.8125rem;">
                          <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                            <strong>${c.author}</strong>
                            <span style="font-size: 0.75rem; color: var(--cds-text-helper, #6f6f6f);">${c.time}</span>
                          </div>
                          <p>${c.text}</p>
                        </div>
                      `
      ).join("")}

                  <!-- Add Comment Form -->
                  <div class="add-comment-box" style="display: flex; gap: 0.5rem; margin-top: 0.75rem;">
                    <input type="text" class="cds--text-input cds--text-input--sm" id="comment-input-${post.id}" placeholder="Write a comment..." style="flex: 1;">
                    <button class="cds--btn cds--btn--secondary cds--btn--sm btn-submit-comment" data-post-id="${post.id}">Reply</button>
                  </div>
                </div>
              </div>
            ` : ""}

            <!-- Card Actions Toolbar -->
            <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--cds-border-subtle, #e0e0e0); padding-top: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button class="cds--btn cds--btn--ghost cds--btn--sm btn-like-post ${post.userLiked ? "cds--btn--field" : ""}" data-post-id="${post.id}" title="Like update">
                  ${icons.thumbsUp}&nbsp;<span>${post.likes}</span>
                </button>
                <button class="cds--btn cds--btn--ghost cds--btn--sm btn-toggle-expand" data-post-id="${post.id}">
                  ${icons.chat}&nbsp;<span>${post.commentsCount} Comments</span>
                </button>
              </div>

              <div>
                <button class="cds--btn cds--btn--tertiary cds--btn--sm btn-toggle-expand" data-post-id="${post.id}">
                  ${post.expanded ? "Hide Details" : "Read Full Analysis"}
                </button>
              </div>
            </div>
          </article>
        `;
    }).join("")}
    </div>
  `;
    const dismissBtn = container.querySelector("#btn-dismiss-alert");
    if (dismissBtn) {
      dismissBtn.addEventListener("click", () => {
        store.dismissAlert();
      });
    }
    container.querySelectorAll(".cds--content-switcher-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        store.setActiveTab(tab);
      });
    });
    const emptyResetBtn = container.querySelector("#btn-empty-reset");
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener("click", () => {
        store.resetFilters();
      });
    }
    container.querySelectorAll(".btn-like-post").forEach((btn) => {
      btn.addEventListener("click", () => {
        const postId = btn.getAttribute("data-post-id");
        store.toggleLike(postId);
      });
    });
    container.querySelectorAll(".btn-toggle-expand").forEach((btn) => {
      btn.addEventListener("click", () => {
        const postId = btn.getAttribute("data-post-id");
        store.toggleExpand(postId);
      });
    });
    container.querySelectorAll(".btn-submit-comment").forEach((btn) => {
      btn.addEventListener("click", () => {
        const postId = btn.getAttribute("data-post-id");
        const input = container.querySelector(`#comment-input-${postId}`);
        if (input && input.value.trim()) {
          store.addComment(postId, "Lavi Landman", input.value.trim());
        }
      });
    });
  }

  // js/components/table.js
  function renderTable(container) {
    const { items, total, totalPages, currentPage, pageSize } = store.getPaginatedStandings();
    const sortField = store.tableSortField;
    const sortDir = store.tableSortDirection;
    const renderSortHeader = (label, field) => {
      const isSorted = sortField === field;
      return `
      <th scope="col">
        <button class="cds--table-sort ${isSorted ? "cds--table-sort--active" : ""}" data-sort-field="${field}">
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
              ${renderSortHeader("Team", "team")}
              ${renderSortHeader("Conf", "conf")}
              ${renderSortHeader("W", "w")}
              ${renderSortHeader("L", "l")}
              ${renderSortHeader("Win %", "pct")}
              ${renderSortHeader("Streak", "streak")}
              ${renderSortHeader("L10", "l10")}
              ${renderSortHeader("Point Diff", "diff")}
              ${renderSortHeader("Status", "status")}
            </tr>
          </thead>
          <tbody>
            ${items.length === 0 ? `
              <tr>
                <td colspan="9" style="text-align: center; padding: 2rem;">No matching standings data found.</td>
              </tr>
            ` : items.map(
      (row) => `
              <tr>
                <td><strong>${row.team}</strong></td>
                <td><span class="cds--tag cds--tag--sm ${row.conf === "East" ? "cds--tag--blue" : "cds--tag--purple"}">${row.conf}</span></td>
                <td>${row.w}</td>
                <td>${row.l}</td>
                <td><strong>${row.pct}</strong></td>
                <td>
                  <span class="cds--tag cds--tag--sm ${row.streak.startsWith("W") ? "cds--tag--green" : "cds--tag--red"}">${row.streak}</span>
                </td>
                <td>${row.l10}</td>
                <td style="color: ${row.diff.startsWith("+") ? "#24a148" : "#da1e28"}; font-weight: 600;">${row.diff}</td>
                <td>
                  <span class="cds--tag cds--tag--sm ${row.status === "Healthy" ? "cds--tag--green" : row.status === "Day-to-Day" ? "cds--tag--yellow" : "cds--tag--red"}">${row.status}</span>
                </td>
              </tr>
            `
    ).join("")}
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
              <option value="5" ${pageSize === 5 ? "selected" : ""}>5</option>
              <option value="10" ${pageSize === 10 ? "selected" : ""}>10</option>
            </select>
          </div>
        </div>

        <div class="cds--pagination__right" style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.8125rem;">Page ${currentPage} of ${totalPages}</span>
          <button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-page-prev" ${currentPage <= 1 ? "disabled" : ""}>
            Previous
          </button>
          <button class="cds--btn cds--btn--ghost cds--btn--sm" id="btn-page-next" ${currentPage >= totalPages ? "disabled" : ""}>
            Next
          </button>
        </div>
      </div>
    </div>
  `;
    container.querySelectorAll("[data-sort-field]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const field = btn.getAttribute("data-sort-field");
        store.setTableSort(field);
      });
    });
    const searchInput = container.querySelector("#table-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        store.setTableSearch(e.target.value);
      });
    }
    const pageSizeSelect = container.querySelector("#select-page-size");
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener("change", (e) => {
        store.setTablePageSize(e.target.value);
      });
    }
    const prevBtn = container.querySelector("#btn-page-prev");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          store.setTablePage(currentPage - 1);
        }
      });
    }
    const nextBtn = container.querySelector("#btn-page-next");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
          store.setTablePage(currentPage + 1);
        }
      });
    }
    const exportBtn = container.querySelector("#btn-export-csv");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        alert("Standings export simulated: CSV generated for " + total + " records.");
      });
    }
    const refreshBtn = container.querySelector("#btn-refresh-standings");
    if (refreshBtn) {
      refreshBtn.addEventListener("click", () => {
        store.notify();
      });
    }
  }

  // js/components/statsWidget.js
  function renderWidgets(container) {
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
    container.querySelectorAll(".cds--accordion__heading").forEach((heading) => {
      heading.addEventListener("click", () => {
        const item = heading.closest(".cds--accordion__item");
        const content = item.querySelector(".cds--accordion__content");
        const isExpanded = heading.getAttribute("aria-expanded") === "true";
        heading.setAttribute("aria-expanded", !isExpanded);
        if (!isExpanded) {
          content.style.display = "block";
          item.classList.add("cds--accordion__item--active");
        } else {
          content.style.display = "none";
          item.classList.remove("cds--accordion__item--active");
        }
      });
    });
  }

  // js/components/postModal.js
  function renderPostModal(container) {
    if (!store.isPostModalOpen) {
      container.innerHTML = "";
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
    ).join("")}
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
    const closeModal = () => store.closePostModal();
    const closeBtn = container.querySelector("#btn-close-modal");
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    const cancelBtn = container.querySelector("#btn-cancel-modal");
    if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
    const submitBtn = container.querySelector("#btn-submit-post");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const title = container.querySelector("#post-input-title").value.trim();
        const summary = container.querySelector("#post-input-summary").value.trim();
        const content = container.querySelector("#post-input-content").value.trim();
        const category = container.querySelector("#post-select-category").value;
        const teamCode = container.querySelector("#post-select-team").value;
        const tag = container.querySelector("#post-select-tag").value;
        const urgency = container.querySelector("#post-select-urgency").value;
        const author = container.querySelector("#post-input-author").value.trim() || "Anonymous Insider";
        const role = container.querySelector("#post-input-role").value.trim() || "Contributor";
        if (!title || !summary) {
          alert("Please fill out both the Title and the Summary fields.");
          return;
        }
        const teamObj = NBA_TEAMS.find((t) => t.code === teamCode) || { conf: "East" };
        const tagColors = {
          Trade: "blue",
          Injury: "red",
          Highlight: "green",
          Analysis: "purple",
          Discussion: "teal"
        };
        store.addPost({
          type: category.toLowerCase().split(" ")[0],
          category,
          tag,
          tagColor: tagColors[tag] || "blue",
          urgency,
          title,
          team: teamCode,
          conference: teamObj.conf,
          author,
          role,
          summary,
          content: content || summary
        });
        store.closePostModal();
      });
    }
  }

  // js/components/notifications.js
  function renderToast(container) {
    const toast = store.activeToast;
    if (!toast) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = `
    <div class="cds--toast-notification cds--toast-notification--${toast.kind || "success"}" role="status"
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
    const closeBtn = container.querySelector("#btn-close-toast");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        store.dismissToast();
      });
    }
    clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      store.dismissToast();
    }, 5e3);
  }

  // js/app.js
  function renderApp() {
    const headerContainer = document.getElementById("header-container");
    const sideNavContainer = document.getElementById("side-nav-container");
    const filtersContainer = document.getElementById("filters-container");
    const viewContainer = document.getElementById("view-container");
    const modalContainer = document.getElementById("modal-container");
    const toastContainer = document.getElementById("toast-container");
    renderHeader(headerContainer);
    renderSideNav(sideNavContainer);
    renderFilters(filtersContainer);
    if (store.activeTab === "standings") {
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
      renderTable(document.getElementById("full-table-target"));
      renderWidgets(document.getElementById("secondary-widgets-target"));
    } else {
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
      renderFeed(document.getElementById("feed-target"));
      renderTable(document.getElementById("sidebar-table-target"));
      renderWidgets(document.getElementById("sidebar-widgets-target"));
    }
    renderPostModal(modalContainer);
    renderToast(toastContainer);
  }
  function init() {
    store.subscribe(() => {
      renderApp();
    });
    renderApp();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
