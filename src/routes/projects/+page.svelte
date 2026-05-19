<script lang="ts">
  import Icon from "@iconify/svelte";

  type Project = {
    title: string;
    date: string;
    role?: string;
    description: string;
    bullets: string[];
    tags: string[];
    category: 'cyber' | 'softdev' | 'both';
    github: string | null;
    demo: string | null;
    demoNote?: string;
    publication?: string;
    images: string[];
  };

  const projects: Project[] = [
    {
      title: 'Linux Infrastructure & SIEM Homelab',
      date: 'March 2026 – Present',
      description: 'A remote-accessible Ubuntu Linux homelab built for hands-on defensive security, containerized services, and real-time threat detection.',
      bullets: [
        'Architected a remote-accessible Ubuntu Linux environment utilizing Docker for containerized hosting, configuring a BIND9 DNS server and Nginx reverse proxy for secure internal routing.',
        'Hardened infrastructure access via Tailscale (WireGuard VPN) for remote SSH management, and deployed a Wazuh SIEM container to configure custom detection rules and analyze host telemetry.',
      ],
      tags: ['Ubuntu Server', 'Docker', 'Nginx', 'BIND9', 'Tailscale', 'Wazuh', 'SIEM'],
      category: 'cyber',
      github: null,
      demo: null,
      images: [
        'screenshots/homelab/homelab_0.jpeg',
      ],
    },
    {
      title: 'NoEsc',
      date: 'Feb 2026 – May 2026',
      description: 'A hybrid C++/Python Host Intrusion Detection System analyzing 90,000+ live kernel events in real-time with a 100% True Positive Rate.',
      bullets: [
        'Engineered a high-performance hybrid C++/Python daemon utilizing Unix Domain Sockets and Linux auditd to process 90,000+ live kernel events in real-time.',
        'Trained an SVM anomaly detection model (F1-score: 0.998) and engineered a custom process-aware whitelist that slashed false positive alert noise by 74%.',
        'Implemented rigorous system-level programming techniques in C++ to minimize CPU overhead while maintaining a 100% True Positive Rate for event processing.',
      ],
      tags: ['C++', 'Python', 'Scikit-learn', 'Linux auditd', 'Unix Domain Sockets', 'Bash', 'SVM'],
      category: 'both',
      github: 'https://github.com/klenndacoder69/NoEsc',
      demo: null,
      images: [],
    },
    {
      title: 'Predictive Analysis of Economic Vulnerability',
      date: 'Nov 2024 – Dec 2024',
      description: 'An end-to-end ML pipeline scraping 3,500+ news articles to forecast 30-day economic vulnerability trends, with a published research paper.',
      bullets: [
        'Engineered an end-to-end ML pipeline, scraping a 2-year dataset of 3,500+ news articles and achieving 97.3% sector classification accuracy using Multinomial Naive Bayes.',
        'Fine-tuned a BERT transformer (73.8% sentiment accuracy) and architected a Bidirectional LSTM neural network to forecast 30-day economic vulnerability trends.',
        'Co-authored and published the research methodology and predictive time-series findings on SSRN.',
      ],
      tags: ['Python', 'Scikit-learn', 'TensorFlow', 'BERT', 'Pandas', 'BeautifulSoup', 'LSTM'],
      category: 'softdev',
      github: 'https://github.com/klenndacoder69/PAEVUND',
      demo: null,
      publication: 'https://dx.doi.org/10.2139/ssrn.5063087',
      images: [
        '/screenshots/paevund/paevund_0.png'
      ],
    },
    {
      title: 'AEGIS',
      date: 'Feb 2025 – May 2025',
      role: 'Project Manager & Backend Lead',
      description: 'A comprehensive alumni portal built by a 20-member team with secure RESTful APIs, Role-Based Access Control, and full sprint management.',
      bullets: [
        'Spearheaded a 20-member engineering team to build a comprehensive alumni portal, managing project architecture, database design, and sprint workflows.',
        'Engineered secure RESTful APIs with Role-Based Access Control (RBAC) to handle complex backend workflows, including job applications and analytics reporting.',
      ],
      tags: ['Next.js', 'MongoDB', 'Vercel', 'RESTful API', 'RBAC'],
      category: 'softdev',
      github: 'https://github.com/CMSC-128-A1-2L/AEGIS',
      demo: 'https://cmsc-128-a12l.vercel.app/',
      demoNote: 'DB no longer active. Certain functionalities wont work as expected.',
      images: [
        '/screenshots/aegis/aegis (1).jpg',
        '/screenshots/aegis/aegis (2).jpg',
        '/screenshots/aegis/aegis (3).jpg',
        '/screenshots/aegis/aegis (4).jpg',
        '/screenshots/aegis/aegis (5).jpg',
        '/screenshots/aegis/aegis (6).jpg',
        '/screenshots/aegis/aegis (7).jpg',
        '/screenshots/aegis/aegis (8).jpg',
        '/screenshots/aegis/aegis (9).jpg',
        '/screenshots/aegis/aegis (10).jpg',
        '/screenshots/aegis/aegis (11).jpg',
        '/screenshots/aegis/aegis (12).jpg',
        '/screenshots/aegis/aegis (13).jpg',
        '/screenshots/aegis/aegis (14).jpg',
        '/screenshots/aegis/aegis (15).jpg',
        '/screenshots/aegis/aegis (16).jpg',
        '/screenshots/aegis/aegis (17).jpg',
        '/screenshots/aegis/aegis (18).jpg',
        '/screenshots/aegis/aegis (19).jpg',
      ],
    },
    {
      title: 'YSYNC',
      date: 'Nov 2024 – Jan 2025',
      role: 'Project Manager & Backend Lead',
      description: 'A university org portal with real-time WebSocket chat, RBAC-secured APIs, and a custom recommendation algorithm for 80+ trainees.',
      bullets: [
        'Directed backend development and schema design for a university organization portal, successfully streamlining the trainee application lifecycle.',
        'Built a secure backend featuring real-time WebSocket chat pipelines (Socket.io), RBAC-secured REST APIs, and a custom recommendation algorithm.',
      ],
      tags: ['Supabase', 'Express.js', 'React', 'Node.js', 'Socket.io', 'WebSocket'],
      category: 'softdev',
      github: null,
      demo: null,
      images: [
        'screenshots/ysync/ysync_0.png',
        'screenshots/ysync/ysync_1.png',
      ],
    },
  ];

  const categoryMeta = {
    cyber:   { label: 'Cybersecurity', icon: 'tabler:shield-lock',     color: '#00c864' },
    softdev: { label: 'Software Dev',  icon: 'tabler:code',             color: '#6496ff' },
    both:    { label: 'Cyber & Dev',   icon: 'tabler:layers-intersect', color: '#c864ff' },
  };

  let selected = $state<Project | null>(null);
  let modalImgIdx = $state(0);

  // Per-card image indices
  let cardImgIdx = $state<number[]>(projects.map(() => 0));

  function cardNext(e: MouseEvent, i: number) {
    e.stopPropagation();
    const len = projects[i].images.length;
    if (len > 1) cardImgIdx[i] = (cardImgIdx[i] + 1) % len;
  }

  function cardPrev(e: MouseEvent, i: number) {
    e.stopPropagation();
    const len = projects[i].images.length;
    if (len > 1) cardImgIdx[i] = (cardImgIdx[i] - 1 + len) % len;
  }

  function open(p: Project) {
    selected = p;
    modalImgIdx = 0;
  }
  function close() { selected = null; }

  function modalNext() {
    if (!selected) return;
    modalImgIdx = (modalImgIdx + 1) % selected.images.length;
  }

  function modalPrev() {
    if (!selected) return;
    modalImgIdx = (modalImgIdx - 1 + selected.images.length) % selected.images.length;
  }

  function handleBackdropKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') modalNext();
    if (e.key === 'ArrowLeft') modalPrev();
  }
