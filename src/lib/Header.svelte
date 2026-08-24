<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/state";
  import { resolve } from "$app/paths";
  import { onMount } from "svelte";
  import { theme } from "$lib/theme.svelte";

  const nav = [
    { href: resolve('/home'),     icon: 'tabler:home-2',  label: 'Home' },
    { href: resolve('/projects'), icon: 'tabler:code',    label: 'Projects' },
    { href: resolve('/about'),    icon: 'tabler:user',    label: 'About' },
    { href: resolve('/contact'),  icon: 'tabler:mail',    label: 'Contact' },
  ];

  const themeMeta = {
    system: { icon: 'tabler:device-desktop', label: 'System theme' },
    light:  { icon: 'tabler:sun',            label: 'Light theme'  },
    dark:   { icon: 'tabler:moon',           label: 'Dark theme'   },
  } as const;

  // The inline script in app.html already applied the stored choice before
  // paint; this only syncs the button's state to it.
  onMount(() => theme.init());
</script>

<header class="site-header" aria-label="Site header">
  <div class="header-inner content-layout">
    <a href={resolve('/home')} class="wordmark" aria-label="Go to homepage">
      <span class="wm-prompt" aria-hidden="true">❯</span>
      <span class="wm-name">KJB</span>
      <span class="wm-sep">·</span>
      <span class="wm-sub">Portfolio</span>
    </a>

    <div class="header-right">
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

      <button
        type="button"
        class="theme-toggle"
        onclick={() => theme.cycle()}
        title={themeMeta[theme.value].label}
        aria-label="{themeMeta[theme.value].label} — click to change"
      >
        <Icon icon={themeMeta[theme.value].icon} width="16" height="16" />
      </button>
    </div>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--bg-canvas) 78%, transparent);
    backdrop-filter: blur(16px) saturate(1.4);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    border-bottom: 1px solid var(--border);
  }

  /* A hairline of accent under the whole header — subtle, but it ties the
     shell to the green identity without adding another element. */
  .site-header::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      color-mix(in srgb, var(--green) 45%, transparent) 20%,
      color-mix(in srgb, var(--green) 45%, transparent) 80%,
      transparent
    );
    opacity: 0.5;
  }

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    gap: 1.5rem;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* ── Wordmark ── */
  .wordmark {
    display: flex;
    align-items: center;
    gap: 0.4em;
    text-decoration: none;
    flex-shrink: 0;
  }

  .wm-prompt {
    font-family: var(--font-mono);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--green);
    text-shadow: 0 0 12px color-mix(in srgb, var(--green) 55%, transparent);
  }

  .wm-name {
    font-family: var(--font-mono);
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-main);
    letter-spacing: 0.05em;
  }

  .wm-sep {
    color: var(--border-strong);
    font-size: 1rem;
  }

  .wm-sub {
    font-size: var(--fs-xs);
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
    font-size: var(--fs-sm);
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.4em 0.75em;
    border-radius: var(--radius-pill);
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
    border-color: color-mix(in srgb, var(--green) 30%, transparent);
    font-weight: 600;
    box-shadow: inset 0 0 12px color-mix(in srgb, var(--green) 10%, transparent);
  }

  /* ── Theme toggle ── */
  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: var(--radius-pill);
    border: 1px solid var(--border);
    background: var(--bg-surface);
    color: var(--text-muted);
    cursor: pointer;
    padding: 0;
    transition: color 180ms ease, background 180ms ease,
                border-color 180ms ease, box-shadow 200ms ease;
  }

  .theme-toggle:hover {
    color: var(--green);
    border-color: color-mix(in srgb, var(--green) 40%, transparent);
    background: var(--green-soft);
    box-shadow: var(--glow-sm);
  }

  @media screen and (max-width: 560px) {
    .nav-link span { display: none; }
    .nav-link { padding: 0.5em; }
    .wm-sub, .wm-sep { display: none; }
  }
</style>
