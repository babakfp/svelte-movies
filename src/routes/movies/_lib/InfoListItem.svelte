<script>
  export let title
  export let value = ''
</script>

<li>
  <span class="font-medium">{title}:</span>
  <slot>
    <span>{value}</span>
  </slot>
</li>
