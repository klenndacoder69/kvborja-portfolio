<script lang="ts">
  import Icon from "@iconify/svelte";

  const links = [
    { icon: 'tabler:brand-github',   label: 'GitHub',   url: 'https://github.com/',    hint: 'github.com/yourhandle' },
    { icon: 'tabler:brand-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/',  hint: 'linkedin.com/in/yourname' },
    { icon: 'tabler:mail',           label: 'Email',    url: 'mailto:you@example.com', hint: 'you@example.com' },
  ];
</script>

<svelte:head>
  <title>Contact — Klenn Jakek Borja</title>
</svelte:head>

<div class="page">
  <div>
    <h1>Contact</h1>
    <p class="lead" style="margin-top:0.75em;">
      Open to internships, collaborations, or just chatting about tech.
    </p>
  </div>

  <div class="cardset stagger" style="max-width:32rem;">
    {#each links as { icon, label, url, hint }}
      <a href={url} target="_blank" rel="noopener" class="card-anchor" style="display:flex;align-items:center;gap:1.1em;padding:1.2em 1.5em;">
        <span class="action-button" style="pointer-events:none;">
          <Icon {icon} width="28" height="28" class="icon" />
        </span>
        <div>
          <div style="font-weight:700;font-size:1.05em;">{label}</div>
          <div style="font-size:0.85em;opacity:0.55;margin-top:0.1em;">{hint}</div>
        </div>
        <Icon icon="tabler:arrow-up-right" width="16" height="16" style="margin-left:auto;opacity:0.35;" />
      </a>
    {/each}
  </div>
</div>
