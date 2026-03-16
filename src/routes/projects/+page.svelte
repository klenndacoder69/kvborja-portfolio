<script lang="ts">
  import Icon from "@iconify/svelte";

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This very site — built with SvelteKit, a terminal splash screen, and deployed on GitHub Pages.',
      tags: ['SvelteKit', 'TypeScript', 'CSS'],
      github: 'https://github.com/',
      demo: null,
    },
    {
      title: 'Project Two',
      description: 'A short description of what this project does and what problem it solves.',
      tags: ['Python', 'Flask', 'SQL'],
      github: 'https://github.com/',
      demo: 'https://example.com',
    },
    {
      title: 'Project Three',
      description: 'Another cool CS project — describe what makes it interesting or challenging.',
      tags: ['Java', 'OOP', 'CLI'],
      github: 'https://github.com/',
      demo: null,
    },
    {
      title: 'Project Four',
      description: 'Replace this with a real project once you add your own work here.',
      tags: ['JavaScript', 'HTML', 'CSS'],
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
      <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>.
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
