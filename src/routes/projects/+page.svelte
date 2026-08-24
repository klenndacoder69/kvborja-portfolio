<script lang="ts">
  import Icon from "@iconify/svelte";
  import { base } from "$app/paths";
  import { reveal } from "$lib/anim/reveal";

  type Category = "cyber" | "softdev" | "both";

  type Project = {
    title: string;
    date: string;
    role?: string;
    description: string;
    bullets: string[];
    tags: string[];
    category: Category;
    github: string | null;
    demo: string | null;
    demoNote?: string;
    publication?: string;
    images: string[];
  };

  // Order carries the emphasis: the first card is rendered large and the next
  // two sit immediately beside it. No "featured" labels — position and scale
  // do the signalling.
  const projects: Project[] = [
    {
      title: "Predictive Analysis of Economic Vulnerability",
      date: "Nov 2024 – Dec 2024",
      description:
        "An end-to-end ML pipeline scraping 3,500+ news articles to forecast 30-day economic vulnerability trends, with a published research paper.",
      bullets: [
        "Engineered an end-to-end ML pipeline, scraping a 2-year dataset of 3,500+ news articles and achieving 97.3% sector classification accuracy using Multinomial Naive Bayes.",
        "Fine-tuned a BERT transformer (73.8% sentiment accuracy) and architected a Bidirectional LSTM neural network to forecast 30-day economic vulnerability trends.",
        "Co-authored and published the research methodology and predictive time-series findings on SSRN.",
      ],
      tags: [
        "Python",
        "Scikit-learn",
        "TensorFlow",
        "BERT",
        "Pandas",
        "BeautifulSoup",
        "LSTM",
      ],
      category: "softdev",
      github: "https://github.com/klenndacoder69/PAEVUND",
      demo: null,
      publication: "https://dx.doi.org/10.2139/ssrn.5063087",
      images: ["/screenshots/paevund/paevund_0.png"],
    },
    {
      title: "NoEsc",
      date: "Feb 2026 – May 2026",
      description:
        "A hybrid C++/Python Host Intrusion Detection System analyzing 90,000+ live kernel events in real-time with a 100% True Positive Rate.",
      bullets: [
        "Engineered a high-performance hybrid C++/Python daemon utilizing Unix Domain Sockets and Linux auditd to process 90,000+ live kernel events in real-time.",
        "Trained an SVM anomaly detection model (F1-score: 0.998) and engineered a custom process-aware whitelist that slashed false positive alert noise by 74%.",
        "Implemented rigorous system-level programming techniques in C++ to minimize CPU overhead while maintaining a 100% True Positive Rate for event processing.",
      ],
      tags: [
        "C++",
        "Python",
        "Scikit-learn",
        "Linux auditd",
        "Unix Domain Sockets",
        "Bash",
        "SVM",
      ],
      category: "both",
      github: "https://github.com/klenndacoder69/NoEsc",
      demo: null,
      images: [],
    },
    {
      title: "Catch The Proot",
      date: "2024",
      description:
        "A 2D platformer game created in Java and JavaFX, featuring custom player mechanics and animations.",
      bullets: [
        "Developed a 2D platformer game using Java and the JavaFX framework.",
        "Implemented core platformer mechanics, character animations, and level design.",
      ],
      tags: ["Java", "JavaFX", "Game Development"],
      category: "softdev",
      github: "https://github.com/klenndacoder69/Catch-The-Proot",
      demo: null,
      images: [
        "/screenshots/catchtheproot/ctp_0.png",
        "/screenshots/catchtheproot/ctp_1.gif",
        "/screenshots/catchtheproot/ctp_2.gif",
        "/screenshots/catchtheproot/ctp_3.gif",
      ],
    },
    {
      title: "Pulse",
      date: "March 2026 – Present",
      description:
        "A high-throughput, polyglot telemetry ingestion pipeline (C++/Python) deployed as containerized microservices on a production AWS EC2 instance with a hardened CI/CD workflow.",
      bullets: [
        "Architected a high-throughput, polyglot telemetry ingestion pipeline (C++, Python) and deployed the containerized microservices architecture to a production AWS EC2 instance.",
        "Engineered an environment-agnostic CI/CD pipeline using GitHub Actions, decoupling C++ compilation from the runtime host by publishing multi-stage Docker builds to GHCR, reducing deployment time by over 90%.",
        "Optimized constrained cloud hardware to resolve Out-Of-Memory (OOM) compiler crashes by tuning C++ build flags, expanding live Linux NVMe partitions, and manually provisioning virtual swap space.",
        "Hardened deployment security by integrating Trivy vulnerability scanning into the CI workflow and implementing strict secret management to protect database credentials and internal Docker DNS routing.",
      ],
      tags: [
        "C++",
        "Python",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS EC2",
        "GitHub Actions",
        "Grafana",
        "Trivy",
      ],
      category: "both",
      github: "https://github.com/klenndacoder69/Pulse",
      demo: null,
      images: ["/screenshots/pulse/pulse_0.png"],
    },
    {
      title: "Linux Infrastructure & SIEM Homelab",
      date: "March 2026 – Present",
      description:
        "A remote-accessible Ubuntu Linux homelab built for hands-on defensive security, containerized services, and real-time threat detection.",
      bullets: [
        "Architected a remote-accessible Ubuntu Linux environment utilizing Docker for containerized hosting, configuring a BIND9 DNS server and Nginx reverse proxy for secure internal routing.",
        "Hardened infrastructure access via Tailscale (WireGuard VPN) for remote SSH management, and deployed a Wazuh SIEM container to configure custom detection rules and analyze host telemetry.",
      ],
      tags: [
        "Ubuntu Server",
        "Docker",
        "Nginx",
        "BIND9",
        "Tailscale",
        "Wazuh",
        "SIEM",
      ],
      category: "cyber",
      github: null,
      demo: null,
      images: ["/screenshots/homelab/homelab_0.jpeg"],
    },
    {
      title: "DataFlow",
      date: "May 2026 – Present",
      description:
        "An automated Python ETL workflow to ingest, transform, and merge external API data into a normalized SQL database for performance analytics.",
      bullets: [
        "Engineered an automated Python ETL workflow to ingest, transform, and merge external API data into a normalized SQL database for performance analytics.",
        "Deployed the backend architecture on a Linux environment utilizing Nginx and Gunicorn, implementing rigorous test scripts to ensure data integrity.",
      ],
      tags: ["Python", "Django", "PostgreSQL", "SQL", "Nginx", "Gunicorn"],
      category: "softdev",
      github: null,
      demo: null,
      images: [],
    },
    {
      title: "AEGIS",
      date: "Feb 2025 – May 2025",
      role: "Project Manager & Backend Lead",
      description:
        "A comprehensive alumni portal built by a 20-member team with secure RESTful APIs, Role-Based Access Control, and full sprint management.",
      bullets: [
        "Spearheaded a 20-member engineering team to build a comprehensive alumni portal, managing project architecture, database design, and sprint workflows.",
        "Engineered secure RESTful APIs with Role-Based Access Control (RBAC) to handle complex backend workflows, including job applications and analytics reporting.",
      ],
      tags: ["Next.js", "MongoDB", "Vercel", "RESTful API", "RBAC"],
      category: "softdev",
      github: "https://github.com/CMSC-128-A1-2L/AEGIS",
      demo: "https://cmsc-128-a12l.vercel.app/",
      demoNote:
        "DB no longer active. Certain functionalities wont work as expected.",
      images: [
        "/screenshots/aegis/aegis (1).jpg",
        "/screenshots/aegis/aegis (2).jpg",
        "/screenshots/aegis/aegis (3).jpg",
        "/screenshots/aegis/aegis (4).jpg",
        "/screenshots/aegis/aegis (5).jpg",
        "/screenshots/aegis/aegis (6).jpg",
        "/screenshots/aegis/aegis (7).jpg",
        "/screenshots/aegis/aegis (8).jpg",
        "/screenshots/aegis/aegis (9).jpg",
        "/screenshots/aegis/aegis (10).jpg",
        "/screenshots/aegis/aegis (11).jpg",
        "/screenshots/aegis/aegis (12).jpg",
        "/screenshots/aegis/aegis (13).jpg",
        "/screenshots/aegis/aegis (14).jpg",
        "/screenshots/aegis/aegis (15).jpg",
        "/screenshots/aegis/aegis (16).jpg",
        "/screenshots/aegis/aegis (17).jpg",
        "/screenshots/aegis/aegis (18).jpg",
        "/screenshots/aegis/aegis (19).jpg",
      ],
    },
    {
      title: "YSYNC",
      date: "Nov 2024 – Jan 2025",
      role: "Project Manager & Backend Lead",
      description:
        "A university org portal with real-time WebSocket chat, RBAC-secured APIs, and a custom recommendation algorithm for 80+ trainees.",
      bullets: [
        "Directed backend development and schema design for a university organization portal, successfully streamlining the trainee application lifecycle.",
        "Built a secure backend featuring real-time WebSocket chat pipelines (Socket.io), RBAC-secured REST APIs, and a custom recommendation algorithm.",
      ],
      tags: [
        "Supabase",
        "Express.js",
        "React",
        "Node.js",
        "Socket.io",
        "WebSocket",
      ],
      category: "softdev",
      github: null,
      demo: null,
      images: [
        "/screenshots/ysync/ysync_0.png",
        "/screenshots/ysync/ysync_1.png",
      ],
    },
  ];

  // Accents come from the design tokens rather than a second set of hex
  // literals, so category colours stay correct in both themes.
  const categoryMeta: Record<
    Category,
    { label: string; icon: string; color: string }
  > = {
    cyber: {
      label: "Cybersecurity",
      icon: "tabler:shield-lock",
      color: "var(--cyber-color)",
    },
    softdev: {
      label: "Software Dev",
      icon: "tabler:code",
      color: "var(--softdev-color)",
    },
    both: {
      label: "Cyber & Dev",
      icon: "tabler:layers-intersect",
      color: "var(--both-color)",
    },
  };

  const filters = [
    { key: "all", label: "All" },
    { key: "cyber", label: "Cybersecurity" },
    { key: "softdev", label: "Software Dev" },
    { key: "both", label: "Cyber & Dev" },
  ] as const;

  type FilterKey = (typeof filters)[number]["key"];

  let activeFilter = $state<FilterKey>("all");

  const visible = $derived(
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter),
  );

  function countFor(key: FilterKey): number {
    return key === "all"
      ? projects.length
      : projects.filter((p) => p.category === key).length;
  }

  let selected = $state<Project | null>(null);
  let modalImgIdx = $state(0);

  // Keyed by title, not by index, so filtering can't shuffle carousel state
  // onto the wrong card.
  let cardImgIdx = $state<Record<string, number>>({});

  function imgIdx(p: Project): number {
    return cardImgIdx[p.title] ?? 0;
  }

  function cardStep(e: MouseEvent, p: Project, delta: number) {
    e.stopPropagation();
    const len = p.images.length;
    if (len > 1) cardImgIdx[p.title] = (imgIdx(p) + delta + len) % len;
  }

  function open(p: Project) {
    selected = p;
    modalImgIdx = 0;
  }
  function close() {
    selected = null;
  }

  function modalNext() {
    if (!selected) return;
    modalImgIdx = (modalImgIdx + 1) % selected.images.length;
  }

  function modalPrev() {
    if (!selected) return;
    modalImgIdx =
      (modalImgIdx - 1 + selected.images.length) % selected.images.length;
  }

  function handleBackdropKey(e: KeyboardEvent) {
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") modalNext();
    if (e.key === "ArrowLeft") modalPrev();
  }
