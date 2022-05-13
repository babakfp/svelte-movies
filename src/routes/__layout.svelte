<script context="module">
  export const load = async ({ url, params }) => ({
    props: {
      transitionId: url.pathname,
    },   
  })
</script>

<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import Search from '$lib/Search.svelte'

  import { fly } from 'svelte/transition'
  export let transitionId
</script>

<Header/>
<Search/>

{#key transitionId}
  <main id="main" class="py-12"
    in:fly={{ y: 6, duration: 300, delay: 300 }} out:fly={{ y: 6, duration: 300 }}
  >
    <slot/>
  </main>
{/key}

<Footer/>
