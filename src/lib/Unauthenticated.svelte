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

<div class="wrap" class:visible>
  <div class="inner">
    <p class="label">ACCESS DENIED</p>
    <p class="msg">You still haven't logged in.</p>
    <div class="actions">
      <button class="btn-terminal" onclick={goToTerminal}>Go to terminal</button>
      <button class="btn-skip" onclick={skipAndEnter}>Skip intro</button>
    </div>
  </div>
</div>

<style>
  .wrap {
    position: fixed;
    inset: 0;
    z-index: 200;
    background: #050805;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Courier New', 'Lucida Console', monospace;
    opacity: 0;
    transition: opacity 0.35s ease;
  }
  .wrap.visible { opacity: 1; }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    text-align: center;
  }

  .label {
    margin: 0;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #ff333366;
  }

  .msg {
    margin: 0;
    font-size: 1rem;
    color: #33ff3388;
    letter-spacing: 0.04em;
  }

  .actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Primary — terminal */
  .btn-terminal {
    font-family: inherit;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.5em 1.3em;
    border-radius: 9999em;
    border: none;
    background: #33ff33;
    color: #050805;
    cursor: pointer;
    box-shadow: 0 0 16px rgba(51,255,51,0.35);
    transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
  }
  .btn-terminal:hover {
    background: #5fff5f;
    box-shadow: 0 0 26px rgba(51,255,51,0.6);
    transform: translateY(-2px);
  }
  .btn-terminal:active { transform: translateY(0); }

  /* Ghost — skip */
  .btn-skip {
    font-family: inherit;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.5em 1.1em;
    border-radius: 9999em;
    border: 1px solid rgba(51,255,51,0.15);
    background: transparent;
    color: #33ff3348;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
  }
  .btn-skip:hover {
    border-color: rgba(51,255,51,0.4);
    color: #33ff3399;
    transform: translateY(-2px);
  }
  .btn-skip:active { transform: translateY(0); }
</style>
