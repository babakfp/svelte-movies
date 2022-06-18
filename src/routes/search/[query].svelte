<script context="module">
  export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${params.query}`)
    const data = await res.json()

    if (res.ok) {
      return {
        props: { data, params }
      }
    } else if (data.status_message) {
      return {
        status: 401,
        error: data.status_message,
      }
    } else {
      return {
        status: 500,
        error: new Error('Something went wrong! Failed to fetch the content.'),
      }
    }
  }
</script>

<script>
  export let data
  export let params
  import MovieCard from '$lib/MovieCard.svelte'
  import Pagination from '$lib/Pagination.svelte'
</script>

<section class="container">
  {#if data.results.length > 0}
    <ul class="grid grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] gap-6">
      {#each data.results as movie}
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

    <Pagination className="flex justify-center mt-8" href="/search/{params.query}/<page-number>" totalPages={data.total_pages} page={1} />

  {:else}
    Sorry, nothing found
  {/if}
</section>
