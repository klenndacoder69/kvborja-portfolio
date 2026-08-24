<script lang="ts">
  import Icon from "@iconify/svelte";
  import { resolve } from "$app/paths";
  import SectionHeading from "$lib/SectionHeading.svelte";
  import { reveal } from "$lib/anim/reveal";

  const focuses = [
    { icon: 'tabler:shield-lock',      color: 'var(--cyber-color)',   title: 'Cybersecurity',   blurb: 'SIEM, intrusion detection, pentesting' },
    { icon: 'tabler:layers-intersect', color: 'var(--softdev-color)', title: 'Full-Stack Dev',  blurb: 'RESTful APIs, data pipelines, web apps' },
    { icon: 'tabler:brain',            color: 'var(--both-color)',    title: 'Machine Learning', blurb: 'Predictive models, NLP, data parsing' },
  ];

  const currently = [
    { key: 'working_at', label: 'working at', value: 'Bronstein, Gewirtz & Grossman, LLC' },
    { key: 'working_on', label: 'working on', value: 'Linux SIEM Homelab' },
    { key: 'studying',   label: 'studying',   value: 'ISC2 CC · Google Cybersecurity Cert' },
    { key: 'based_in',   label: 'based in',   value: 'Philippines · Remote-friendly' },
  ];
</script>

<svelte:head>
  <title>Klenn Jakek Borja — Python Developer & Data Engineer</title>
</svelte:head>

<div class="page home-page reveal" {@attach reveal()}>

  <!-- Hero -->
  <section class="hero">
    <div class="hero-eyebrow">
      <span class="dot"></span>
      Python Developer &amp; Data Engineer
    </div>

    <h1 class="hero-name">Klenn Jakek<br />Borja</h1>

    <p class="hero-tagline">
      Python Developer and Data Engineer at
      <strong>Bronstein, Gewirtz &amp; Grossman, LLC</strong> — I build secure systems
      and full-stack applications. From kernel-level intrusion detection to
      RESTful APIs, I like knowing how everything works under the hood.
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
    <SectionHeading number="01" title="What I Do" />
    <div class="focus-grid reveal" {@attach reveal({ step: 80 })}>
      {#each focuses as f}
        <div class="focus-card" style="--fc: {f.color};">
          <div class="focus-icon-wrap">
            <Icon icon={f.icon} width="22" height="22" />
          </div>
          <div class="focus-text">
            <div class="focus-title">{f.title}</div>
            <div class="focus-blurb">{f.blurb}</div>
          </div>
        </div>
      {/each}
    </div>
  </section>

</div>

<style>
  .home-page { max-width: var(--layout-max-width); }

  /* ── Hero ── */
  .hero {
    padding: 1.5rem 0 2.5rem;
  }

  .hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55em;
    font-size: var(--fs-2xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--green);
    margin-bottom: 1.35rem;
    font-family: var(--font-mono);
    background: var(--green-soft);
    border: 1px solid color-mix(in srgb, var(--green) 22%, transparent);
    border-radius: var(--radius-pill);
    padding: 0.45em 1em;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0.4; }
  }

  /* Opts out of the global h1 treatment — the name is the display type here,
     so it drops the uppercase, the rule, and the padding. */
  .hero-name {
    font-size: var(--fs-display);
    font-weight: 900;
    letter-spacing: -0.05em;
    line-height: 0.95;
    margin-bottom: 1.5rem;
    padding: 0;
    text-transform: none;
  }

  .hero-name::before { display: none; }

  .hero-tagline {
    font-size: var(--fs-lg);
    line-height: 1.7;
    color: var(--text-muted);
    max-width: 54ch;
    margin: 0 0 2rem;
  }

  .hero-tagline strong { color: var(--text-main); font-weight: 700; }

  .hero-actions {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  /* ── Terminal block ── */
  .terminal-block {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    max-width: 44rem;
    box-shadow: var(--glow-sm);
    transition: box-shadow 240ms ease, border-color 240ms ease;
  }

  .terminal-block:hover {
    border-color: color-mix(in srgb, var(--green) 35%, transparent);
    box-shadow: var(--glow-md);
  }

  .terminal-bar {
    display: flex;
    align-items: center;
    gap: 0.4em;
    padding: 0.65rem 1rem;
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
    font-size: var(--fs-2xs);
    color: var(--text-muted);
    margin-left: 0.5em;
    letter-spacing: 0.02em;
  }

  .terminal-body {
    padding: 1.15rem 1.35rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .t-row {
    display: flex;
    align-items: baseline;
    gap: 0.7em;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    line-height: 1.5;
  }

  .t-prompt {
    color: var(--green);
    flex-shrink: 0;
    text-shadow: 0 0 10px color-mix(in srgb, var(--green) 50%, transparent);
  }

  .t-key {
    color: var(--text-muted);
    min-width: 10ch;
    flex-shrink: 0;
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
    box-shadow: 0 0 10px var(--green);
    animation: blink 1.1s step-end infinite;
    vertical-align: text-bottom;
  }

  @keyframes blink {
    0%, 100% { opacity: 0.8; }
    50%      { opacity: 0; }
  }

  /* ── Focus cards ── */
  .focus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 700px) {
    .focus-grid { grid-template-columns: 1fr; }
  }

  .focus-card {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    padding: 1.25rem 1.35rem;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    transition: box-shadow 220ms ease, transform 220ms var(--ease-out),
                background 220ms ease, border-color 220ms ease;
  }

  /* Same accent-wipe signature as .card-anchor, keyed to the focus colour. */
  .focus-card::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background: var(--fc);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 280ms var(--ease-out);
  }

  .focus-card:hover {
    transform: translateY(-3px);
    background: var(--bg-surface-hover);
    border-color: color-mix(in srgb, var(--fc) 45%, transparent);
    box-shadow: 0 10px 30px color-mix(in srgb, var(--fc) 18%, transparent);
  }

  .focus-card:hover::after { transform: scaleX(1); }

  .focus-icon-wrap {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    background: color-mix(in srgb, var(--fc) 14%, var(--bg-surface-2));
    border: 1px solid color-mix(in srgb, var(--fc) 25%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--fc);
    flex-shrink: 0;
  }

  .focus-text { display: flex; flex-direction: column; gap: 0.25em; }

  .focus-title {
    font-size: var(--fs-sm);
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .focus-blurb {
    font-size: var(--fs-2xs);
    line-height: 1.5;
    color: var(--text-muted);
  }
</style>
