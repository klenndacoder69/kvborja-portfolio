<script>
  import Icon from "@iconify/svelte";
  let year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="footer-inner content-layout">
    <div class="footer-left">
      <span class="footer-mono">kjb·portfolio</span>
      <span class="footer-copy">© {year} Klenn Jakek Borja</span>
    </div>
    <div class="footer-links">
      <a href="https://github.com/klenndacoder69" target="_blank" rel="noopener" class="footer-link" title="GitHub" id="footer-github">
        <Icon icon="tabler:brand-github" width="17" height="17" />
        GitHub
      </a>
      <a href="https://linkedin.com/in/borjaklenn" target="_blank" rel="noopener" class="footer-link" title="LinkedIn" id="footer-linkedin">
        <Icon icon="tabler:brand-linkedin" width="17" height="17" />
        LinkedIn
      </a>
      <a href="mailto:borja.klenn@gmail.com" class="footer-link" title="Email" id="footer-email">
        <Icon icon="tabler:mail" width="17" height="17" />
        Email
      </a>
    </div>
  </div>
</footer>

<style>
  .site-footer {
    border-top: 1px solid var(--border);
    padding: 1.5rem 0;
  }

  .footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .footer-mono {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--green);
    letter-spacing: 0.05em;
  }

  .footer-copy {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .footer-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35em;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    padding: 0.35em 0.7em;
    border-radius: 9999em;
    transition: color 180ms ease, background 180ms ease;
  }

  .footer-link:hover {
    color: var(--green);
    background: var(--green-soft);
  }
</style>
