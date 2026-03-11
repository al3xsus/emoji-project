<script>
  export let type = "radio";
  export let group;
  export let value;
  export let label = "";
  export let disabled = false;
  export let theme = "radiobutton";
  export let invert = false; 

  export let off = null;
  export let on = null;

  // default themes
  const themes = {
    radiobutton: { off: "🔘", on: "⚫" },
    circle: { off: "🔴", on: "⭕" },
    green_square: { off: "🟩", on: "✅" },
    blue_square: { off: "🟦", on: "☑️" },
  };

  $: activeOff = off ?? themes[theme]?.off ?? "🔘";
  $: activeOn = on ?? themes[theme]?.on ?? "⚫";

  // Manual Checkbox Logic
  function handleCheckbox(e) {
    if (e.target.checked) {
      group = [...group, value];
    } else {
      group = group.filter((v) => v !== value);
    }
  }
</script>

<label
  class="emoji-input"
  class:disabled
  class:is-inverted={invert}
  style="--emoji-off: '{activeOff}'; --emoji-on: '{activeOn}';"
>
  {#if type === "checkbox"}
    <input
      type="checkbox"
      checked={group.includes(value)}
      on:change={handleCheckbox}
      {disabled}
      {...$$restProps}
    />
  {:else}
    <input type="radio" bind:group {value} {disabled} {...$$restProps} />
  {/if}

  <span class="emoji-text">
    <slot>{label}</slot>
  </span>
</label>

<style>
  .emoji-input {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    padding: 0.4rem 0.6rem;
    border-radius: 8px;
    transition: all 0.2s ease;
    width: fit-content;
    user-select: none;
    gap: 0.5rem;
  }

  .emoji-input:not(.disabled):hover {
    background: var(--glass-bg-hover, rgba(255, 255, 255, 0.1));
  }
  .emoji-input:not(.disabled):active {
    transform: scale(0.96);
  }

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .emoji-text::before {
    display: inline-block;
    width: 1.5em;
    text-align: center;
    font-size: 1.3rem;
    content: var(--emoji-off);
    transition:
      filter 0.2s ease,
      transform 0.2s ease;
  }

  input:checked + .emoji-text::before {
    content: var(--emoji-on);
  }

  .is-inverted input:checked + .emoji-text::before {
    content: var(--emoji-off) !important;
    filter: invert(1);
    transform: scale(1.1);
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
    filter: grayscale(1);
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    filter: grayscale(1);
    pointer-events: none; /* Stops clicks entirely */
  }
</style>
