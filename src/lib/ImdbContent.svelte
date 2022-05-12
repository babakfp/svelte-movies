<script>
  export let vote_average
  export let vote_count
  export let imdb_id
  import IconImdb from '$lib/icons/IconImdb.svelte'
</script>

<svelte:element
  class="flex items-center gap-1"
  this={imdb_id ? 'a' : 'div'}
  href={imdb_id ? `https://www.imdb.com/title/${imdb_id}` : ''}
  target={imdb_id ? '_blank' : ''}
>

  <IconImdb/>

  <div class="text-xs text">
    <span>{vote_average}</span>
    {#if vote_count}
      <span class="text-2xs opacity-25">(</span><span class="text-2xs opacity-75">{vote_count}</span><span class="text-2xs opacity-25">)</span>
    {/if}
  </div>

</svelte:element>
