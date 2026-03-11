<script>
  export let icon;
  export let label = ""; 
  export let deco = false;
  export let title = "";

  let className = "";
  export { className as class };
</script>

<span 
  {title}
  role={deco ? null : "img"} 
  aria-label={deco ? null : label} 
  aria-hidden={deco ? "true" : "false"}
  class="sym {className}"
  {...$$restProps}
>
  {icon}
</span>