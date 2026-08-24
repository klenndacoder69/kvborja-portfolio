/**
 * Theme preference: 'system' follows the OS, 'light'/'dark' override it.
 *
 * The stored choice is applied to <html data-theme> by the inline script in
 * src/app.html before first paint — this module only keeps the UI in sync and
 * writes changes. It must never be the thing that first applies the theme, or
 * every load flashes the wrong palette.
 */

export type Theme = 'light' | 'dark' | 'system';

const KEY = 'theme';

let current = $state<Theme>('system');

function persist(value: Theme): void {
	try {
		if (value === 'system') localStorage.removeItem(KEY);
		else localStorage.setItem(KEY, value);
	} catch {
		/* private mode / blocked storage — the in-memory choice still applies */
	}
}

function apply(value: Theme): void {
	const root = document.documentElement;
	if (value === 'system') root.removeAttribute('data-theme');
	else root.setAttribute('data-theme', value);
}

export const theme = {
	get value(): Theme {
		return current;
	},

	/** Read back what the inline script already applied. Call from onMount. */
	init(): void {
		try {
			const stored = localStorage.getItem(KEY);
			current = stored === 'dark' || stored === 'light' ? stored : 'system';
		} catch {
			current = 'system';
		}
	},

	set(value: Theme): void {
		current = value;
		apply(value);
		persist(value);
	},

	/** system → light → dark → system */
	cycle(): void {
		theme.set(current === 'system' ? 'light' : current === 'light' ? 'dark' : 'system');
	}
};
