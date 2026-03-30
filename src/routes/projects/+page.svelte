<script lang="ts">
  import Icon from "@iconify/svelte";

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
    <h1>Projects</h1>
    <p class="lead" style="margin-top:0.75em;">
      Things I've built. More on
      <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener">GitHub</a>.
    </p>
  </div>

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
</div>
