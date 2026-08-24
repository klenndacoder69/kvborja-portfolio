<script lang="ts">
  import Icon from "@iconify/svelte";

  const links = [
    {
      icon: 'tabler:brand-github',
      label: 'GitHub',
      url: 'https://github.com/klenndacoder69',
      hint: 'github.com/klenndacoder69',
      color: '#f0f0f0',
      desc: 'Check out my source code and open-source work.',
    },
    {
      icon: 'tabler:brand-linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/borjaklenn',
      hint: 'linkedin.com/in/borjaklenn',
      color: '#0a66c2',
      desc: 'Connect professionally or view my work history.',
    },
    {
      icon: 'tabler:mail',
      label: 'Email',
      url: 'mailto:borja.klenn@gmail.com',
      hint: 'borja.klenn@gmail.com',
      color: '#ea4335',
      desc: 'Best for inquiries, collaborations, or just saying hi.',
    },
  ];
</script>

<svelte:head>
  <title>Contact — Klenn Jakek Borja</title>
  <meta name="description" content="Get in touch with Klenn Jakek Borja — open to collaborations and new opportunities." />
</svelte:head>

<div class="page">
  <div>
    <h1>Contact</h1>
    <p class="lead" style="margin-top:0.75em;">
      Open to collaborations, new opportunities, or just chatting about tech.
      I try to respond within a day or two.
    </p>
  </div>

  <div class="contact-list stagger" style="margin-top: 2rem;">
    {#each links as link}
      <a
        href={link.url}
        target="_blank"
        rel="noopener"
        class="contact-card"
        style="--c: {link.color};"
        id="contact-{link.label.toLowerCase()}"
      >
        <div class="contact-icon-wrap">
          <Icon icon={link.icon} width="22" height="22" />
        </div>
        <div class="contact-body">
          <div class="contact-label">{link.label}</div>
          <div class="contact-hint">{link.hint}</div>
          <div class="contact-desc">{link.desc}</div>
        </div>
        <Icon icon="tabler:arrow-up-right" width="18" height="18" class="contact-arrow" />
      </a>
    {/each}
  </div>

  <div class="avail-note">
    <span class="avail-dot"></span>
    Currently at Bronstein, Gewirtz & Grossman, LLC
  </div>

</div>

<style>
  .contact-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    max-width: 38rem;
  }

  .contact-card {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    padding: 1.1rem 1.25rem;
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: var(--text-main);
    transition: background 200ms ease, border-color 200ms ease,
                transform 200ms ease, box-shadow 200ms ease;
    position: relative;
    overflow: hidden;
  }

  .contact-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--c);
    opacity: 0;
    transition: opacity 200ms ease;
  }

  .contact-card:hover {
    background: var(--bg-surface-hover);
    border-color: var(--green);
    transform: translateX(6px);
    box-shadow: 0 6px 20px var(--green-glow);
  }

  .contact-card:hover::before { opacity: 1; }

  .contact-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    background: var(--bg-surface-2);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--c);
    transition: background 200ms ease;
  }

  .contact-card:hover .contact-icon-wrap {
    background: color-mix(in srgb, var(--c) 15%, var(--bg-surface));
  }

  .contact-body { flex: 1; min-width: 0; }

  .contact-label {
    font-size: 0.95rem;
    font-weight: 700;
  }

  .contact-hint {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 0.1em;
  }

  .contact-desc {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 0.3em;
    line-height: 1.5;
  }

  :global(.contact-arrow) {
    flex-shrink: 0;
    opacity: 0.25;
    transition: opacity 200ms ease, transform 200ms ease;
  }

  .contact-card:hover :global(.contact-arrow) {
    opacity: 0.7;
    transform: translate(2px, -2px);
  }

  /* ── Availability ── */
  .avail-note {
    display: inline-flex;
    align-items: center;
    gap: 0.6em;
    margin-top: 1.75rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--green);
    background: var(--green-soft);
    border: 1px solid color-mix(in srgb, var(--green) 25%, transparent);
    border-radius: 9999em;
    padding: 0.4em 1em;
  }

  .avail-dot {
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
    50%       { opacity: 0.35; }
  }
</style>
