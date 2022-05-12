<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header/>

<main class="py-12">
  <slot/>
</main>

<Footer/>
