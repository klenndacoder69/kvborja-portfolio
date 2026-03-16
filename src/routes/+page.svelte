<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  type Phase = 'init' | 'prompt' | 'password' | 'auth' | 'exiting' | 'exiting2';

  let phase = $state<Phase>('init');
  let lines = $state<string[]>([]);
  let input = $state('');
  let cursorOn = $state(true);
  let titleVisible = $state(false);
  let termVisible = $state(false);
  let exiting = $state(false);
  let chmodDone = $state(false); // tracks whether secret.txt has been chmod'd
  let failedAttempts = $state(0); // counts failed su attempts

  let termEl: HTMLDivElement;

  const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

  function scrollBottom() {
    setTimeout(() => termEl?.scrollTo({ top: termEl.scrollHeight }), 0);
  }

  async function addLine(text: string, delay = 0) {
    if (delay) await sleep(delay);
    lines.push(text);
    scrollBottom();
  }

  async function boot() {
    await addLine('[ OK ] Started kjbportfolio.service', 320);
    await addLine('[ OK ] Reached target network.target', 240);
    await addLine('[ OK ] Reached target multi-user.target', 200);
    await addLine('', 80);
    await addLine('kjbportfolio v1.0.0  (tty1)', 300);
    await addLine('', 120);
    await addLine('kjbportfolio login: hello', 480);
    await addLine('', 80);
    phase = 'prompt';
  }

  function handleKey(e: KeyboardEvent) {
    if (phase !== 'prompt' && phase !== 'password') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      input = input.slice(0, -1);
    } else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      input += e.key;
    }
  }

  async function submit() {
    if (phase === 'prompt') {
      const raw = input.trim();
      lines.push(`hello@kjbportfolio:~$ ${raw}`);
      input = '';
      scrollBottom();

      const [cmd, ...args] = raw.split(/\s+/);
      const arg = args.join(' ');

      if (cmd === 'ls') {
        if (arg === '-la'){
            lines.push('total 1');
            if (chmodDone) {
                lines.push('-rw-r--r-- 1 hello hello 32 Mar 16 19:00 secret.txt');
            } else {
                lines.push('---------- 1 hello hello 32 Mar 16 19:00 secret.txt');
            }
            lines.push('');
        }
        if (chmodDone) {
          lines.push('-rw-r--r--  hello  secret.txt');
        } else {
          lines.push('----------  hello  secret.txt');
        }
        lines.push('');

      } else if (cmd === 'cat') {
        if (arg === 'secret.txt') {
          if (!chmodDone) {
            lines.push('cat: secret.txt: Permission denied');
          } else {
            lines.push('password: world');
          }
        } else if (arg === '') {
          lines.push('Usage: cat <file>');
        } else {
          lines.push(`cat: ${arg}: No such file or directory`);
        }
        lines.push('');

      } else if (cmd === 'chmod') {
        // accept any chmod variant targeting secret.txt
        if (arg.includes('secret.txt')) {
          chmodDone = true;
          lines.push('');
        } else if (arg === '') {
          lines.push('Usage: chmod <mode> <file>');
          lines.push('');
        } else {
          lines.push(`chmod: cannot access '${arg.split(' ').pop()}': No such file or directory`);
          lines.push('');
        }

      } else if (cmd === 'su') {
        phase = 'password';

      } else if (cmd === 'help') {
        lines.push('Available commands: ls, cat, chmod, su, clear, help');
        lines.push('');

      } else if (cmd === 'clear') {
        lines = [];

      } else if (raw !== '') {
        lines.push(`bash: ${cmd}: command not found`);
        lines.push('');
      }

      scrollBottom();

    } else if (phase === 'password') {
      const pwd = input;
      lines.push('Password:');
      input = '';
      scrollBottom();
      if (pwd === 'world') {
        await authSuccess();
      } else {
        await sleep(200);
        lines.push('su: Authentication failure');
        lines.push('');
        phase = 'prompt';
        scrollBottom();
        failedAttempts += 1;
      }
    }
  }

  async function authSuccess() {
    phase = 'auth';
    await sleep(200);
    lines.push('');
    await addLine('[ OK ] Authentication successful.', 400);
    await addLine('[ OK ] Welcome, Klenn.', 500);
    await addLine('[ ✓  ] Initializing portfolio...', 500);
    await sleep(900);
    phase = 'exiting';
    await sleep(700);
    phase = 'exiting2';
    exiting = true;
    await sleep(800);
    goto(resolve('/home'));
  }

  // Hint message based on current state
  let hint = $derived(
    phase === 'password'   ? 'enter the password and press Enter' :  
    phase === 'exiting2' ? 'welcome to my world.' :
    phase === 'auth' || phase === 'exiting' ? 'authenticating…' : 
    // after 2 failed su attempts, start hinting about chmod if not done yet
    (phase === 'prompt' && failedAttempts >= 2 && !chmodDone) ? 'maybe there’s a hidden file with clues? try ls -la' :
    'you know what to do.'
  );

  onMount(() => {
    const blink = setInterval(() => { cursorOn = !cursorOn; }, 530);
    (async () => {
      titleVisible = true;
      await sleep(900);
      termVisible = true;
      await sleep(650);
      await boot();
    })();
    return () => clearInterval(blink);
  });
