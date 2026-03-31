<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import { resolve } from "$app/paths";

  const commandTarget = "whoami";

  let identityRevealed = $state(false);
  let typedCommand = $state("");
  let isCommandReady = $state(false);
  let typingTimer: ReturnType<typeof setTimeout> | undefined;

  const runCommandTyping = (index: number) => {
    typedCommand = commandTarget.slice(0, index);

    if (index < commandTarget.length) {
      typingTimer = setTimeout(() => runCommandTyping(index + 1), 90);
      return;
    }

    isCommandReady = true;
  };

  const revealIdentity = () => {
    if (!isCommandReady) return;
    identityRevealed = true;
  };

  onMount(() => {
    typingTimer = setTimeout(() => runCommandTyping(1), 320);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
    };
  });
</script>

<svelte:head>
  <title>Klenn Jakek Borja — CS Student & Developer</title>
</svelte:head>

<div class="page">
  <div>
    <h1 class="hero-title" class:revealed={identityRevealed}>
      {#if identityRevealed}
        Hey, I'm <span class="highlight">Klenn.</span>
      {:else}
        <button type="button" class="hero-command" onclick={revealIdentity} disabled={!isCommandReady}>
          $ {typedCommand}<span class="cursor">_</span>
        </button>
      {/if}
    </h1>
    {#if identityRevealed}
      <p class="lead" style="margin-top: 0.75em;">
        CS student. I build things for the web, dig into systems, and like
        learning how everything works under the hood.
      </p>

      <div class="card-actions" style="flex-wrap: wrap; gap: 0.6em; margin-top: 0.5em;">
        <a href={resolve('/projects')} class="button">
          <Icon icon="tabler:code" width="16" height="16" />
          Projects
        </a>
        <a href={resolve('/about')} class="button">
          <Icon icon="tabler:user" width="16" height="16" />
          About
        </a>
        <a href={resolve('/contact')} class="button">
          <Icon icon="tabler:mail" width="16" height="16" />
          Contact
        </a>
      </div>

      <div class="section-gap">
        <h2>Stack</h2>
        <div class="tags stagger" style="margin-top: 0.75em;">
          {#each ['SvelteKit', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'HTML/CSS', 'Git', 'Linux', 'Node.js', 'SQL'] as skill}
            <span class="tag">{skill}</span>
          {/each}
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
    animation: reveal-hero 280ms ease-out both;
  }

  .highlight {
    color: #2f49ff;
    font-weight: 700;
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
    min-width: 7.5ch;
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

  @media (max-width: 625px) {
    .hero-command {
      font-size: clamp(1.6rem, 8vw, 2.2rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
    }
  }
</style>
