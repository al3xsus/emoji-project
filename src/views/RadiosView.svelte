<script>
  import GlassCard from "../components/GlassCard.svelte";
  import ViewContainer from "../components/ViewContainer.svelte";
  import EmojiInput from "../components/EmojiInput.svelte"; 
  import radioOptions from "../utils/options";

  // State variables
  let normalRadio = "option-2";
  let japaneseStyle = "option-3";
  let monochromeStyle = "option-1"

</script>

<ViewContainer title="Radio Buttons">
  <GlassCard title="Normal radios (🔘 and inverted 🔘)">
    <div class="flex flex-col gap-1">
      {#each radioOptions as item}
        <EmojiInput
          invert={true}
          value={item.val}
          bind:group={normalRadio}
          label={item.lab}
        />
      {/each}
      <EmojiInput
        theme="radiobutton"
        value="option-4"
        bind:group={normalRadio}
        disabled={true}
        label="Option 4 (disabled)"
      />
    </div>
  </GlassCard>

  <GlassCard title="Japanese style (🔴 and ⭕)">
    <div class="flex flex-row flex-wrap gap-2">
      {#each radioOptions as item}
        <EmojiInput
        theme="circle"
          value={item.val}
          bind:group={japaneseStyle}
          label={item.lab}
        />
      {/each}
    </div>
  </GlassCard>

  <GlassCard title="Monochrome (⚪ and ⚫)">
    <div class="flex flex-col gap-1">
      {#each radioOptions as item}
        <EmojiInput
          off="⚪"
          on="⚫"
          value={item.val}
          bind:group={monochromeStyle}
          label={item.lab}
        />
      {/each}
    </div>
  </GlassCard>
</ViewContainer>

<style>
</style>
