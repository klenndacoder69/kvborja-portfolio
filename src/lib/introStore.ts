/**
 * introStore.ts
 * Tracks whether the terminal intro has been completed or skipped.
 * Uses sessionStorage so it resets on each new browser session (fresh tab/window),
 * but survives client-side navigation within the same session.
 */

const SESSION_KEY = 'intro_done';

function createIntroStore() {
  // On the server (SSR/prerender) sessionStorage doesn't exist — default to false.
  function read(): boolean {
    if (typeof sessionStorage === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) === '1';
  }

  function markDone() {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(SESSION_KEY, '1');
    }
  }

  return { read, markDone };
}

export const introStore = createIntroStore();
