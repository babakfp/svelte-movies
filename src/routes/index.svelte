<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'
  
  export async function load({ fetch }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}`)
    const data = await res.json()

    return {
      props: { movies: data.results.slice(0, 14) }
    }
  }
</script>

<script>
  export let movies
  import MovieCard from '$lib/MovieCard.svelte'
</script>

<section class="container | grid gap-6">
  <div class="flex items-end justify-between">
    <h2 class="text-xl font-semibold">Popular</h2>
    <a class="text-sm text-gray-400 underline" href="/movies">See More</a>
  </div>

  <ul class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6">
    {#each movies as movie}
      <li class="flex justify-center">
        <MovieCard
          id={movie.id}
          original_title={movie.original_title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
        />
      </li>
    {/each}
  </ul>
</section>
