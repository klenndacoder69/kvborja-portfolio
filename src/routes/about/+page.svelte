<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const commandTarget = "cat about.txt";

  let aboutRevealed = $state(false);
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

  const revealAbout = () => {
    if (!isCommandReady) return;
    aboutRevealed = true;
  };

  onMount(() => {
    typingTimer = setTimeout(() => runCommandTyping(1), 280);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
    };
  });
</script>

<svelte:head>
  <title>About — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
  <div>
    <h1 class="hero-title" class:revealed={aboutRevealed}>
      {#if aboutRevealed}
        About
      {:else}
        <button type="button" class="hero-command" onclick={revealAbout} disabled={!isCommandReady}>
          $ {typedCommand}<span class="cursor">_</span>
        </button>
      {/if}
    </h1>

    {#if aboutRevealed}
      <p class="lead">
        I'm Klenn Jakek Borja — a CS student who got hooked on programming by wondering
        how things work under the hood. That curiosity has never really left.
        Outside of code I enjoy gaming, open-source tinkering, network homelabbing, and Linux rabbit holes.
      </p>

      <div class="section-gap">
        <h2>Skills</h2>
        <div class="cardset grid stagger" style="margin-top: 1em;">
          <div class="card-anchor card card-content">
            <div class="card-title">
              <Icon icon="tabler:device-desktop-code" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
              Languages
            </div>
            <div class="tags">
              {#each ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'Bash'] as s}
                <span class="tag">{s}</span>
              {/each}
            </div>
          </div>
          <div class="card-anchor card card-content">
            <div class="card-title">
              <Icon icon="tabler:tool" width="22" height="22" style="margin-right:0.4em;flex-shrink:0;" />
              Tools &amp; Frameworks
            </div>
            <div class="tags">
              {#each ['SvelteKit', 'Node.js', 'Git', 'Linux', 'VS Code', 'GitHub Actions'] as s}
                <span class="tag">{s}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="section-gap">
        <h2>Education</h2>
        <div class="card-anchor card card-content" style="margin-top:1em; max-width:36rem;">
          <div class="card-title" style="font-size:1.1em;">
            <Icon icon="tabler:school" width="20" height="20" style="margin-right:0.5em;flex-shrink:0;" />
            B.S. Computer Science
          </div>
          <p style="margin:0.25em 0 0; color:var(--text-link); font-size:0.95em; font-weight:600;">
            University / Institution Name &nbsp;·&nbsp; 20XX – Present
          </p>
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
    min-width: 13ch;
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

  @media (prefers-reduced-motion: reduce) {
    .cursor {
      animation: none;
    }
  }
</style>
