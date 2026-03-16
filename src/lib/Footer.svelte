<script>
  import Icon from "@iconify/svelte";
  let year = new Date().getFullYear();
</script>

<footer class="content-layout center">
  <div style="display: flex; align-items: center; gap: 0.75em; flex-wrap: wrap; justify-content: center; padding: 1.5rem 0; border-top: 1px solid var(--palette-gray-transparent);">
    <span>&copy; {year} Klenn Jakek Borja</span>
    <span style="opacity:0.4;">·</span>
    <a href="https://github.com/" target="_blank" rel="noopener" class="action-button" title="GitHub">
      <Icon icon="tabler:brand-github" width="20" height="20" class="icon" />
    </a>
    <a href="https://linkedin.com/" target="_blank" rel="noopener" class="action-button" title="LinkedIn">
      <Icon icon="tabler:brand-linkedin" width="20" height="20" class="icon" />
    </a>
  </div>
</footer>
