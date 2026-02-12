<script>
  import GlassCard from '../components/GlassCard.svelte';
</script>

<div class="view-container">
  <h2 class="view-title">🔘 Buttons</h2>
  
  <GlassCard title="Basic Buttons">
    <div class="flex flex-col gap-3">
      <button class="btn btn-primary">✓ Primary Button</button>
      <button class="btn btn-secondary">⚡ Secondary Button</button>
      <button class="btn btn-accent">★ Accent Button</button>
      <button class="btn btn-danger">✗ Danger Button</button>
    </div>
  </GlassCard>

  <GlassCard title="Icon Buttons">
    <div class="flex flex-wrap gap-2">
      <button class="btn-icon" aria-label="Home">🏠</button>
      <button class="btn-icon" aria-label="Settings">⚙️</button>
      <button class="btn-icon" aria-label="Search">🔍</button>
      <button class="btn-icon" aria-label="Favorite">❤️</button>
      <button class="btn-icon" aria-label="Add">➕</button>
      <button class="btn-icon" aria-label="Delete">🗑️</button>
      <button class="btn-icon" aria-label="Download">⬇️</button>
      <button class="btn-icon" aria-label="Upload">⬆️</button>
    </div>
  </GlassCard>

  <GlassCard title="Button Sizes">
    <div class="flex flex-col gap-2 items-start">
      <button class="btn btn-primary btn-sm">📌 Small</button>
      <button class="btn btn-primary">📎 Medium</button>
      <button class="btn btn-primary btn-lg">📋 Large</button>
    </div>
  </GlassCard>
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
