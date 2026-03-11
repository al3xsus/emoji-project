<script>
  export let title = "";
</script>

<div class="view-container">
  {#if title}
  <h2 class="view-title">{title}</h2>
  {/if}
  <slot />
</div>

<style>
  .view-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .view-title {
    font-size: var(--text-2xl);
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 var(--space-2) 0;
  }
</style>
