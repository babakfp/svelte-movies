<script>
  export let className
  export let page
  export let totalPages
  export let href
</script>

<nav class={className}>
  <ul class="flex gap-2">
    {#each [...Array(totalPages).keys()] as arrayId}
      {@const pageNumber = arrayId + 1}
      <li>
        <a class="flex items-center justify-center w-10 h-10 bg-white bg-opacity-5 rounded duration-150 hover:bg-opacity-10
          {Number(page) === pageNumber && 'pointer-events-none opacity-50'}"
          href={href.replace('<page-number>', pageNumber)}>
          {pageNumber}
        </a>
      </li>
    {/each}
  </ul>
</nav>
