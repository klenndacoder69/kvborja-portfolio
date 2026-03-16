<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/state";

  const nav = [
    { href: '/home', icon: 'tabler:home', label: 'Home' },
    { href: '/projects', icon: 'tabler:code', label: 'Projects' },
    { href: '/about', icon: 'tabler:user', label: 'About' },
    { href: '/contact', icon: 'tabler:mail', label: 'Contact' },
  ];
</script>

<header class="primary-header center" aria-label="Site header">
  <div class="center">
    <span class="title">Klenn Jakek Borja</span>
    <span class="subtitle">CS Student &amp; Developer</span>
  </div>
</header>

<nav class="primary-nav" aria-label="Primary navigation">
  <ul class="group-ab">
    {#each nav as { href, icon, label }}
      <li>
        <a {href} class="action-button" class:active={page.url.pathname === href} title={label}>
          <Icon class="icon" {icon} width="24" height="24" />
          <span class="text">{label}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .action-button > .text {
    margin-left: 5px;
    font-weight: 600;
    color: var(--text-main);
    font-size: 0.95rem;
  }
  .action-button.active :global(.icon) {
    background-color: var(--text-main);
    color: var(--bg-canvas);
  }
  .action-button.active .text {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
</style>
