<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'

  export async function load({ params, fetch }) {
    const API_URL = `https://api.themoviedb.org/3/movie/${params.id}?page=1&api_key=${API_KEY}`
    const res = await fetch(API_URL)
    const data = await res.json()

    return {
      props: { movie: data }
    }
  }
</script>

<script>
  export let movie
  
  import ImdbContent from '$lib/ImdbContent.svelte'
  import InfoListItem from './_lib/InfoListItem.svelte'
  import PopOver from '$lib/PopOver.svelte'

  // Runtime
  const movieRuntimeHours = movie.runtime / 60
  const movieRuntimeHoursRounded = Math.floor(movieRuntimeHours)
  const movieRuntimeMinutesRounded = Math.round((movieRuntimeHours - movieRuntimeHoursRounded) * 60)

  // Spoken Languages
  // let arrayOfSpokenLanguages = []
  // movie.spoken_languages.forEach(lang => {
  //   arrayOfSpokenLanguages.push(lang.iso_639_1.toString().toUpperCase())
  // })
  // const spokenLanguages = arrayOfSpokenLanguages.join(', ')

  // Revenue
  const converterMoneyToMillion = money => {
    const millionAmount = money / 1_000_000
    
    if (millionAmount >= 1) {
      return `$${Math.floor(money / 1_000_000)} MM`

    } else {

      return `$${money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }

  console.log(movie);
</script>

<!-- Poster -->
<div class="relative overflow-hidden -mt-12">
  <img class="w-full" src="https://image.tmdb.org/t/p/w500{movie.backdrop_path}" alt loading="lazy"/>
  
  <div class="absolute inset-0 -bottom-2 bg-gradient-to-b from-transparent to-gray-900"></div>
</div>

<!-- TODO: Remove -->
<!-- <img class="w-full" src="https://image.tmdb.org/t/p/w500/hUzeosd33nzE5MCNsZxCGEKTXaQ.png" alt loading="lazy"/> -->

<!-- Info -->
<div class="container | grid gap-4 | relative -mt-12">
  
  <!-- Titles -->
  <div class="grid gap-1">
    <h1 class="text-2xl font-black">{movie.original_title} {movie.release_date.substring(0, 4)}</h1>

    <!-- Original Title -->
    {#if movie.original_title !== movie.title}
      <h2 class="text-sm text-gray-400">{movie.title}</h2>
    {/if}

    <!-- Tagline -->
    <p class="text-xs text-gray-400">{movie.tagline}</p>
  </div>

  <!-- IMDB -->
  <ImdbContent vote_average={movie.vote_average} vote_count={movie.vote_count} imdb_id={movie.imdb_id}/>

  <!-- Genres -->
  <ul class="flex flex-wrap gap-2">
    {#each movie.genres as genre}
      <li>
        <div class="py-1 px-2 bg-gray-800 rounded text-xs text-gray-400">{genre.name}</div>
      </li>
    {/each}
  </ul>

  <!-- Info List -->
  <ul class="my-2 list-inside list-disc space-y-2">
    <InfoListItem name="Run Time">
      {movieRuntimeHoursRounded}<span class="font-normal">h</span> {movieRuntimeMinutesRounded}<span class="font-normal">min</span>
    </InfoListItem>
    <InfoListItem name="Status">
      {movie.status}
    </InfoListItem>
    <InfoListItem name="Adult">
      {movie.adult === true ? 'Yes' : 'No'}
    </InfoListItem>
    
    <!-- Not important Info -->

    <hr class="bg-gray-700 !my-3">
    
    <InfoListItem name="Budget">
      {converterMoneyToMillion(movie.budget)}
    </InfoListItem>
    <InfoListItem name="Revenue">
      {converterMoneyToMillion(movie.revenue)}
    </InfoListItem>
    <InfoListItem name="Language">
      {movie.original_language.toUpperCase()}
    </InfoListItem>
    <InfoListItem name="Spoken languages">
      <ul class="inline-flex flex-wrap">
        {#each movie.spoken_languages as lang, i}
          <PopOver
            wrapperTag="li"
            title="{lang.iso_639_1.toUpperCase()}{i !== movie.spoken_languages.length - 1 ? ', ' : ''}"
            content="{lang.english_name}: {lang.name}"
          />
        {/each}
      </ul>
    </InfoListItem>
    <InfoListItem name="Production Countries">
      <ul class="inline-flex flex-wrap">
        {#each movie.production_countries as country, i}
          <PopOver
            wrapperTag="li"
            title="{country.iso_3166_1}{i !== movie.production_countries.length - 1 ? ', ' : ''}"
            content={country.name}
          />
        {/each}
      </ul>
    </InfoListItem>
    <InfoListItem name="Production Companies">
      <ul class="inline-flex flex-wrap">
        {#each movie.production_companies as company, i}
          <PopOver
            wrapperTag="li"
            title="{company.name}{i !== movie.production_companies.length - 1 ? ', ' : ''}"
            content="From: {company.origin_country}"
          />
        {/each}
      </ul>
    </InfoListItem>
  </ul>
  
  <!-- Overview -->
  <p class="text-sm leading-6"><b>Overview: </b> {movie.overview}</p>

</div>
