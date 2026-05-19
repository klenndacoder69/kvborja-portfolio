<script lang="ts">
  import Icon from "@iconify/svelte";
  import { resolve } from "$app/paths";

  const focuses = [
    { icon: 'tabler:shield-lock',    color: 'var(--cyber-color)',   title: 'Cybersecurity' },
    { icon: 'tabler:layers-intersect', color: 'var(--both-color)', title: 'Full-Stack Dev' },
    { icon: 'tabler:brain',           color: 'var(--softdev-color)', title: 'Machine Learning' },
  ];

  const currently = [
    { key: 'working_on', label: 'working on', value: 'Linux SIEM Homelab · NoEsc HIDS' },
    { key: 'studying',   label: 'studying',   value: 'ISC2 CC · Google Cybersecurity Cert' },
    { key: 'open_to',    label: 'open to',    value: 'Internships · Full-time (July 2026)' },
    { key: 'based_in',   label: 'based in',   value: 'Philippines · Remote-friendly' },
  ];
</script>

<svelte:head>
  <title>Klenn Jakek Borja — CS Student & Developer</title>
  <meta name="description" content="CS student at UP Los Baños specializing in cybersecurity and full-stack development." />
</svelte:head>

<div class="page home-page">

  <!-- Hero -->
  <section class="hero">
    <div class="hero-text">
      <div class="hero-eyebrow">
        <span class="dot"></span>
        Open to opportunities
      </div>
      <h1 class="hero-name">Klenn Jakek<br />Borja</h1>
      <p class="hero-tagline">
        CS student at <strong>UP Los Baños</strong> — I build secure systems
        and full-stack applications. From kernel-level intrusion detection
        to RESTful APIs, I like knowing how everything works under the hood.
      </p>
      <div class="hero-actions">
        <a href={resolve('/projects')} class="button button-primary">
          <Icon icon="tabler:code" width="16" height="16" />
          View Projects
        </a>
        <a href={resolve('/contact')} class="button">
          <Icon icon="tabler:mail" width="16" height="16" />
          Get in Touch
        </a>
        <a href={resolve('/about')} class="button">
          <Icon icon="tabler:user" width="16" height="16" />
          About Me
        </a>
      </div>
    </div>

  </section>

  <!-- Currently -->
  <section class="section-gap">
    <div class="terminal-block">
      <div class="terminal-bar">
        <span class="t-dot" style="background:#ff5f57"></span>
        <span class="t-dot" style="background:#febc2e"></span>
        <span class="t-dot" style="background:#28c840"></span>
        <span class="t-title">klenn@kjbportfolio ~ status</span>
      </div>
      <div class="terminal-body">
        {#each currently as row}
          <div class="t-row">
            <span class="t-prompt">❯</span>
            <span class="t-key">{row.label}</span>
            <span class="t-sep">·</span>
            <span class="t-val">{row.value}</span>
          </div>
        {/each}
        <div class="t-row t-cursor-row">
          <span class="t-prompt">❯</span>
          <span class="t-cursor"></span>
        </div>
      </div>
    </div>
  </section>

  <!-- What I do -->
  <section class="section-gap">
    <h2>What I Do</h2>
    <div class="focus-grid stagger" style="margin-top: 1.25rem;">
      {#each focuses as f}
        <div class="focus-card" style="--fc: {f.color};">
          <div class="focus-icon-wrap">
            <Icon icon={f.icon} width="22" height="22" />
          </div>
          <div class="focus-title">{f.title}</div>
        </div>
      {/each}
    </div>
  </section>

</div>

<style>
  .home-page { max-width: 64rem; }

  /* ── Hero ── */
  .hero {
    padding: 1rem 0 2rem;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    font-size: 0.78rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--green);
    margin-bottom: 1rem;
    font-family: var(--font-mono);
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }

  .hero-name {
    font-size: clamp(2.8rem, 7vw, 5rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 1.25rem;
    border: none;
    padding: 0;
    text-transform: none;
  }

  .hero-tagline {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text-muted);
    max-width: 52ch;
    margin: 0 0 1.75rem;
  }

  .hero-tagline strong { color: var(--text-main); font-weight: 700; }

  .hero-actions {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .button-primary {
    background: var(--green-soft);
    border-color: var(--green);
    color: var(--green);
    font-weight: 700;
  }

  .button-primary:hover {
    background: var(--green);
    color: var(--bg-canvas);
    box-shadow: 0 4px 20px var(--green-glow);
  }

  /* ── Terminal block ── */
  .terminal-block {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    max-width: 42rem;
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 0.4em;
    padding: 0.6rem 1rem;
    background: var(--bg-surface-2);
    border-bottom: 1px solid var(--border);
  }

  .t-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .t-title {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--text-muted);
    margin-left: 0.5em;
    letter-spacing: 0.02em;
  }

  .terminal-body {
    padding: 1rem 1.25rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .t-row {
    display: flex;
    align-items: baseline;
    gap: 0.7em;
    font-family: var(--font-mono);
    font-size: 0.83rem;
    line-height: 1.5;
  }

  .t-prompt {
    color: var(--green);
    flex-shrink: 0;
    font-size: 0.78rem;
  }

  .t-key {
    color: var(--text-muted);
    min-width: 9ch;
    flex-shrink: 0;
    font-size: 0.78rem;
  }

  .t-sep {
    color: var(--border-strong);
    flex-shrink: 0;
  }

  .t-val {
    color: var(--text-main);
    font-weight: 500;
  }

  .t-cursor-row { margin-top: 0.1rem; }

  .t-cursor {
    display: inline-block;
    width: 8px;
    height: 1em;
    background: var(--green);
    border-radius: 1px;
    opacity: 0.8;
    animation: blink 1.1s step-end infinite;
    vertical-align: text-bottom;
  }

  @keyframes blink {
    0%, 100% { opacity: 0.8; }
    50%       { opacity: 0; }
  }

  /* ── Focus cards ── */
  .focus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 640px) {
    .focus-grid { grid-template-columns: 1fr; }
  }

  .focus-card {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 1rem 1.2rem;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--fc);
    border-radius: var(--radius-md);
    transition: box-shadow 200ms ease, transform 200ms ease, background 200ms ease;
  }

  .focus-card:hover {
    transform: translateY(-3px);
    background: var(--bg-surface-hover);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--fc) 12%, transparent);
  }

  .focus-icon-wrap {
    width: 38px;
    height: 38px;
    border-radius: var(--radius-sm);
    background: color-mix(in srgb, var(--fc) 12%, var(--bg-surface-2));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fc);
    flex-shrink: 0;
  }

  .focus-title {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
</style>
