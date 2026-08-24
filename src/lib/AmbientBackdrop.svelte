<!--
  Ambient cyber backdrop: a slowly drifting grid plus a sweeping scanline,
  both far in the background.

  Rendered only in the authed branch of +layout.svelte — the terminal route
  and the access gate have their own CRT overlays and must not get a second
  animated layer behind them. That scoping is why this is a component rather
  than a body::before rule in common.css.
-->
<div class="ambient" aria-hidden="true">
	<div class="ambient-grid"></div>
	<div class="ambient-scan"></div>
</div>

<style>
	.ambient {
		position: fixed;
		inset: 0;
		/* Paints below all in-flow content but above html's background.
		   FRAGILE: this relies on nothing between <body> and .ambient
		   creating a stacking context. Adding opacity < 1, filter,
		   transform, isolation, will-change or contain to an ancestor
		   pulls this into a nested context and it vanishes behind the
		   page background. (`display: contents` in app.html is safe.) */
		z-index: -1;
		pointer-events: none;
		overflow: hidden;
		/* Confines the oversized grid child and stops its will-change
		   from being hoisted into a page-wide layer. */
		contain: paint style;
		/* Two jobs: (1) keep animated pixels out of .site-header's
		   backdrop-filter sampling region so the blur stays cached,
		   (2) fade out low on the page so long documents don't read as
		   graph paper. The mask lives on the STATIC parent — on an
		   animated child the fade would drift along with the grid. */
		mask-image: linear-gradient(
			to bottom,
			transparent 0,
			transparent 64px,
			#000 180px,
			#000 62%,
			transparent 100%
		);
		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0,
			transparent 64px,
			#000 180px,
			#000 62%,
			transparent 100%
		);
	}

	.ambient-grid {
		position: absolute;
		/* Exactly one tile of slack per side — enough to translate a full
		   tile without exposing an edge. Deliberately not 200%/200%, which
		   would cost ~4x the composited layer memory. */
		inset: calc(-1 * var(--ambient-tile));
		background-image:
			linear-gradient(to right, var(--ambient-line) 1px, transparent 1px),
			linear-gradient(to bottom, var(--ambient-line) 1px, transparent 1px);
		background-size: var(--ambient-tile) var(--ambient-tile);
		animation: ambient-drift 60s linear infinite;
		will-change: transform;
	}

	/* Translating by exactly one tile makes the loop seamless with no
	   keyframe snap. Animating `background-position` instead would repaint
	   the whole layer every frame rather than just re-compositing it.
	   Keep --ambient-tile an integer px: a fractional tile shimmers on
	   fractional-DPR displays and breaks the seamless wrap. */
	@keyframes ambient-drift {
		from {
			transform: translate3d(0, 0, 0);
		}
		to {
			transform: translate3d(var(--ambient-tile), var(--ambient-tile), 0);
		}
	}

	.ambient-scan {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 28vh;
		background: linear-gradient(to bottom, transparent, var(--ambient-scan) 50%, transparent);
		animation: ambient-sweep 18s linear infinite;
		will-change: transform;
	}

	@keyframes ambient-sweep {
		from {
			transform: translate3d(0, -32vh, 0);
		}
		to {
			transform: translate3d(0, 132vh, 0);
		}
	}

	/* One moving layer is plenty on a phone, and it's the battery-cheap choice. */
	@media screen and (max-width: 640px) {
		.ambient-scan {
			display: none;
		}
		.ambient-grid {
			animation-duration: 90s;
		}
	}

	/* Belt; common.css carries the authoritative reduced-motion block. */
	@media (prefers-reduced-motion: reduce) {
		.ambient-grid {
			animation: none;
		}
		.ambient-scan {
			display: none;
		}
	}
</style>