</script>

<svelte:window onkeydown={handleKey} />

<svelte:head>
  <title>kjbportfolio — login</title>
</svelte:head>

<div class="screen" class:exiting>
  <!-- CRT scanline overlay -->
  <div class="scanlines" aria-hidden="true"></div>

  <div class="name-block" class:visible={titleVisible}>
    <div class="name">Klenn Jakek Borja</div>
    <div class="tagline">Aspiring Cybersecurity Engineer</div>
  </div>

  <div class="sep" class:visible={termVisible}></div>

  <div class="term-wrap" class:visible={termVisible}>
    <div class="term" bind:this={termEl}>
      {#each lines as line}
        <div class="tl">{line || '\u00A0'}</div>
      {/each}

      {#if phase === 'prompt'}
        <div class="tl">
          <span class="pr">hello@kjbportfolio:~$&nbsp;</span><span>{input}</span><span class="cur" class:off={!cursorOn}>█</span>
        </div>
      {:else if phase === 'password'}
        <div class="tl">
          <span class="pr">Password:&nbsp;</span><span>{'•'.repeat(input.length)}</span><span class="cur" class:off={!cursorOn}>█</span>
        </div>
      {:else if phase === 'auth' || phase === 'exiting'}
        <div class="tl"><span class="cur" class:off={!cursorOn}>█</span></div>
      {/if}
    </div>

    <div class="hint">{hint}</div>
  </div>

  <a href={resolve('/home')} class="skip">skip intro →</a>
</div>

<style>
  :global(body) { margin: 0; overflow: hidden; }

  .screen {
    position: fixed;
    inset: 0;
    background: #0a0d0a;
    color: #33ff33;
    font-family: 'Courier New', 'Lucida Console', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: 2rem;
    overflow: hidden;
    transition: opacity 0.8s ease;
  }
  .screen.exiting { opacity: 0; }

  /* ── scanlines ── */
  .scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px, transparent 3px,
      rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px
    );
    pointer-events: none;
    z-index: 10;
  }

  /* ── name ── */
  .name-block {
    text-align: center;
    opacity: 0;
    transform: translateY(-18px);
    transition: opacity 0.9s ease, transform 0.9s ease;
    z-index: 1;
  }
  .name-block.visible { opacity: 1; transform: none; }

  .name {
    font-size: clamp(1.8rem, 5vw, 3.6rem);
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    text-shadow:
      0 0 20px rgba(51,255,51,0.55),
      0 0 60px rgba(51,255,51,0.2);
  }
  .tagline {
    font-size: 0.82rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #33ff3380;
    margin-top: 0.45rem;
  }

  /* ── separator ── */
  .sep {
    width: 0;
    height: 1px;
    background: #33ff3340;
    transition: width 0.9s ease 0.15s;
    max-width: 640px;
    z-index: 1;
  }
  .sep.visible { width: min(640px, 100%); }

  /* ── terminal ── */
  .term-wrap {
    width: 100%;
    max-width: 640px;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s;
    z-index: 1;
  }
  .term-wrap.visible { opacity: 1; transform: none; }

  .term {
    background: #050705;
    border: 1px solid #33ff3335;
    border-radius: 6px;
    padding: 1rem 1.25rem;
    min-height: 200px;
    max-height: 290px;
    overflow-y: auto;
    font-size: 0.875rem;
    line-height: 1.75;
    scrollbar-width: thin;
    scrollbar-color: #33ff3325 transparent;
  }

  .tl { white-space: pre-wrap; word-break: break-all; }
  .pr { color: #33ff33; font-weight: bold; }
  .cur { color: #33ff33; }
  .cur.off { opacity: 0; }

  /* ── hints ── */
  .hint {
    margin-top: 0.55rem;
    text-align: center;
    font-size: 0.75rem;
    color: #33ff3355;
    min-height: 1.4em;
    letter-spacing: 0.04em;
  }
  kbd {
    background: rgba(51,255,51,0.1);
    border: 1px solid rgba(51,255,51,0.3);
    border-radius: 3px;
    padding: 0.05em 0.4em;
    font-family: inherit;
  }

  /* ── skip ── */
  .skip {
    position: fixed;
    bottom: 1.5rem;
    right: 1.75rem;
    font-size: 0.72rem;
    color: #33ff3340;
    text-decoration: none;
    letter-spacing: 0.12em;
    transition: color 0.2s;
    z-index: 20;
  }
  .skip:hover { color: #33ff33; }
</style>
