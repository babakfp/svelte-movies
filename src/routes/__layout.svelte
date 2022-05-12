<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import Search from '$lib/Search.svelte'
</script>

<Header/>
<Search/>

<main id="main" class="py-12">
  <slot/>
</main>

<Footer/>
