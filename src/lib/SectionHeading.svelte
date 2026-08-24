<!--
  Numbered section heading: mono index, the global h2 treatment, and a
  hairline rule running to the edge. Styles live in common.css under
  ".section-head" so the accent can be category-coded from the outside.
-->
<script lang="ts">
	let {
		number,
		title,
		accent
	}: {
		/** Two-digit index, e.g. "01". */
		number: string;
		title: string;
		/** Optional category accent, e.g. "var(--cyber-color)". */
		accent?: string;
	} = $props();
</script>

<div class="section-head" style={accent ? `--section-accent: ${accent};` : undefined}>
	<span class="sh-num" aria-hidden="true">{number}</span>
	<h2 class="sh-title">{title}</h2>
	<span class="sh-rule" aria-hidden="true"></span>
</div>
