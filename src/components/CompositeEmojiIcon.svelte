<script>
  import EmojiIcon from "./EmojiIcon.svelte";

    let { 
      base = "🔔", 
      overlay = "🔴", 
      position = "top-right" // Options: top-right, top-left, bottom-right, bottom-left
    } = $props();
  </script>
  
  <div class="composite-icon">
    <EmojiIcon icon={base} deco={true} styling="base-emoji sym-md" />

    <span class="overlay-emoji {position} sym-xs">
      {overlay}
    </span>
  </div>
  
  <style>
    .composite-icon {
      position: relative;
      display: inline-flex;
      line-height: 1;
      user-select: none;
    }
  
    .overlay-emoji {
      position: absolute;
      pointer-events: none;
    }
  
    /* Position Logic */
    .top-left { top: -5%; left: -5%; }
    .top-right { top: -5%; right: -5%; }
    .bottom-left { bottom: -5%; left: -5%; }
    .bottom-right { bottom: -5%; right: -5%; }
  </style>