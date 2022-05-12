<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'
  const API_URL = `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}`
  
  export async function load({ fetch }) {
    const res = await fetch(API_URL)
    const data = await res.json()

    return {
      props: { movies: data.results }
    }
  }
</script>

<script>
  export let movies
  console.log(movies)
  import MovieCard from '$lib/MovieCard.svelte'
</script>

<section class="container | grid gap-6">
  <div class="flex items-end justify-between">
    <h2 class="text-lg font-black">Popular</h2>
    <a class="text-sm text-gray-400" href="/movies">See All</a>
  </div>

  <ul class="grid grid-cols-2 gap-6">
    {#each movies as movie}
      <MovieCard {movie}/>
    {/each}
  </ul>
</section>
