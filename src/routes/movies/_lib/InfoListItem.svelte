<script>
  export let title
  export let value = ''
</script>

<li>
  <b>{title}:</b>
  <slot>
    <span>{value}</span>
  </slot>
</li>
