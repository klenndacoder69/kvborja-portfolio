<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Unauthenticated from '$lib/Unauthenticated.svelte';
	import '$lib/styles/common.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { introStore } from '$lib/introStore';

	let { children } = $props();

	let isTerminal = $derived(page.url.pathname === '/');

	// Reactive auth state — re-evaluated whenever the store changes or navigation happens
	let isAuthed = $state(false);

	onMount(() => {
		isAuthed = introStore.read();
	});

	onNavigate((navigation) => {
		// Re-check auth on every navigation
		isAuthed = introStore.read();

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
{:else if !isAuthed}
	<!-- Show access-denied screen; no header/footer -->
	<Unauthenticated />
{:else}
	<Header />
	<main style="min-height: 70vh;">
		{@render children()}
	</main>
	<Footer />
{/if}
