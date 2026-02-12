<script>
  import GlassCard from '../components/GlassCard.svelte';
  
  let selectedOption = 'option1';
  let selectedColor = 'blue';
  let selectedSize = 'medium';
</script>

<div class="view-container">
  <h2 class="view-title">🔘 Radio Buttons</h2>
  
  <GlassCard title="Basic Radio Group">
    <div class="flex flex-col gap-2">
      <label class="radio-label">
        <input type="radio" name="basic" value="option1" bind:group={selectedOption} />
        <span class="radio-text">Option 1 ⭐</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="basic" value="option2" bind:group={selectedOption} />
        <span class="radio-text">Option 2 🌟</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="basic" value="option3" bind:group={selectedOption} />
        <span class="radio-text">Option 3 ✨</span>
      </label>
    </div>
    <p class="mt-3 text-secondary">Selected: {selectedOption}</p>
  </GlassCard>

  <GlassCard title="Color Selection">
    <div class="flex flex-col gap-2">
      <label class="radio-label">
        <input type="radio" name="color" value="red" bind:group={selectedColor} />
        <span class="radio-text">🔴 Red</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="color" value="blue" bind:group={selectedColor} />
        <span class="radio-text">🔵 Blue</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="color" value="green" bind:group={selectedColor} />
        <span class="radio-text">🟢 Green</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="color" value="yellow" bind:group={selectedColor} />
        <span class="radio-text">🟡 Yellow</span>
      </label>
    </div>
    <p class="mt-3 text-secondary">Selected color: {selectedColor}</p>
  </GlassCard>

  <GlassCard title="Size Selection">
    <div class="flex flex-col gap-2">
      <label class="radio-label">
        <input type="radio" name="size" value="small" bind:group={selectedSize} />
        <span class="radio-text">📦 Small</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="size" value="medium" bind:group={selectedSize} />
        <span class="radio-text">📫 Medium</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="size" value="large" bind:group={selectedSize} />
        <span class="radio-text">📪 Large</span>
      </label>
    </div>
    <p class="mt-3 text-secondary">Selected size: {selectedSize}</p>
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

  .radio-label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    padding: var(--space-2);
    border-radius: var(--radius-md);
    transition: background var(--transition-fast);
  }

  .radio-label:hover {
    background: var(--glass-bg-hover);
  }

  .radio-text {
    color: var(--text-primary);
    user-select: none;
  }

  input[type="radio"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
</style>
