<script>
  import { theme } from '../stores/theme.js';

  function toggleTheme() {
    theme.update(current => current === 'dark' ? 'light' : 'dark');
  }
</script>

<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
  {#if $theme === 'dark'}
    <span class="icon">☀️</span>
  {:else}
    <span class="icon">🌙</span>
  {/if}
</button>

<style>
  .theme-toggle {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-full);
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-normal);
    padding: 0;
  }

  .theme-toggle:hover {
    border-color: var(--glass-border-hover);
    transform: scale(1.05);
  }

  .theme-toggle:active {
    transform: scale(0.95);
  }

  .icon {
    font-size: 24px;
    line-height: 1;
  }
</style>
