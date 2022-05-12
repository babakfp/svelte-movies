<script>
  export let id
  export let original_title
  export let poster_path
  export let vote_average
  export let release_date
  
  import IconImdb from '$lib/icons/IconImdb.svelte'
</script>

<a
  class="grid gap-2 | w-full | text-sm | duration-150 ease-in-out | hover:brightness-105 hover:scale-90"
  href="/movies/{id}">

  <div class="relative">
    <div class="absolute bottom-0 left-0 | flex items-center gap-1 | p-1 pr-1.5 | bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-tr rounded-bl">
      <IconImdb/>
      <span class="text-xs">{vote_average}</span>
    </div>
    <span class="absolute bottom-0 right-0 | p-1 pl-1.5 | text-xs | bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-tl rounded-br">
      {release_date.substring(0, 4)}
    </span>

    <img class="w-full rounded" src="https://image.tmdb.org/t/p/w200{poster_path}" alt loading="lazy"/>
  </div>
  
  <h3 class="line-clamp-1">{original_title}</h3>
</a>
