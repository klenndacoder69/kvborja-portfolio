<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '$lib/styles/common.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();
	let isTerminal = $derived(page.url.pathname === '/');

	onNavigate((navigation) => {
		// Skip view transition when leaving the terminal
		if (navigation.from?.url.pathname === '/') return;
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if isTerminal}
	{@render children()}
{:else}
	<div class="center-v">
		<Header />
		<main style="min-height: 70vh;">
			{@render children()}
		</main>
		<Footer />
	</div>
{/if}
