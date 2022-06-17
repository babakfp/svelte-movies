<script context="module">
  export async function load({ fetch }) {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`)
      const data = await res.json()

      if (res.ok) {
        return {
          props: { movies: data.results.slice(0, 14) }
        }
      }
      
      return {
        status: res.status,
        error: new Error('Something went wrong!'),
      }
    } catch (error) {
      return {
        status: 500,
        error: new Error('Something went wrong! Failed to fetch the content.'),
      }
    }
  }
</script>

<script>
  export let movies
  import MovieCard from '$lib/MovieCard.svelte'
  import MovieCardPlaceholder from '$lib/MovieCardPlaceholder.svelte'
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
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          release_date={movie.release_date}
        />
      </li>
    {/each}
  </ul>
</section>