</script>

<svelte:head>
  <title>Projects — Klenn Jakek Borja</title>
</svelte:head>

<svelte:window onkeydown={handleBackdropKey} />

<div class="page">
  <div>
    <h1>Projects</h1>
    <p class="lead" style="margin-top:0.75em;">
      Things I've built. Click any card for more details. More on
      <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener">GitHub</a>.
    </p>
  </div>

  <!-- Card grid -->
  <div class="card-grid stagger" style="margin-top: 2.5rem;">
    {#each projects as project, i}
      {@const meta = categoryMeta[project.category]}
      <button
        class="proj-card"
        style="--accent: {meta.color};"
        onclick={() => open(project)}
        id="proj-{project.title.replace(/\s+/g, '-').toLowerCase()}"
        aria-label="View details for {project.title}"
      >
        <!-- Screenshot / placeholder -->
        <div class="proj-thumb">
          {#if project.images.length > 0}
            <img src={project.images[cardImgIdx[i]]} alt="{project.title} screenshot {cardImgIdx[i] + 1}" />
            <!-- Nav arrows (only when multiple images) -->
            {#if project.images.length > 1}
              <button class="thumb-nav thumb-prev" onclick={(e) => cardPrev(e, i)} aria-label="Previous image">
                <Icon icon="tabler:chevron-left" width="14" height="14" />
              </button>
              <button class="thumb-nav thumb-next" onclick={(e) => cardNext(e, i)} aria-label="Next image">
                <Icon icon="tabler:chevron-right" width="14" height="14" />
              </button>
              <!-- Dots -->
              <div class="thumb-dots">
                {#each project.images as _, di}
                  <span class="thumb-dot" class:active={di === cardImgIdx[i]}></span>
                {/each}
              </div>
            {/if}
          {:else}
            <div class="thumb-empty">
              <Icon icon={meta.icon} width="32" height="32" />
            </div>
          {/if}

          <!-- Category pill overlaid on image -->
          <span class="cat-pill" style="color:{meta.color}; background:{meta.color}18; border-color:{meta.color}30;">
            <Icon icon={meta.icon} width="11" height="11" />
            {meta.label}
          </span>
        </div>

        <!-- Card body -->
        <div class="proj-body">
          <div class="proj-title">{project.title}</div>
          <div class="proj-date">
            <Icon icon="tabler:calendar-event" width="11" height="11" />
            {project.date}
          </div>
          <p class="proj-blurb">{project.description}</p>

          <div class="proj-footer">
            <div class="proj-tags">
              {#each project.tags.slice(0, 3) as tag}
                <span class="tag">{tag}</span>
              {/each}
              {#if project.tags.length > 3}
                <span class="tag tag-more">+{project.tags.length - 3}</span>
              {/if}
            </div>
            <span class="proj-cta">
              Details <Icon icon="tabler:arrow-right" width="13" height="13" />
            </span>
          </div>
        </div>

        <!-- Hover accent bar -->
        <div class="proj-bar"></div>
      </button>
    {/each}
  </div>
</div>

<!-- ── Modal ── -->
{#if selected}
  {@const meta = categoryMeta[selected.category]}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-backdrop" onclick={close} role="dialog" aria-modal="true" aria-label="{selected.title} details">
    <div class="modal" onclick={(e) => e.stopPropagation()} style="--accent: {meta.color};">

      <!-- Modal header -->
      <div class="modal-header" style="border-color: {meta.color}30;">
        <div class="modal-header-left">
          <span class="cat-pill" style="color:{meta.color}; background:{meta.color}18; border-color:{meta.color}30;">
            <Icon icon={meta.icon} width="12" height="12" />
            {meta.label}
          </span>
          <span class="modal-date">
            <Icon icon="tabler:calendar-event" width="12" height="12" />
            {selected.date}
          </span>
        </div>
        <button class="modal-close" onclick={close} aria-label="Close">
          <Icon icon="tabler:x" width="20" height="20" />
        </button>
      </div>

      <!-- Screenshot carousel -->
      <div class="modal-image">
        {#if selected.images.length > 0}
          <img src={selected.images[modalImgIdx]} alt="{selected.title} screenshot {modalImgIdx + 1}" />
          {#if selected.images.length > 1}
            <button class="modal-nav modal-prev" onclick={modalPrev} aria-label="Previous screenshot">
              <Icon icon="tabler:chevron-left" width="18" height="18" />
            </button>
            <button class="modal-nav modal-next" onclick={modalNext} aria-label="Next screenshot">
              <Icon icon="tabler:chevron-right" width="18" height="18" />
            </button>
            <div class="modal-dots">
              {#each selected.images as _, di}
                <button
                  class="modal-dot"
                  class:active={di === modalImgIdx}
                  onclick={() => (modalImgIdx = di)}
                  aria-label="Go to screenshot {di + 1}"
                ></button>
              {/each}
            </div>
          {/if}
        {:else}
          <div class="modal-img-empty">
            <Icon icon={meta.icon} width="40" height="40" style="color:{meta.color}; opacity:0.3;" />
            <span>Screenshots coming soon</span>
          </div>
        {/if}
      </div>

      <!-- Title + role -->
      <div class="modal-title-block">
        <h2 class="modal-title" style="color: {meta.color};">{selected.title}</h2>
        {#if selected.role}
          <div class="modal-role">
            <Icon icon="tabler:briefcase" width="14" height="14" />
            {selected.role}
          </div>
        {/if}
      </div>

      <!-- Description -->
      <p class="modal-desc">{selected.description}</p>

      <!-- Bullets -->
      <ul class="modal-bullets">
        {#each selected.bullets as bullet}
          <li>
            <span class="mbullet" style="color:{meta.color}">▸</span>
            {bullet}
          </li>
        {/each}
      </ul>

      <!-- Tags -->
      <div class="tags" style="margin-top: 1.25rem;">
        {#each selected.tags as tag}<span class="tag">{tag}</span>{/each}
      </div>

      <!-- Actions -->
      <div class="modal-actions">
        {#if selected.github}
          <a href={selected.github} target="_blank" rel="noopener" class="button">
            <Icon icon="tabler:brand-github" width="16" height="16" />
            View Code
          </a>
        {:else}
          <span class="private-notice">
            <Icon icon="tabler:lock" width="14" height="14" />
            Repository private
          </span>
        {/if}
        {#if selected.demo}
          <div class="demo-wrap">
            <a href={selected.demo} target="_blank" rel="noopener" class="button">
              <Icon icon="tabler:external-link" width="16" height="16" />
              Live Demo
            </a>
            {#if selected.demoNote}
              <span class="demo-note">
                <Icon icon="tabler:alert-triangle" width="13" height="13" />
                {selected.demoNote}
              </span>
            {/if}
          </div>
        {/if}
        {#if selected.publication}
          <a href={selected.publication} target="_blank" rel="noopener" class="button">
            <Icon icon="tabler:file-text" width="16" height="16" />
            Read Paper
          </a>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  /* ════════════════════════════════
     CARD GRID
  ════════════════════════════════ */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    .card-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media screen and (max-width: 600px) {
    .card-grid { grid-template-columns: 1fr; }
  }

  /* ── Individual card ── */
  .proj-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--bg-surface);
    border: 1px solid transparent;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    color: var(--text-main);
    transition:
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 220ms ease,
      border-color 220ms ease;
  }

  .proj-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: 0 12px 36px -8px color-mix(in srgb, var(--accent) 30%, transparent);
  }

  .proj-card:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  /* ── Thumbnail ── */
  .proj-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: color-mix(in srgb, var(--accent) 8%, var(--bg-surface));
    overflow: hidden;
    flex-shrink: 0;
  }

  .proj-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease;
  }

  .proj-card:hover .proj-thumb img {
    transform: scale(1.04);
  }

  .thumb-empty {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    opacity: 0.25;
  }

  /* ── Category pill (on image) ── */
  .cat-pill {
    position: absolute;
    bottom: 0.6rem;
    left: 0.6rem;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    font-size: 0.67rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.25em 0.65em;
    border-radius: 9999em;
    border: 1px solid;
    backdrop-filter: blur(6px);
  }

  /* ── Card thumbnail nav ── */
  .thumb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(0,0,0,0.55);
    backdrop-filter: blur(4px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: opacity 150ms ease, background 150ms ease;
    z-index: 5;
    padding: 0;
  }

  .proj-thumb:hover .thumb-nav { opacity: 1; }

  .thumb-prev { left: 0.4rem; }
  .thumb-next { right: 0.4rem; }

  .thumb-nav:hover { background: rgba(0,0,0,0.8); }

  .thumb-dots {
    position: absolute;
    bottom: 0.45rem;
    right: 0.6rem;
    display: flex;
    gap: 0.3rem;
    z-index: 5;
  }

  .thumb-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    transition: background 150ms ease, transform 150ms ease;
  }

  .thumb-dot.active {
    background: #fff;
    transform: scale(1.3);
  }


  /* ── Card body ── */
  .proj-body {
    padding: 1rem 1.1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex: 1;
  }

  .proj-title {
    font-size: 0.98rem;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .proj-date {
    display: flex;
    align-items: center;
    gap: 0.3em;
    font-size: 0.72rem;
    opacity: 0.4;
  }

  .proj-blurb {
    margin: 0.2rem 0 0;
    font-size: 0.82rem;
    line-height: 1.6;
    opacity: 0.7;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .proj-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid color-mix(in srgb, var(--text-main) 10%, transparent);
  }

  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
  }

  .proj-tags .tag {
    font-size: 0.68rem;
    padding: 0.1em 0.55em;
  }

  .tag-more {
    opacity: 0.5;
  }

  .proj-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--accent);
    opacity: 0.7;
    white-space: nowrap;
    flex-shrink: 0;
    transition: opacity 200ms ease, gap 200ms ease;
  }

  .proj-card:hover .proj-cta {
    opacity: 1;
    gap: 0.45em;
  }

  /* ── Bottom accent bar ── */
  .proj-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .proj-card:hover .proj-bar {
    transform: scaleX(1);
  }

  /* ════════════════════════════════
     MODAL
  ════════════════════════════════ */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: backdrop-in 200ms ease forwards;
  }

  @keyframes backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .modal {
    background: var(--bg-canvas);
    border: 1px solid var(--accent);
    border-radius: 20px;
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow-y: auto;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: modal-in 280ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
    box-shadow: 0 24px 64px -12px color-mix(in srgb, var(--accent) 25%, rgba(0,0,0,0.5));
  }

  @keyframes modal-in {
    from {
      opacity: 0;
      transform: translateY(24px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  /* ── Modal header bar ── */
  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid;
    gap: 1rem;
    position: sticky;
    top: 0;
    background: var(--bg-canvas);
    z-index: 1;
    border-radius: 20px 20px 0 0;
  }

  .modal-header-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* Reuse .cat-pill but not positioned absolute here */
  .modal-header .cat-pill {
    position: static;
  }

  .modal-date {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    font-size: 0.75rem;
    opacity: 0.45;
  }

  .modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-surface);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: var(--text-main);
    flex-shrink: 0;
    transition: background 200ms ease, transform 200ms ease;
  }

  .modal-close:hover {
    background: var(--bg-surface-hover);
    transform: rotate(90deg);
  }

  /* ── Modal image ── */
  .modal-image {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: color-mix(in srgb, var(--accent) 8%, var(--bg-surface));
    overflow: hidden;
    flex-shrink: 0;
  }

  .modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-img-empty {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.4;
  }

  /* Modal carousel nav */
  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(6px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 150ms ease;
    z-index: 5;
    padding: 0;
  }

  .modal-nav:hover { background: rgba(0,0,0,0.85); }
  .modal-prev { left: 0.75rem; }
  .modal-next { right: 0.75rem; }

  .modal-dots {
    position: absolute;
    bottom: 0.7rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.4rem;
    z-index: 5;
  }

  .modal-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: none;
    background: rgba(255,255,255,0.35);
    cursor: pointer;
    padding: 0;
    transition: background 150ms ease, transform 150ms ease;
  }

  .modal-dot.active {
    background: #fff;
    transform: scale(1.35);
  }



  /* ── Modal body ── */
  .modal-title-block {
    padding: 1.25rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .modal-title {
    font-size: 1.35rem;
    font-weight: 900;
    margin: 0;
    line-height: 1.2;
    border: none;
    padding: 0;
    text-transform: none;
    letter-spacing: -0.02em;
  }

  .modal-role {
    display: flex;
    align-items: center;
    gap: 0.4em;
    font-size: 0.82rem;
    opacity: 0.55;
    font-weight: 600;
  }

  .modal-desc {
    margin: 0;
    padding: 0.75rem 1.5rem 0;
    font-size: 0.92rem;
    line-height: 1.75;
    opacity: 0.8;
  }

  .modal-bullets {
    margin: 0;
    padding: 0.75rem 1.5rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .modal-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 0.55em;
    font-size: 0.875rem;
    line-height: 1.7;
    opacity: 0.8;
  }

  .mbullet {
    flex-shrink: 0;
    margin-top: 0.1em;
    font-size: 0.75em;
  }

  .modal-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 1.25rem 1.5rem 1.5rem;
  }

  .private-notice {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-size: 0.8rem;
    opacity: 0.35;
    font-weight: 600;
    font-style: italic;
  }

  .demo-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    align-items: flex-start;
  }

  .demo-note {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-size: 0.73rem;
    font-weight: 500;
    color: #d97706;
    background: rgba(217, 119, 6, 0.1);
    border: 1px solid rgba(217, 119, 6, 0.25);
    border-radius: 6px;
    padding: 0.25em 0.65em;
    line-height: 1.4;
  }


  /* ── Tags inside modal ── */
  :global(.modal .tags) {
    padding: 0 1.5rem;
  }
</style>
