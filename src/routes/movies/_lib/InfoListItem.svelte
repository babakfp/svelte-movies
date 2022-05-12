<script>
  export let name
  export let value
</script>

<li class="text-xs">
  <span>{name}:</span>
  <slot>
    <span class="font-medium">
      {value}
    </span>
  </slot>
</li>
