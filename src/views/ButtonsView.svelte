<script>
  import GlassCard from "../components/GlassCard.svelte";
  import ViewContainer from "../components/ViewContainer.svelte";
  import EmojiButton from "../components/EmojiButton.svelte"; // Assuming this is the name

  const randomEmojis = [
    { emoji: "✅", label: "Success" },
    { emoji: "❌", label: "Error" },
    { emoji: "🔍", label: "Search" },
    { emoji: "💡", label: "Idea" },
    { emoji: "📅", label: "Schedule" },
    { emoji: "🗑️", label: "Delete" },
    { emoji: "📌", label: "Pin" },
    { emoji: "⭐", label: "Favorite" },
    { emoji: "🔔", label: "Notification" },
    { emoji: "🚀", label: "Launch" },
    { emoji: "⚙️", label: "Settings" },
    { emoji: "📁", label: "Folder" },
    { emoji: "📧", label: "Email" },
    { emoji: "💬", label: "Message" },
  ];

  const randomEmojisV2 = [
    { emoji: "🏠", label: "Home" },
    { emoji: "👤", label: "Profile" },
    { emoji: "🔒", label: "Security" },
    { emoji: "⚡", label: "Action" },
    { emoji: "📈", label: "Analytics" },
    { emoji: "🛠️", label: "Tools" },
    { emoji: "🔗", label: "Link" },
    { emoji: "🎁", label: "Offer" },
    { emoji: "💬", label: "Support" },
    { emoji: "📷", label: "Media" },
    { emoji: "🗺️", label: "Location" },
    { emoji: "🏆", label: "Achievement" },
    { emoji: "⏳", label: "History" },
    { emoji: "📜", label: "Document" }
  ];

  const getTheme = (i) => 
    i < 4 ? "btn-primary" : 
    i < 8 ? "btn-secondary" : 
    i < 12 ? "btn-accent" : "btn-danger";
</script>

<ViewContainer title="Buttons">
  
  <GlassCard title="Basic Buttons">
    <div class="flex flex-row gap-3 mb-1">
      <EmojiButton text="Add" icon="🖊️" class="btn-primary" />
      <EmojiButton text="Edit" icon="🖋️" class="btn-secondary" />
      <EmojiButton text="Settings" icon="🎛️" class="btn-accent" />
      <EmojiButton text="Ask AI" icon="🤖" class="btn-accent" />
      <EmojiButton text="Print" icon="🖨️" class="btn-accent" />
      <EmojiButton text="Delete" icon="🗑️" class="btn-danger" />
    </div>
  </GlassCard>

  <GlassCard title="Rounded basic Buttons">
    <div class="flex flex-row gap-3 mb-1">
      <EmojiButton text="Add" icon="✒️" class="btn-primary rounded" reverse={true} />
      <EmojiButton text="Edit" icon="✏️" class="btn-secondary rounded" reverse={true} />
      <EmojiButton text="Settings" icon="⚙️" class="btn-accent rounded" reverse={true} />
      <EmojiButton text="Save" icon="💾" class="btn-accent rounded" reverse={true} />
      <EmojiButton text="Favorite" icon="⭐" class="btn-accent rounded" reverse={true} />
      <EmojiButton text="Delete" icon="❌" class="btn-danger rounded" reverse={true} />
    </div>
  </GlassCard>

  <GlassCard title="Icon Buttons">
    <div class="flex flex-wrap gap-2">
      {#each randomEmojis as item, i}
        <EmojiButton 
          icon={item.emoji} 
          title={item.label} 
          iconBtn={true} 
          class={getTheme(i)} 
        />
      {/each}
    </div>
  </GlassCard>

  <GlassCard title="Rounded Icon Buttons">
    <div class="flex flex-wrap gap-2">
      {#each randomEmojisV2 as item, i}
        <EmojiButton 
          icon={item.emoji} 
          title={item.label} 
          iconBtn={true} 
          class="{getTheme(i)} rounded" 
        />
      {/each}
    </div>
  </GlassCard>

  <GlassCard title="Button Sizes">
    <div class="flex flex-row gap-2 items-start">
      <EmojiButton text="XS" icon="📌" class="btn-primary btn-xs" reverse={true} />
      <EmojiButton text="SM" icon="🔕" class="btn-primary btn-sm" reverse={true} />
      <EmojiButton text="MD" icon="📎" class="btn-primary btn-md" reverse={true} />
      <EmojiButton text="LG" icon="💻" class="btn-primary btn-lg" reverse={true} />
      <EmojiButton text="XL" icon="🗃️" class="btn-primary btn-xl" reverse={true} />
    </div>
  </GlassCard>
</ViewContainer>