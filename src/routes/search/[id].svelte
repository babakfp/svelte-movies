<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'
  
  export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.id}`)
    const data = await res.json()

    return {
      props: { movies: data.results }
    }
  }
</script>

<script>
  export let movies
  import MovieCard from '$lib/MovieCard.svelte'
</script>

<section class="container">
  <ul class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6">
    {#each movies as movie}
      <li class="flex justify-center">
        <MovieCard {...movie}/>
      </li>
    {/each}
  </ul>
</section>