</script>

<svelte:head>
  <title>Projects — Klenn Jakek Borja</title>
</svelte:head>

<svelte:window onkeydown={handleBackdropKey} />

<div class="page reveal" {@attach reveal()}>
  <div>
    <h1>Projects</h1>
    <p class="lead" style="margin-top:1em;">
      Things I've built. Click any card for more details. More on
      <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener"
        >GitHub</a
      >.
    </p>
  </div>

  <!-- Filters -->
  <div class="filter-bar" role="group" aria-label="Filter projects by category">
    {#each filters as f}
      <button
        type="button"
        class="filter-pill"
        class:active={activeFilter === f.key}
        style={f.key === "all"
          ? undefined
          : `--accent: ${categoryMeta[f.key].color};`}
        aria-pressed={activeFilter === f.key}
        onclick={() => (activeFilter = f.key)}
      >
        {f.label}
        <span class="filter-count">{countFor(f.key)}</span>
      </button>
    {/each}
  </div>

  <!-- Card grid. Keyed on the filter so the container is recreated and the
       reveal attachment re-runs, re-cascading the new set. -->
  {#key activeFilter}
    <div class="card-grid reveal" {@attach reveal({ step: 45, maxIndex: 5 })}>
      {#each visible as project, i (project.title)}
        {@const meta = categoryMeta[project.category]}
        <button
          class="proj-card"
          class:lead-card={i === 0}
          style="--accent: {meta.color};"
          onclick={() => open(project)}
          id="proj-{project.title.replace(/\s+/g, '-').toLowerCase()}"
          aria-label="View details for {project.title}"
        >
          <!-- Screenshot / placeholder -->
          <div class="proj-thumb">
            {#if project.images.length > 0}
              <img
                src="{base}{project.images[imgIdx(project)]}"
                alt="{project.title} screenshot {imgIdx(project) + 1}"
              />
              {#if project.images.length > 1}
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div
                  class="thumb-nav thumb-prev"
                  onclick={(e) => cardStep(e, project, -1)}
                  role="button"
                  tabindex="-1"
                  aria-label="Previous image"
                >
                  <Icon icon="tabler:chevron-left" width="14" height="14" />
                </div>
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <div
                  class="thumb-nav thumb-next"
                  onclick={(e) => cardStep(e, project, 1)}
                  role="button"
                  tabindex="-1"
                  aria-label="Next image"
                >
                  <Icon icon="tabler:chevron-right" width="14" height="14" />
                </div>
                <div class="thumb-dots">
                  {#each project.images as _, di}
                    <span
                      class="thumb-dot"
                      class:active={di === imgIdx(project)}
                    ></span>
                  {/each}
                </div>
              {/if}
            {:else}
              <!-- Deliberate accent-tinted panel rather than a faint icon, so
                   a screenshot-less project doesn't read as broken. -->
              <div class="thumb-empty">
                <Icon icon={meta.icon} width="30" height="30" />
                <span class="te-label">{meta.label}</span>
              </div>
            {/if}

            <span class="cat-pill">
              <Icon icon={meta.icon} width="11" height="11" />
              {meta.label}
            </span>
          </div>

          <!-- Card body -->
          <div class="proj-body">
            <div class="proj-meta-row">
              <div class="proj-date">
                <Icon icon="tabler:calendar-event" width="11" height="11" />
                {project.date}
              </div>
              {#if project.publication}
                <span class="proj-pub">
                  <Icon icon="tabler:file-text" width="11" height="11" />
                  Published
                </span>
              {/if}
            </div>

            <div class="proj-title">{project.title}</div>
            <p class="proj-blurb">{project.description}</p>

            <div class="proj-footer">
              <div class="proj-tags">
                {#each project.tags.slice(0, i === 0 ? 5 : 3) as tag}
                  <span class="tag">{tag}</span>
                {/each}
                {#if project.tags.length > (i === 0 ? 5 : 3)}
                  <span class="tag tag-more"
                    >+{project.tags.length - (i === 0 ? 5 : 3)}</span
                  >
                {/if}
              </div>
              <span class="proj-cta">
                Details <Icon icon="tabler:arrow-right" width="13" height="13" />
              </span>
            </div>
          </div>

          <div class="proj-bar"></div>
        </button>
      {/each}
    </div>
  {/key}
</div>

<!-- ── Modal ── -->
{#if selected}
  {@const meta = categoryMeta[selected.category]}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal-backdrop"
    onclick={close}
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    aria-label="{selected.title} details"
  >
    <div
      class="modal"
      onclick={(e) => e.stopPropagation()}
      style="--accent: {meta.color};"
    >
      <!-- Modal header -->
      <div class="modal-header">
        <div class="modal-header-left">
          <span class="cat-pill">
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
          <img
            src="{base}{selected.images[modalImgIdx]}"
            alt="{selected.title} screenshot {modalImgIdx + 1}"
          />
          {#if selected.images.length > 1}
            <button
              class="modal-nav modal-prev"
              onclick={modalPrev}
              aria-label="Previous screenshot"
            >
              <Icon icon="tabler:chevron-left" width="18" height="18" />
            </button>
            <button
              class="modal-nav modal-next"
              onclick={modalNext}
              aria-label="Next screenshot"
            >
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
            <Icon icon={meta.icon} width="40" height="40" />
            <span>Screenshots coming soon</span>
          </div>
        {/if}
      </div>

      <!-- Title + role -->
      <div class="modal-title-block">
        <h2 class="modal-title">{selected.title}</h2>
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
            <span class="mbullet">▸</span>
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
          <a
            href={selected.github}
            target="_blank"
            rel="noopener"
            class="button"
          >
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
            <a
              href={selected.demo}
              target="_blank"
              rel="noopener"
              class="button"
            >
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
          <a
            href={selected.publication}
            target="_blank"
            rel="noopener"
            class="button button-primary"
          >
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
     FILTER BAR
  ════════════════════════════════ */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .filter-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    font-family: var(--font-body);
    font-size: var(--fs-xs);
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--text-muted);
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-pill);
    padding: 0.45em 0.95em;
    cursor: pointer;
    transition:
      color 180ms ease,
      background 180ms ease,
      border-color 180ms ease,
      transform 150ms ease,
      box-shadow 200ms ease;
  }

  .filter-pill:hover {
    color: var(--text-main);
    transform: translateY(-1px);
  }

  .filter-pill.active {
    color: var(--accent, var(--green));
    background: color-mix(in srgb, var(--accent, var(--green)) 12%, transparent);
    border-color: color-mix(
      in srgb,
      var(--accent, var(--green)) 40%,
      transparent
    );
    box-shadow: 0 4px 16px
      color-mix(in srgb, var(--accent, var(--green)) 18%, transparent);
  }

  .filter-count {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    opacity: 0.55;
  }

  /* ════════════════════════════════
     CARD GRID
  ════════════════════════════════ */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 1.75rem;
  }

  /* The first card runs wide. Scale is the only "featured" signal — there is
     deliberately no badge or label. */
  .proj-card.lead-card {
    grid-column: span 2;
  }

  @media screen and (max-width: 1024px) {
    .card-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 600px) {
    .card-grid {
      grid-template-columns: 1fr;
    }
    /* Must reset, or a span-2 card overflows a single-column grid. */
    .proj-card.lead-card {
      grid-column: span 1;
    }
  }

  /* ── Individual card ── */
  .proj-card {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    cursor: pointer;
    text-align: left;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    color: var(--text-main);
    transition:
      transform 220ms var(--ease-out),
      box-shadow 220ms ease,
      border-color 220ms ease;
  }

  .proj-card:hover {
    transform: translateY(-6px);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
    box-shadow: 0 14px 40px -8px color-mix(in srgb, var(--accent) 32%, transparent);
  }

  .proj-card:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
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

  .lead-card .proj-thumb {
    aspect-ratio: 21 / 9;
  }

  @media screen and (max-width: 600px) {
    .lead-card .proj-thumb {
      aspect-ratio: 16 / 9;
    }
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    color: var(--accent);
    background:
      linear-gradient(
        135deg,
        color-mix(in srgb, var(--accent) 10%, transparent),
        transparent 60%
      ),
      repeating-linear-gradient(
        45deg,
        color-mix(in srgb, var(--accent) 5%, transparent) 0 10px,
        transparent 10px 20px
      );
  }

  .te-label {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    opacity: 0.75;
  }

  /* ── Category pill (on image) ── */
  .cat-pill {
    position: absolute;
    bottom: 0.6rem;
    left: 0.6rem;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    font-size: var(--fs-2xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.3em 0.7em;
    border-radius: var(--radius-pill);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 16%, var(--bg-canvas));
    border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }

  /* ── Card thumbnail nav ── */
  .thumb-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition:
      opacity 150ms ease,
      background 150ms ease;
    z-index: 5;
    padding: 0;
  }

  .proj-thumb:hover .thumb-nav {
    opacity: 1;
  }

  .thumb-prev {
    left: 0.4rem;
  }
  .thumb-next {
    right: 0.4rem;
  }

  .thumb-nav:hover {
    background: rgba(0, 0, 0, 0.8);
  }

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
    background: rgba(255, 255, 255, 0.4);
    transition:
      background 150ms ease,
      transform 150ms ease;
  }

  .thumb-dot.active {
    background: #fff;
    transform: scale(1.3);
  }

  /* ── Card body ── */
  .proj-body {
    padding: 1.1rem 1.2rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex: 1;
  }

  .proj-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .proj-title {
    font-size: 1.02rem;
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  .lead-card .proj-title {
    font-size: 1.3rem;
  }

  .lead-card .proj-blurb {
    font-size: var(--fs-sm);
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }

  .proj-date {
    display: flex;
    align-items: center;
    gap: 0.3em;
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    color: var(--text-muted);
  }

  .proj-pub {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    font-size: var(--fs-2xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--green);
    background: var(--green-soft);
    border: 1px solid color-mix(in srgb, var(--green) 30%, transparent);
    border-radius: var(--radius-pill);
    padding: 0.15em 0.55em;
    flex-shrink: 0;
  }

  .proj-blurb {
    margin: 0.2rem 0 0;
    font-size: var(--fs-xs);
    line-height: 1.6;
    color: var(--text-muted);
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
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
    border-top: 1px solid var(--border);
  }

  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
  }

  .proj-tags .tag {
    font-size: var(--fs-2xs);
    padding: 0.12em 0.55em;
  }

  .tag-more {
    opacity: 0.6;
  }

  .proj-cta {
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    font-size: var(--fs-2xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--accent);
    opacity: 0.75;
    white-space: nowrap;
    flex-shrink: 0;
    transition:
      opacity 200ms ease,
      gap 200ms ease;
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
    transition: transform 280ms var(--ease-out);
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
    background: rgba(0, 0, 0, 0.62);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    animation: backdrop-in 200ms ease forwards;
  }

  @keyframes backdrop-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal {
    background: var(--bg-canvas);
    border: 1px solid color-mix(in srgb, var(--accent) 45%, transparent);
    border-radius: var(--radius-xl);
    width: 100%;
    max-width: 660px;
    max-height: 90vh;
    overflow-y: auto;
    scrollbar-width: thin;
    display: flex;
    flex-direction: column;
    gap: 0;
    animation: modal-in 280ms var(--ease-out) forwards;
    box-shadow: 0 28px 72px -12px
      color-mix(in srgb, var(--accent) 30%, rgba(0, 0, 0, 0.55));
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
    border-bottom: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);
    gap: 1rem;
    position: sticky;
    top: 0;
    background: var(--bg-canvas);
    z-index: 1;
    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  }

  .modal-header-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  /* Reuse .cat-pill, but not positioned absolute here */
  .modal-header .cat-pill {
    position: static;
  }

  .modal-date {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    color: var(--text-muted);
  }

  .modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    color: var(--text-main);
    flex-shrink: 0;
    transition:
      background 200ms ease,
      transform 200ms ease,
      border-color 200ms ease;
  }

  .modal-close:hover {
    background: var(--bg-surface-hover);
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
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
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent);
    opacity: 0.55;
  }

  /* Modal carousel nav */
  .modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: rgba(0, 0, 0, 0.6);
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

  .modal-nav:hover {
    background: rgba(0, 0, 0, 0.85);
  }
  .modal-prev {
    left: 0.75rem;
  }
  .modal-next {
    right: 0.75rem;
  }

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
    background: rgba(255, 255, 255, 0.35);
    cursor: pointer;
    padding: 0;
    transition:
      background 150ms ease,
      transform 150ms ease;
  }

  .modal-dot.active {
    background: #fff;
    transform: scale(1.35);
  }

  /* ── Modal body ── */
  .modal-title-block {
    padding: 1.35rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .modal-title {
    font-size: 1.45rem;
    font-weight: 900;
    margin: 0;
    line-height: 1.15;
    padding: 0;
    text-transform: none;
    letter-spacing: -0.03em;
    color: var(--accent);
    display: block;
  }

  /* Opts out of the global h2 green tick — the accent colour carries it. */
  .modal-title::before {
    display: none;
  }

  .modal-role {
    display: flex;
    align-items: center;
    gap: 0.4em;
    font-size: var(--fs-xs);
    color: var(--text-muted);
    font-weight: 600;
  }

  .modal-desc {
    margin: 0;
    padding: 0.85rem 1.5rem 0;
    font-size: var(--fs-sm);
    line-height: 1.75;
    color: var(--text-muted);
  }

  .modal-bullets {
    margin: 0;
    padding: 0.85rem 1.5rem 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .modal-bullets li {
    display: flex;
    align-items: flex-start;
    gap: 0.55em;
    font-size: var(--fs-sm);
    line-height: 1.7;
    color: var(--text-muted);
  }

  .mbullet {
    flex-shrink: 0;
    margin-top: 0.1em;
    font-size: 0.75em;
    color: var(--accent);
  }

  .modal-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 1.35rem 1.5rem 1.5rem;
  }

  .private-notice {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-size: var(--fs-xs);
    color: var(--text-muted);
    opacity: 0.6;
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
    font-size: var(--fs-2xs);
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
