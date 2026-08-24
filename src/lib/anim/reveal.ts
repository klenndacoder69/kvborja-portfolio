import type { Attachment } from 'svelte/attachments';

/**
 * Staggered scroll-reveal, applied to a CONTAINER via {@attach reveal()}.
 *
 * One IntersectionObserver per container writes a `--reveal-i` index onto the
 * children that just intersected, so the delay ladder collapses to a single
 * calc() in CSS and works for ANY child count. (The previous nth-child ladder
 * stopped at 6, which left cards 7-8 of the 8-card projects grid permanently
 * at opacity: 0.)
 *
 * Safety property: the hidden state and the observer that clears it are written
 * in the same synchronous block, and `--reveal-i` is only ever set on elements
 * this module is actively animating. An element it never touched, or has
 * finished with, has no [data-reveal] attribute and is therefore visible.
 *
 * IMPORTANT: nothing in this module may touch the DOM at module scope.
 * `prerender = true` means it is imported during `vite build`, where `window`
 * does not exist — a module-scope matchMedia() or IntersectionObserver would
 * fail the build, not just the runtime.
 */

export type RevealOptions = {
	/** ms between siblings revealed in the same batch. Default 55. */
	step?: number;
	/** Highest stagger slot, so a 20-card grid never crawls. Default 6. */
	maxIndex?: number;
	/** Extra ms in front of the whole batch. Default 0. */
	lead?: number;
	/** How far inside the viewport before firing, as % of viewport height. Default 12. */
	inset?: number;
	/** Animate the container itself rather than its children. Default false. */
	self?: boolean;
};

const PENDING = 'pending';
const SHOWN = 'in';
const SHOWN_EVENT = 'reveal:shown';

/** A mount this long after a view-transitioned navigation counts as part of it. */
const NAV_WINDOW = 1000;

let runtimeLive = false;
let instantUntil = 0;

/**
 * Called from onNavigate in +layout.svelte, but ONLY for navigations that the
 * root view transition will actually animate. Content arriving inside that
 * cross-fade must not also run a reveal, or opacity multiplies and the 24px
 * slide compounds with the 18px lift.
 */
export function markTransitionedNavigation(): void {
	instantUntil = performance.now() + NAV_WINDOW;
}

function prefersReducedMotion(): boolean {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Hands ownership of the hidden state from the tier-1 CSS gate to this runtime.
 * Must be called only AFTER the pending attributes are written, so no frame
 * exists in which the gate is released and nothing has replaced it.
 */
function goLive(): void {
	if (runtimeLive) return;
	runtimeLive = true;
	document.documentElement.classList.add('reveal-live');
}

function docOrder(a: Element, b: Element): number {
	return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

export function reveal(options: RevealOptions = {}): Attachment<HTMLElement> {
	return (node) => {
		// Attachments never run on the server, so `window` is safe HERE.
		if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
			goLive(); // release the CSS gate; content stays exactly as authored
			return;
		}

		const step = options.step ?? 55;
		const maxIndex = options.maxIndex ?? 6;
		const lead = options.lead ?? 0;
		const inset = options.inset ?? 12;

		const targets: HTMLElement[] = options.self
			? [node]
			: (Array.from(node.children).filter((c) => c instanceof HTMLElement) as HTMLElement[]);

		let observer: IntersectionObserver | null = null;
		let frame = 0;
		const cleanups: Array<() => void> = [];

		node.style.setProperty('--reveal-step', `${step}ms`);

		function show(batch: HTMLElement[]): void {
			batch.sort(docOrder);
			batch.forEach((el, i) => {
				el.style.setProperty('--reveal-i', String(Math.min(i, maxIndex)));
				if (lead) el.style.setProperty('--reveal-lead', `${lead}ms`);
				el.dataset.reveal = SHOWN;
				el.dispatchEvent(new CustomEvent(SHOWN_EVENT)); // wakes nested groups
				observer?.unobserve(el);

				// animationend bubbles, so a card with its own inner animation
				// would otherwise clear this state early. Hence the explicit
				// target check, and hence no { once: true }.
				const done = (e: AnimationEvent) => {
					if (e.target !== el) return;
					el.removeEventListener('animationend', done);
					// Back to plain CSS: drops will-change AND the animation's
					// transform (a lingering non-none transform would create a
					// containing block for any future fixed-position child).
					delete el.dataset.reveal;
					el.style.removeProperty('--reveal-i');
					el.style.removeProperty('--reveal-lead');
				};
				el.addEventListener('animationend', done);
				cleanups.push(() => el.removeEventListener('animationend', done));
			});
		}

		function onIntersect(entries: IntersectionObserverEntry[]): void {
			const batch = entries.filter((e) => e.isIntersecting).map((e) => e.target as HTMLElement);
			if (batch.length === 0) return;

			// IntersectionObserver is purely geometric: an element inside an
			// opacity:0 ancestor still reports isIntersecting. Without this guard
			// a nested group cascades behind its hidden parent and is finished
			// before anyone sees it. Wait for the ancestor to flip instead.
			const blocker = node.parentElement?.closest<HTMLElement>(`[data-reveal="${PENDING}"]`);
			if (blocker) {
				const go = () => show(batch);
				blocker.addEventListener(SHOWN_EVENT, go, { once: true });
				cleanups.push(() => blocker.removeEventListener(SHOWN_EVENT, go));
				return;
			}
			show(batch);
		}

		function arm(): void {
			for (const el of targets) el.dataset.reveal = PENDING;
			goLive(); // order matters: hide first, then release the gate
			observer = new IntersectionObserver(onIntersect, {
				threshold: 0,
				rootMargin: `0px 0px -${inset}% 0px`
			});
			for (const el of targets) observer.observe(el);
		}

		if (performance.now() < instantUntil) {
			// The root view transition is already animating this arrival. Do not
			// hide anything yet — scroll restoration may not have run.
			goLive();
			frame = requestAnimationFrame(() => {
				frame = 0;
				// Layout is settled and SvelteKit has restored scroll. Hiding a
				// container that turns out to be below the fold is free: a
				// hide-flash cannot be perceived on off-screen content.
				if (node.getBoundingClientRect().top <= window.innerHeight * 0.9) return;
				arm();
			});
		} else {
			arm();
		}

		return () => {
			if (frame) cancelAnimationFrame(frame);
			observer?.disconnect();
			observer = null;
			for (const fn of cleanups) fn();
			cleanups.length = 0;
		};
	};
}
