<script>
  import GlassCard from "../components/GlassCard.svelte";
  import ViewContainer from "../components/ViewContainer.svelte";
  import EmojiInput from "../components/EmojiInput.svelte";
  import checkBoxOptions from "../utils/options";

  // State variables
  let blueSquare = [];
  let greenSquare = [];
  let checkCrossMark = [];
</script>

<ViewContainer title="Checkboxes">
  <GlassCard title="Blue squares (🟦 and ☑️)">
    <div class="flex flex-col gap-1">
      {#each checkBoxOptions as item}
        <EmojiInput
          type="checkbox"
          theme="blue_square"
          value={item.val}
          bind:group={blueSquare}
          label={item.lab}
        />
      {/each}
      <EmojiInput
        type="checkbox"
        theme="blue_square"
        value={"option-4"}
        bind:group={blueSquare}
        label={"Option 4 - disabled"}
        disabled={true}
      />
    </div>
  </GlassCard>

  <GlassCard title="Green squares (🟩 and ✅)">
    <div class="flex flex-row gap-1">
      {#each checkBoxOptions as item}
        <EmojiInput
          type="checkbox"
          theme="green_square"
          value={item.val}
          bind:group={greenSquare}
          label={item.lab}
        />
      {/each}
    </div>
  </GlassCard>

  <GlassCard title="Checkmark and crossmark (✔️ and ❌)">
    <div class="flex flex-col gap-1">
      {#each checkBoxOptions as item}
        <EmojiInput
          type="checkbox"
          on="✔️"
          off="❌"
          value={item.val}
          bind:group={checkCrossMark}
          label={item.lab}
        />
      {/each}
    </div>
  </GlassCard>
</ViewContainer>

<style>
</style>
