<script context="module">
  const API_KEY = '73191913f3905b31e407454465f3b785'

  export async function load({ fetch, params }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?page=1&api_key=${API_KEY}`)
    const data = await res.json()

    return {
      props: { movie: data }
    }
  }
</script>

<script>
  export let movie
  
  import IconImdb from '$lib/icons/IconImdb.svelte'
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
</script>

<!-- Poster -->
<div class="relative overflow-hidden -mt-12">
  <div class="relative max-w-screen-sm md:rounded-r md:overflow-hidden md:mt-8">
    <img class="w-full" src="/movie-backdrop-placeholder.png" alt loading="eager"/>
    <img class="absolute inset-0 w-full" src="https://image.tmdb.org/t/p/w500{movie.backdrop_path}" alt loading="lazy"/>
  </div>
  
  <div class="absolute inset-0 -bottom-2 | bg-gradient-to-b from-transparent to-gray-900"></div>
</div>

<!-- Info -->
<div class="container | -mt-12">
  
  <div class="relative | grid gap-4 | md:max-w-screen-sm">
    <!-- Titles -->
    <div class="grid gap-1">
      <h1 class="text-2xl font-black md:text-4xl">{movie.original_title} ({movie.release_date.substring(0, 4)})</h1>

      <!-- Original Title -->
      {#if movie.original_title !== movie.title}
        <h2 class="text-sm font-black text-gray-400 md:text-base">{movie.title}</h2>
      {/if}

      <!-- Tagline -->
      <p class="text-sm text-gray-400 md:text-base">{movie.tagline}</p>
    </div>

    <!-- IMDB -->
    <div>
      <a class="inline-flex items-center gap-1" href="https://www.imdb.com/title/{movie.imdb_id}" target="_blank">
        <IconImdb className="w-6 h-6"/>
    
        <div class="flex items-center gap-0.5 | text-sm">
          <span class="font-semibold">{movie.vote_average}</span>
          {#if movie.vote_count}
            <div class="text-xs">
              <span class="text-gray-500">(</span><span class="text-gray-400">{movie.vote_count}</span><span class="text-gray-500">)</span>
            </div>
          {/if}
        </div>
      </a>
    </div>

    <!-- Genres -->
    <ul class="flex flex-wrap gap-2">
      {#each movie.genres as genre}
        <li>
          <div class="py-1 px-2 bg-gray-800 rounded text-xs text-gray-400">{genre.name}</div>
        </li>
      {/each}
    </ul>
    
    <!-- Overview -->
    <p class="text-sm leading-6 md:text-base md:leading-7"><b>Overview: </b> {movie.overview}</p>

    <!-- Info List -->
    <ul class="my-2 | list-inside list-disc space-y-2 | text-sm">
      <InfoListItem title="Run Time">
        {movieRuntimeHoursRounded}<span class="font-normal">h</span> {movieRuntimeMinutesRounded}<span class="font-normal">min</span>
      </InfoListItem>

      <InfoListItem title="Status">{movie.status}</InfoListItem>

      {#if movie.adult}
        <InfoListItem title="Age Restricted">🔞+18</InfoListItem>
      {/if}
      
      <!-- Less Important Info -->

      <hr class="bg-gray-700 !my-3">
      
      {#if movie.budget > 0}
        <InfoListItem title="Budget">
          {converterMoneyToMillion(movie.budget)}
        </InfoListItem>
      {/if}

      {#if movie.revenue > 0}
        <InfoListItem title="Revenue">
          {converterMoneyToMillion(movie.revenue)}
        </InfoListItem>
      {/if}

      <InfoListItem title="Language">
        {movie.original_language.toUpperCase()}
      </InfoListItem>

      {#if movie.spoken_languages.length > 1}
        <InfoListItem title="Spoken languages">
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
      {/if}
      
      <InfoListItem title={movie.production_companies.length === 1 ? 'Production Country' : 'Production Countries'}>
        <ul class="inline-flex flex-wrap">
          {#each movie.production_countries as country, i}
            <!-- TODO: FUCK -->
            <PopOver
              wrapperTag="li"
              title={country.iso_3166_1}{i !== movie.production_countries.length - 1 ? `, ` : ''}
              content={country.name}
            />
          {/each}
        </ul>
      </InfoListItem>
      
      <InfoListItem title={movie.production_companies.length === 1 ? 'Production Company' : 'Production Companies'}>
        <ul class="inline-flex flex-wrap">
          {#each movie.production_companies as company, i}
            <li>
              <!-- TODO: FUCK -->
              {company.name}{i !== movie.production_companies.length - 1 ? ', ' : ''}
            </li>
          {/each}
        </ul>
      </InfoListItem>
    </ul>
  </div>

</div>
