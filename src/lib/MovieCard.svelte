<script>
  export let movie
  import ImdbContent from '$lib/ImdbContent.svelte'
</script>

<li class="flex text-sm">
  <a
    class="grid gap-2 | overflow-hidden | duration-150 ease-in-out | hover:brightness-105 focus-visible:brightness-105 hover:scale-90 focus-visible:scale-90"
    href="/movies/{movie.id}">

    <div class="relative">
      <div class="absolute bottom-0 inset-x-0 | p-2 | bg-gray-900 bg-opacity-50 backdrop-blur-sm">
        <ImdbContent vote_average={movie.vote_average} vote_count={movie.vote_count}/>
      </div>

      <img class="w-38 h-57 | rounded" src="https://image.tmdb.org/t/p/w200{movie.poster_path}" alt loading="lazy"/>
    </div>
    
    <h3 class="line-clamp-1">{movie.original_title} {movie.release_date.substring(0, 4)}</h3>
  </a>
</li>
