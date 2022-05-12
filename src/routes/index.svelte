<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'
  
  export async function load({ fetch }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}`)
    const data = await res.json()

    return {
      props: { movies: data.results }
    }
  }
</script>

<script>
  export let movies
  import MovieCard from '$lib/MovieCard.svelte'

  import { Swiper, SwiperSlide } from 'swiper/svelte';
</script>

<section class="container | grid gap-6">
  <div class="flex items-end justify-between">
    <h2 class="text-xl font-semibold">Popular</h2>
    <a class="text-sm text-gray-400 underline" href="/movies">See More</a>
  </div>

  <ul class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
    {#each movies as movie}
      <li class="flex justify-center">
        <MovieCard {...movie}/>
      </li>
    {/each}
  </ul>
</section>
