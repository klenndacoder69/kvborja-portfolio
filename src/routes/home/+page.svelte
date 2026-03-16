<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<svelte:head>
  <title>Klenn Jakek Borja — CS Student & Developer</title>
</svelte:head>

<div class="page">
  <div>
    <h1>Hey, I'm Klenn.</h1>
    <p class="lead" style="margin-top: 0.75em;">
      CS student. I build things for the web, dig into systems, and like
      learning how everything works under the hood.
    </p>
  </div>

  <div class="card-actions" style="flex-wrap: wrap; gap: 0.6em; margin-top: 0.5em;">
    <a href="/projects" class="button">
      <Icon icon="tabler:code" width="16" height="16" />
      Projects
    </a>
    <a href="/about" class="button">
      <Icon icon="tabler:user" width="16" height="16" />
      About
    </a>
    <a href="/contact" class="button">
      <Icon icon="tabler:mail" width="16" height="16" />
      Contact
    </a>
  </div>

  <div class="section-gap">
    <h2>Stack</h2>
    <div class="tags stagger" style="margin-top: 0.75em;">
      {#each ['SvelteKit', 'TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'HTML/CSS', 'Git', 'Linux', 'Node.js', 'SQL'] as skill}
        <span class="tag">{skill}</span>
      {/each}
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: clamp(2.2rem, 6vw, 3.5rem);
    border-top-width: 6px;
  }
</style>
