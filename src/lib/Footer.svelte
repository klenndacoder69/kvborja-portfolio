<script lang="ts">
  import Icon from "@iconify/svelte";
  import { resolve } from "$app/paths";

  const year = new Date().getFullYear();

  const nav = [
    { href: resolve('/home'),     label: 'Home' },
    { href: resolve('/projects'), label: 'Projects' },
    { href: resolve('/about'),    label: 'About' },
    { href: resolve('/contact'),  label: 'Contact' },
  ];

  const socials = [
    { icon: 'tabler:brand-github',   label: 'GitHub',   url: 'https://github.com/klenndacoder69',  id: 'footer-github' },
    { icon: 'tabler:brand-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/borjaklenn', id: 'footer-linkedin' },
    { icon: 'tabler:mail',           label: 'Email',    url: 'mailto:borja.klenn@gmail.com',       id: 'footer-email' },
  ];
</script>

<footer class="site-footer">
  <div class="footer-inner content-layout">

    <div class="footer-brand">
      <span class="footer-mono">
        <span class="fm-prompt" aria-hidden="true">❯</span>
        kjb·portfolio
      </span>
      <span class="footer-status">
        <span class="fs-dot" aria-hidden="true"></span>
        Python Developer &amp; Data Engineer
      </span>
      <span class="footer-copy">© {year} Klenn Jakek Borja</span>
    </div>

    <nav class="footer-col" aria-label="Footer navigation">
      <span class="footer-heading">Pages</span>
      {#each nav as { href, label }}
        <a {href} class="footer-link">{label}</a>
      {/each}
    </nav>

    <div class="footer-col">
      <span class="footer-heading">Elsewhere</span>
      {#each socials as s}
        <a
          href={s.url}
          target="_blank"
          rel="noopener"
          class="footer-link"
          title={s.label}
          id={s.id}
        >
          <Icon icon={s.icon} width="15" height="15" />
          {s.label}
        </a>
      {/each}
    </div>

  </div>
</footer>

<style>
  .site-footer {
    position: relative;
    border-top: 1px solid var(--border);
    padding: 2.5rem 0 2rem;
    margin-top: 3rem;
  }

  /* A closing rule that echoes the header's accent hairline. */
  .site-footer::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      color-mix(in srgb, var(--green) 40%, transparent) 25%,
      color-mix(in srgb, var(--green) 40%, transparent) 75%,
      transparent
    );
    opacity: 0.45;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2rem;
    align-items: start;
  }

  @media screen and (max-width: 640px) {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
      gap: 1.75rem;
    }
    .footer-brand { grid-column: 1 / -1; }
  }

  /* ── Brand column ── */
  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-mono {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    font-weight: 600;
    color: var(--text-main);
    letter-spacing: 0.05em;
  }

  .fm-prompt {
    color: var(--green);
    text-shadow: 0 0 12px color-mix(in srgb, var(--green) 55%, transparent);
  }

  .footer-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    color: var(--green);
    letter-spacing: 0.04em;
  }

  .fs-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    box-shadow: 0 0 8px var(--green);
    flex-shrink: 0;
  }

  .footer-copy {
    font-size: var(--fs-2xs);
    color: var(--text-muted);
    margin-top: 0.25rem;
  }

  /* ── Link columns ── */
  .footer-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
  }

  .footer-heading {
    font-family: var(--font-mono);
    font-size: var(--fs-2xs);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--text-muted);
    opacity: 0.65;
    margin-bottom: 0.55rem;
  }

  .footer-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4em;
    font-size: var(--fs-xs);
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.3em 0.55em;
    margin-left: -0.55em;
    border-radius: var(--radius-sm);
    transition: color 180ms ease, background 180ms ease;
  }

  .footer-link:hover {
    color: var(--green);
    background: var(--green-soft);
  }
</style>
