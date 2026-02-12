<script>
  // Accept title and optional props
  export let title = '';
  export let noPadding = false;
</script>

<div class="glass-card" class:no-padding={noPadding}>
  {#if title}
    <h3 class="glass-card-title">{title}</h3>
  {/if}
  <slot />
</div>

<style>
  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    box-shadow: var(--shadow-glass);
    transition: all var(--transition-normal);
  }

  .glass-card.no-padding {
    padding: 0;
  }

  .glass-card:hover {
    border-color: var(--glass-border-hover);
    box-shadow: var(--shadow-glass-hover);
  }

  .glass-card-title {
    margin: 0 0 var(--space-3) 0;
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--text-primary);
  }
</style>
