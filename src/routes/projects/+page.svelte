<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const commandTarget = "ls projects";

  let projectsRevealed = $state(false);
  let typedCommand = $state("");
  let isCommandReady = $state(false);
  let typingTimer: ReturnType<typeof setTimeout> | undefined;

  const runCommandTyping = (index: number) => {
    typedCommand = commandTarget.slice(0, index);

    if (index < commandTarget.length) {
      typingTimer = setTimeout(() => runCommandTyping(index + 1), 95);
      return;
    }

    isCommandReady = true;
  };

  const revealProjects = () => {
    if (!isCommandReady) return;
    projectsRevealed = true;
  };

  onMount(() => {
    typingTimer = setTimeout(() => runCommandTyping(1), 280);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
    };
  });

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Built using SvelteKit and TypeScript, this portfolio website showcases my projects, skills, and contact information.',
      tags: ['SvelteKit', 'TypeScript', 'CSS'],
      github: 'https://github.com/klenndacoder69/kvborja-portfolio',
      demo: null,
    },
    {
      title: 'Project Two',
      description: 'NA',
      tags: ['NA'],
      github: 'https://github.com/',
      demo: null,
    },
    {
      title: 'Project Three',
      description: 'NA',
      tags: ['NA'],
      github: 'https://github.com/',
      demo: null,
    },
    {
      title: 'Project Four',
      description: 'NA',
      tags: ['NA'],
      github: 'https://github.com/',
      demo: null,
    },
  ];
</script>

<svelte:head>
  <title>Projects — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
  <div>
    <h1 class="hero-title" class:revealed={projectsRevealed}>
      {#if projectsRevealed}
        Projects
      {:else}
        <button type="button" class="hero-command" onclick={revealProjects} disabled={!isCommandReady}>
          $ {typedCommand}<span class="cursor">_</span>
        </button>
      {/if}
    </h1>

    {#if projectsRevealed}
      <p class="lead" style="margin-top:0.75em;">
        Things I've built. More on
        <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener">GitHub</a>.
      </p>
    {/if}
  </div>

  {#if projectsRevealed}
    <div class="cardset grid stagger">
      {#each projects as project}
        <div class="card-anchor card card-content">
          <div class="card-title" style="font-size:1.15em;">{project.title}</div>
          <p style="margin:0.4em 0 0; flex:1; font-size:0.95em; line-height:1.65; opacity:0.85;">
            {project.description}
          </p>
          <div class="tags" style="margin-top:0.75em;">
            {#each project.tags as tag}<span class="tag">{tag}</span>{/each}
          </div>
          <div class="card-actions" style="margin-top:1em;">
            <a href={project.github} target="_blank" rel="noopener" class="button" style="font-size:0.875em;">
              <Icon icon="tabler:brand-github" width="15" height="15" />
              Code
            </a>
            {#if project.demo}
              <a href={project.demo} target="_blank" rel="noopener" class="button" style="font-size:0.875em;">
                <Icon icon="tabler:external-link" width="15" height="15" />
                Demo
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
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
    min-width: 3ch;
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
