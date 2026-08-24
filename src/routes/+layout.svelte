<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Unauthenticated from '$lib/Unauthenticated.svelte';
	import AmbientBackdrop from '$lib/AmbientBackdrop.svelte';
	import '$lib/styles/common.css';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { introStore } from '$lib/introStore';
	import { markTransitionedNavigation } from '$lib/anim/reveal';

	let { children } = $props();

	// page.route.id is always '/' for the root page regardless of base path.
	// This works correctly both locally and on GitHub Pages (/kvborja-portfolio/).
	let isTerminal = $derived(page.route.id === '/');

	// Reactive auth state — re-evaluated on mount and every navigation
	let isAuthed = $state(false);

	const SITE = 'https://klenndacoder69.github.io/kvborja-portfolio';
	const DESCRIPTION =
		'Python Developer and Data Engineer at Bronstein, Gewirtz & Grossman, LLC. ' +
		'UPLB Computer Science graduate, Magna Cum Laude. I build secure systems and full-stack applications.';

	onMount(() => {
		isAuthed = introStore.read();
	});

	onNavigate((navigation) => {
		// Re-check auth on every navigation
		isAuthed = introStore.read();

		// Skip view transition when leaving the terminal
		if (navigation.from?.route.id === '/') return;
		if (!document.startViewTransition) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		// Only reached when a view transition will actually run, so the reveal
		// system and the cross-fade can never both claim the same arrival.
		markTransitionedNavigation();

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
	<meta name="description" content={DESCRIPTION} />
	<meta name="author" content="Klenn Jakek Borja" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Klenn Jakek Borja" />
	<meta property="og:title" content="Klenn Jakek Borja — Python Developer & Data Engineer" />
	<meta property="og:description" content={DESCRIPTION} />
	<meta property="og:url" content={SITE} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Klenn Jakek Borja — Python Developer & Data Engineer" />
	<meta name="twitter:description" content={DESCRIPTION} />
</svelte:head>

{#if isTerminal}
	{@render children()}
{:else if !isAuthed}
	<!-- Access gate; no header/footer, and no ambient layer (it has its own CRT overlay) -->
	<Unauthenticated />
{:else}
	<AmbientBackdrop />
	<Header />
	<main style="min-height: 70vh;">
		{@render children()}
	</main>
	<Footer />
{/if}
