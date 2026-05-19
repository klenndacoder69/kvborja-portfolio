<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  const nav = [
    { href: resolve('/home'),     icon: 'tabler:home-2',  label: 'Home' },
    { href: resolve('/projects'), icon: 'tabler:code',    label: 'Projects' },
    { href: resolve('/about'),    icon: 'tabler:user',    label: 'About' },
    { href: resolve('/contact'),  icon: 'tabler:mail',    label: 'Contact' },
  ];
</script>

<header class="site-header" aria-label="Site header">
  <div class="header-inner content-layout">
    <a href={resolve('/home')} class="wordmark" aria-label="Go to homepage">
      <span class="wm-name">KJB</span>
      <span class="wm-sep">·</span>
      <span class="wm-sub">Portfolio</span>
    </a>

    <nav class="primary-nav-inline" aria-label="Primary navigation">
      {#each nav as { href, icon, label }}
        <a
          {href}
          class="nav-link"
          class:active={page.url.pathname === href}
          title={label}
          aria-current={page.url.pathname === href ? 'page' : undefined}
        >
          <Icon {icon} width="15" height="15" />
          <span>{label}</span>
        </a>
      {/each}
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--bg-canvas) 80%, transparent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    gap: 1.5rem;
  }

  /* ── Wordmark ── */
  .wordmark {
    display: flex;
    align-items: center;
    gap: 0.4em;
    text-decoration: none;
    flex-shrink: 0;
  }

  .wm-name {
    font-family: var(--font-mono);
    font-size: 1rem;
    font-weight: 600;
    color: var(--green);
    letter-spacing: 0.05em;
  }

  .wm-sep {
    color: var(--border-strong);
    font-size: 1rem;
  }

  .wm-sub {
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-muted);
    letter-spacing: 0.02em;
  }

  /* ── Nav ── */
  .primary-nav-inline {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .nav-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.4em 0.75em;
    border-radius: 9999em;
    border: 1px solid transparent;
    transition: color 180ms ease, background 180ms ease, border-color 180ms ease;
  }

  .nav-link:hover {
    color: var(--text-main);
    background: var(--bg-surface);
  }

  .nav-link.active {
    color: var(--green);
    background: var(--green-soft);
    border-color: color-mix(in srgb, var(--green) 25%, transparent);
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    .nav-link span { display: none; }
    .nav-link { padding: 0.5em; }
  }
</style>
