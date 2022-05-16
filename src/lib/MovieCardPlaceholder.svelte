<script>
  import IconImdb from '$lib/icons/IconImdb.svelte'
</script>

<div class="grid gap-2 | w-full | text-sm | pointer-events-none cursor-default select-none">

  <div class="relative">
    <div class="aspect-[2/3] animate-pulse bg-gray-700 rounded"/>

    <div class="absolute bottom-0 left-0 | flex items-center gap-1 | p-1 pr-1.5 | bg-gray-900 bg-opacity-75 rounded-tr rounded-bl">
      <IconImdb/>
      <span class="text-xs">x.x</span>
    </div>
    <span class="absolute bottom-0 right-0 | p-1 pl-1.5 | text-xs | bg-gray-900 bg-opacity-75 rounded-tl rounded-br">
      xxxx
    </span>

  </div>
  
  <h3 class="line-clamp-1">Lorem, ipsum dolor.</h3>
</div>
