<script>
  import '../app.css'
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header/>

<div class="py-12">
  <slot/>
</div>

<Footer/>
