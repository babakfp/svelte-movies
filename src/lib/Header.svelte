<script>
  const items = [
    { title: 'Home',    href: '/', prefetch: true },
    // { title: 'Movies',  href: '/movies', prefetch: true },
    { title: 'Github',  href: 'https://github.com/babakfp/Svelte-Movies' },
  ]
</script>

<header class="h-14 | border-b border-gray-700">
  <nav class="container px-0 | flex items-center h-full | text-sm">
    <ul class="grid grid-cols-2 w-full h-full">

      {#each items as item}
        <li>
          <a
            class="flex items-center px-8 justify-center h-full | text-gray-400 uppercase underline | border-r border-gray-700 | duration-150 ease-in-out | hover:text-gray-300"
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : ''}
            sveltekit:prefetch={item.prefetch}
          >
            {item.title}
          </a>
        </li>
      {/each}
      
    </ul>
  </nav>
</header>

<style lang="postcss">
  li:last-child a {
    @apply border-none;
  }
</style>
