<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		}
	}
</script>

<script>
	export let error
	export let status
	import { dev } from '$app/env'
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="container">
	<h1 class="text-center font-bold text-4xl">{status}</h1>
  <h2 class="mt-4 text-center">{error.message}</h2>

  {#if error.stack && dev}
    <code class="block mt-8 p-4 bg-gray-800 rounded overflow-x-auto lg:p-8">
      <pre>
        {error.stack}
      </pre>
    </code>
  {/if}
</section>

<style lang="postcss">
  :global(#main) {
    /* 100vh - header and search and footer height */
    min-height: calc(100vh - 3.5rem - 3.5rem - 3.5rem);
  }
</style>
