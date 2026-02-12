<script>
  import GlassCard from '../components/GlassCard.svelte';
  
  let textInput = '';
  let emailInput = '';
  let passwordInput = '';
  let textareaInput = '';
  let numberInput = 50;
  let rangeInput = 50;
  let checkboxes = {
    option1: true,
    option2: false,
    option3: true
  };
</script>

<div class="view-container">
  <h2 class="view-title">📝 Input Fields</h2>
  
  <GlassCard title="Text Inputs">
    <div class="flex flex-col gap-3">
      <div class="input-group">
        <label for="text">📛 Name</label>
        <input id="text" type="text" bind:value={textInput} placeholder="Enter your name" />
      </div>
      
      <div class="input-group">
        <label for="email">📧 Email</label>
        <input id="email" type="email" bind:value={emailInput} placeholder="your@email.com" />
      </div>
      
      <div class="input-group">
        <label for="password">🔒 Password</label>
        <input id="password" type="password" bind:value={passwordInput} placeholder="••••••••" />
      </div>
    </div>
  </GlassCard>

  <GlassCard title="Textarea">
    <div class="input-group">
      <label for="textarea">💬 Message</label>
      <textarea id="textarea" bind:value={textareaInput} placeholder="Type your message here..." rows="4"></textarea>
    </div>
  </GlassCard>

  <GlassCard title="Number & Range">
    <div class="flex flex-col gap-3">
      <div class="input-group">
        <label for="number">🔢 Number ({numberInput})</label>
        <input id="number" type="number" bind:value={numberInput} min="0" max="100" />
      </div>
      
      <div class="input-group">
        <label for="range">🎚️ Range ({rangeInput})</label>
        <input id="range" type="range" bind:value={rangeInput} min="0" max="100" />
      </div>
    </div>
  </GlassCard>

  <GlassCard title="Checkboxes">
    <div class="flex flex-col gap-2">
      <label class="checkbox-label">
        <input type="checkbox" bind:checked={checkboxes.option1} />
        <span>✅ Enable notifications</span>
      </label>
      <label class="checkbox-label">
        <input type="checkbox" bind:checked={checkboxes.option2} />
        <span>📨 Subscribe to newsletter</span>
      </label>
      <label class="checkbox-label">
        <input type="checkbox" bind:checked={checkboxes.option3} />
        <span>🔔 Allow sounds</span>
      </label>
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

  .input-group {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .input-group label {
    font-weight: 500;
    color: var(--text-primary);
    font-size: var(--text-sm);
  }

  .input-group input,
  .input-group textarea {
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: var(--radius-md);
    padding: var(--space-2) var(--space-3);
    color: var(--text-primary);
    font-size: var(--text-base);
    transition: all var(--transition-fast);
    font-family: inherit;
  }

  .input-group input:focus,
  .input-group textarea:focus {
    outline: none;
    border-color: var(--input-border-focus);
    background: var(--input-bg-focus);
  }

  .input-group input::placeholder,
  .input-group textarea::placeholder {
    color: var(--text-tertiary);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    cursor: pointer;
    padding: var(--space-2);
    border-radius: var(--radius-md);
    transition: background var(--transition-fast);
  }

  .checkbox-label:hover {
    background: var(--glass-bg-hover);
  }

  .checkbox-label span {
    color: var(--text-primary);
    user-select: none;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  input[type="range"] {
    width: 100%;
  }
</style>
