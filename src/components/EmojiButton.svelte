<script>
    import EmojiIcon from "./EmojiIcon.svelte";
    
    export let icon = "🆗";
    export let text = "";
    export let iconBtn = false; 
    export let reverse = false;
    
    export let title = "";
    export let ariaLabel = text || title || (iconBtn ? "icon button" : "button");
    
    let className = "";
    export { className as class };
  </script>
  
  <button 
    class="{className}" 
    class:btn={!iconBtn} 
    class:btn-icon={iconBtn}
    class:flex-reverse={reverse}
    aria-label={ariaLabel} 
    {title}
    {...$$restProps}
  >
    {#if text && !iconBtn}
      <span class="btn-text">{text}</span>
    {/if}
    
    <EmojiIcon {icon} deco={true} />
  </button>
  
  <style>
    button {
      transition: all var(--transition-fast, 150ms);
    }
  
    .flex-reverse {
      flex-direction: row-reverse;
    }
  
    .btn-text {
      line-height: 1;
    }
  </style>