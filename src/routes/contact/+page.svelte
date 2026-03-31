<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const commandTarget = "cat contact.txt";

  let contactRevealed = $state(false);
  let typedCommand = $state("");
  let isCommandReady = $state(false);
  let typingTimer: ReturnType<typeof setTimeout> | undefined;

  const runCommandTyping = (index: number) => {
    typedCommand = commandTarget.slice(0, index);

    if (index < commandTarget.length) {
      typingTimer = setTimeout(() => runCommandTyping(index + 1), 85);
      return;
    }

    isCommandReady = true;
  };

  const revealContact = () => {
    if (!isCommandReady) return;
    contactRevealed = true;
  };

  onMount(() => {
    typingTimer = setTimeout(() => runCommandTyping(1), 280);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
    };
  });

  const links = [
    {
      icon: "tabler:mail",
      label: "Email",
      url: "mailto:borja.klenn@gmail.com",
      hint: "borja.klenn@gmail.com",
      note: "Best for internships, project ideas, and direct collaboration.",
    },
    {
      icon: "tabler:brand-linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/klenn-borja",
      hint: "linkedin.com/in/klenn-borja",
      note: "Great for professional networking and career conversations.",
    },
    {
      icon: "tabler:brand-github",
      label: "GitHub",
      url: "https://github.com/klenndacoder69",
      hint: "github.com/klenndacoder69",
      note: "Browse my code, experiments, and project history.",
    },
  ];
</script>

<svelte:head>
  <title>Contact — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
  <div>
    <h1 class="hero-title" class:revealed={contactRevealed}>
      {#if contactRevealed}
        Contact
      {:else}
        <button type="button" class="hero-command" onclick={revealContact} disabled={!isCommandReady}>
          $ {typedCommand}<span class="cursor">_</span>
        </button>
      {/if}
    </h1>

    {#if contactRevealed}
      <p class="lead" style="margin-top:0.75em;">
        Open to internships, part-time roles, collaborations, or just chatting about tech.
      </p>

      <div class="card-actions" style="margin-top:0.85em; gap:0.6em; flex-wrap:wrap;">
        <a href="mailto:borja.klenn@gmail.com" class="button">
          <Icon icon="tabler:mail" width="15" height="15" />
          Email
        </a>
        <a href="https://linkedin.com/klenn-borja" target="_blank" rel="noopener" class="button">
          <Icon icon="tabler:brand-linkedin" width="15" height="15" />
          LinkedIn
        </a>
        <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener" class="button">
          <Icon icon="tabler:brand-github" width="15" height="15" />
          GitHub
        </a>
      </div>

      <div class="section-gap">
        <h2>Channels</h2>
        <div class="cardset grid stagger" style="margin-top:1em;">
          {#each links as { icon, label, url, hint, note }}
            <a href={url} target="_blank" rel="noopener" class="card-anchor contact-card">
              <span class="contact-icon-wrap" aria-hidden="true">
                <Icon {icon} width="22" height="22" />
              </span>
              <div class="contact-meta">
                <div class="contact-label">{label}</div>
                <div class="contact-hint">{hint}</div>
                <p class="contact-note">{note}</p>
              </div>
              <Icon icon="tabler:arrow-up-right" width="16" height="16" style="margin-left:auto;opacity:0.35;flex-shrink:0;" />
            </a>
          {/each}
        </div>
      </div>

      <div class="section-gap">
        <h2>Availability</h2>
        <div class="card-anchor card card-content availability-card">
          <p class="availability-copy">
            I am currently open to internship opportunities, part-time work, and student-focused collaborations.
            Expected response time is usually within 24 to 48 hours.
          </p>
          <div class="tags">
            <span class="tag">Internships</span>
            <span class="tag">Part-time Roles</span>
            <span class="tag">Open Source</span>
            <span class="tag">Web Projects</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .hero-title {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    border-top-width: 6px;
    min-height: 1.2em;
  }

  .hero-title.revealed {
    animation: reveal-hero 260ms ease-out both;
  }

  .hero-command {
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
    color: var(--button-color, #2f49ff);
    font: inherit;
    line-height: inherit;
    cursor: pointer;
    display: inline-flex;
    align-items: baseline;
    min-width: 14ch;
    gap: 0.08em;
    font-family: "JetBrains Mono", "Fira Code", "Consolas", monospace;
    transition: color 180ms ease;
  }

  .hero-command:disabled {
    cursor: default;
    opacity: 0.9;
  }

  .hero-command:hover,
  .hero-command:focus-visible {
    color: var(--button-color-hover, #2238cc);
  }

  .cursor {
    margin-left: -0.04em;
    font-weight: 700;
    animation: blink-cursor 1s steps(1, end) infinite;
  }

  .contact-card {
    display: flex;
    align-items: flex-start;
    gap: 0.9em;
    padding: 1.2em 1.25em;
    color: var(--text-main);
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--bg-surface) 90%, transparent),
      color-mix(in srgb, var(--bg-surface-hover) 30%, var(--bg-surface))
    );
    border-color: color-mix(in srgb, var(--text-main) 16%, transparent);
  }

  .contact-card:hover,
  .contact-card:focus-visible {
    border-color: color-mix(in srgb, var(--text-main) 35%, transparent);
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--bg-surface) 85%, transparent),
      color-mix(in srgb, var(--bg-surface-hover) 42%, var(--bg-surface))
    );
  }

  .contact-icon-wrap {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main);
    background: color-mix(in srgb, var(--bg-surface-hover) 75%, var(--bg-surface));
    border: 1px solid color-mix(in srgb, var(--text-main) 18%, transparent);
    flex-shrink: 0;
  }

  .contact-meta {
    min-width: 0;
  }

  .contact-label {
    font-weight: 700;
    font-size: 1.02em;
    color: var(--text-main);
  }

  .contact-hint {
    margin-top: 0.15em;
    font-size: 0.82em;
    color: var(--text-link);
    opacity: 0.9;
  }

  .contact-note {
    margin: 0.4em 0 0;
    font-size: 0.9em;
    line-height: 1.55;
    color: color-mix(in srgb, var(--text-main) 88%, var(--bg-canvas));
    opacity: 1;
  }

  .availability-card {
    margin-top: 1em;
    max-width: 44rem;
    gap: 0.8em;
  }

  .availability-copy {
    margin: 0;
    line-height: 1.65;
    opacity: 0.9;
  }

  @keyframes reveal-hero {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  @keyframes blink-cursor {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
    }
  }

  @media (max-width: 625px) {
    .hero-command {
      font-size: clamp(1.55rem, 8vw, 2.2rem);
    }

    .contact-card {
      padding: 1.05em;
    }
  }
</style>
