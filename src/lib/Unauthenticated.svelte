<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { introStore } from '$lib/introStore';
  import { onMount } from 'svelte';
  import { page } from '$app/state';

  let visible = $state(false);

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });

  function goToTerminal() {
    goto(resolve('/'));
  }

  function skipAndEnter() {
    introStore.markDone();
    goto(page.url.href, { replaceState: true });
  }
</script>

<!--
  This is an easter egg, not an error. Every visitor who lands here has a
  perfectly good link — they just haven't been through the terminal intro this
  session. So it reads as an invitation with two obvious doors, and both of
  them are prominent.
-->
<div class="wrap" class:visible>
  <div class="scanlines" aria-hidden="true"></div>

  <div class="panel">
    <div class="panel-bar">
      <span class="pb-dot"></span>
      <span class="pb-dot"></span>
      <span class="pb-dot"></span>
      <span class="pb-title">guest@kjbportfolio ~ auth</span>
    </div>

    <div class="panel-body">
      <p class="line">
        <span class="prompt">❯</span> access <span class="dim">--page</span> portfolio
      </p>
      <p class="line result">
        permission denied <span class="dim">(no session)</span>
      </p>

      <h1 class="headline">This portfolio starts at a terminal.</h1>
      <p class="msg">
        There's a small puzzle in there if you want it — or you can walk
        straight in. Either door works.
      </p>

      <div class="actions">
        <button class="btn btn-primary" onclick={goToTerminal}>
          <span class="btn-caret" aria-hidden="true">❯</span>
          Open the terminal
        </button>
        <button class="btn btn-ghost" onclick={skipAndEnter}>
          Skip straight in
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .wrap {
    position: fixed;
    inset: 0;
    z-index: 200;
    background:
      radial-gradient(
        ellipse at 50% 0%,
        color-mix(in srgb, var(--phosphor) 7%, transparent),
        transparent 65%
      ),
      var(--crt-bg-deep);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    font-family: var(--font-crt);
    opacity: 0;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .wrap.visible { opacity: 1; }

  .scanlines {
    position: absolute;
    inset: 0;
    background: var(--scanline);
    pointer-events: none;
    z-index: 1;
  }

  /* ── Panel ── */
  .panel {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 34rem;
    background: color-mix(in srgb, var(--phosphor) 3%, var(--crt-bg));
    border: 1px solid color-mix(in srgb, var(--phosphor) 22%, transparent);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow:
      0 0 0 1px color-mix(in srgb, var(--phosphor) 8%, transparent),
      0 24px 70px -20px color-mix(in srgb, var(--phosphor) 30%, transparent);
  }

  .panel-bar {
    display: flex;
    align-items: center;
    gap: 0.4em;
    padding: 0.65rem 1rem;
    background: color-mix(in srgb, var(--phosphor) 6%, transparent);
    border-bottom: 1px solid color-mix(in srgb, var(--phosphor) 15%, transparent);
  }

  .pb-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--phosphor) 30%, transparent);
    flex-shrink: 0;
  }

  .pb-title {
    margin-left: 0.5em;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    color: color-mix(in srgb, var(--phosphor) 55%, transparent);
  }

  .panel-body {
    padding: 1.6rem 1.75rem 1.75rem;
  }

  /* ── Terminal lines ── */
  .line {
    margin: 0 0 0.4rem;
    font-size: 0.82rem;
    letter-spacing: 0.04em;
    color: color-mix(in srgb, var(--phosphor) 75%, transparent);
  }

  .prompt {
    color: var(--phosphor);
    text-shadow: 0 0 12px var(--phosphor-dim);
  }

  .dim { opacity: 0.5; }

  .result {
    color: #ffb454;
    margin-bottom: 1.5rem;
  }

  /* ── Copy ── */
  .headline {
    margin: 0 0 0.7rem;
    padding: 0;
    border: none;
    text-transform: none;
    font-family: var(--font-crt);
    font-size: clamp(1.15rem, 4vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: var(--phosphor);
    text-shadow: 0 0 22px var(--phosphor-dim);
  }

  .headline::before { display: none; }

  .msg {
    margin: 0 0 1.6rem;
    font-size: 0.85rem;
    line-height: 1.7;
    letter-spacing: 0.02em;
    color: color-mix(in srgb, var(--phosphor) 62%, transparent);
    max-width: 42ch;
  }

  /* ── Actions ── */
  .actions {
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
  }

  .btn {
    font-family: inherit;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.65em 1.35em;
    border-radius: var(--radius-pill);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    transition:
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      box-shadow 0.2s ease,
      transform 0.15s ease;
  }

  .btn:active { transform: translateY(0); }

  .btn-primary {
    border: 1px solid var(--phosphor);
    background: var(--phosphor);
    color: var(--crt-bg-deep);
    box-shadow: 0 0 20px color-mix(in srgb, var(--phosphor) 40%, transparent);
  }

  .btn-primary:hover {
    background: #6bff6b;
    box-shadow: 0 0 32px color-mix(in srgb, var(--phosphor) 65%, transparent);
    transform: translateY(-2px);
  }

  .btn-caret { opacity: 0.65; }

  /* Deliberately readable, not a 30%-opacity afterthought — this is a real
     way in and it should look like one. */
  .btn-ghost {
    border: 1px solid color-mix(in srgb, var(--phosphor) 35%, transparent);
    background: transparent;
    color: color-mix(in srgb, var(--phosphor) 80%, transparent);
  }

  .btn-ghost:hover {
    border-color: var(--phosphor);
    color: var(--phosphor);
    background: color-mix(in srgb, var(--phosphor) 10%, transparent);
    transform: translateY(-2px);
  }
</style>
