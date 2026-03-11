<script>
    import { onMount } from 'svelte';
  import EmojiIcon from '../components/EmojiIcon.svelte';
  
    export let locale = undefined;
      export let use24Hour = true;
  
    let now = new Date();
    
    const updateTime = () => {
      now = new Date();
    };
  
    onMount(() => {
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    });
  
    function getClockEmoji(date) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const normalizedHour = ((hours % 12) + 12) % 12;
      const half = minutes >= 30;
  
      // U+1F550..U+1F55B => 🕐..🕛
      // U+1F55C..U+1F567 => 🕜..🕧
      const fullHourCodePoint = normalizedHour === 0
        ? 0x1F55B
        : 0x1F54F + normalizedHour;
  
      const halfHourCodePoint = normalizedHour === 0
        ? 0x1F567
        : 0x1F55B + normalizedHour;
  
      return String.fromCodePoint(half ? halfHourCodePoint : fullHourCodePoint);
    }
  
    function formatTime(date, locale, use24Hour) {
      return new Intl.DateTimeFormat(locale, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !use24Hour
      }).format(date);
    }
  
    $: emoji = getClockEmoji(now);
    $: realTime = formatTime(now, locale, use24Hour);
  </script>
  
  <span
    class="time-inline"
    title={realTime}
    aria-label={`Current time: ${realTime}`}
  >
    <EmojiIcon deco={true} icon={emoji}/>
    <span class="text-base">{realTime}</span>
  </span>
  
  <style>
      .time-inline {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      line-height: 1;
      cursor: default;
      user-select: none;
    }
  </style>
  