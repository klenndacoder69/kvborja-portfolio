<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>About — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
  <h1>About</h1>

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
</div>
