<script>
  import ViewContainer from "../components/ViewContainer.svelte";
  import GlassCard from "../components/GlassCard.svelte";
  import EmojiIcon from "../components/EmojiIcon.svelte";

  const emojiData = [
    { emoji: "🚀", label: "Rocket" },
    { emoji: "⚽", label: "Ball" },
    { emoji: "🧬", label: "DNA" },
    { emoji: "🎲", label: "Game Die" },
    { emoji: "🧭", label: "Compass" },
    { emoji: "🎛️", label: "Control knobs" },
    { emoji: "🥘", label: "Pan of food" },
    { emoji: "🕸️", label: "Spider web" },
    { emoji: "☀️", label: "Sun" },
    { emoji: "💡", label: "Light Bulb" },
    { emoji: "🌸", label: "Cherry blossom" },
    { emoji: "🤖", label: "Robot" },
    { emoji: "☕", label: "Hot beverage" },
  ];

  const sizes = ["sym-xs", "sym-sm", "sym-md", "sym-lg", "sym-xl"];
  const filters = ["monochrome", "vintage", "zero-contrast", "zero-brightness"];
</script>

<ViewContainer title="Icons">
  
  <GlassCard title="Basic">
    <div class="flex flex-row flex-wrap gap-3 mb-1">
      {#each emojiData as item}
        <EmojiIcon 
          icon={item.emoji} 
          title={item.label} 
          class="sym-md" 
        />
      {/each}
    </div>
  </GlassCard>

  {#each filters as filterName}
    <GlassCard title={filterName.charAt(0).toUpperCase() + filterName.slice(1)}>
      <div class="flex flex-row flex-wrap gap-3 mb-1">
        {#each emojiData as item}
          <EmojiIcon
            icon={item.emoji}
            deco={true}
            class="{filterName} sym-md"
          />
        {/each}
      </div>
    </GlassCard>
  {/each}

  <GlassCard title="Sizes">
    <div class="flex flex-row flex-wrap gap-4 items-end mb-1">
      {#each emojiData as item, index}
        <EmojiIcon
          icon={item.emoji}
          title="Size: {sizes[Math.floor((index / emojiData.length) * sizes.length)]}"
          class={sizes[Math.floor((index / emojiData.length) * sizes.length)]}
        />
      {/each}
    </div>
  </GlassCard>

  <GlassCard title="Animated">
    <div class="flex flex-row flex-wrap gap-3 mb-1">
      {#each emojiData as item}
        <EmojiIcon
          icon={item.emoji}
          deco={true}
          class="sym-md sym-spin"
        />
      {/each}
    </div>
  </GlassCard>

</ViewContainer>