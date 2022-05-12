<script>
  export let title
  export let content
  export let wrapperTag = 'div'
  
  // import { onMount } from 'svelte'
  // import { createPopper } from '@popperjs/core'

  // const button = document.querySelector('#button')
  // const tooltip = document.querySelector('#tooltip')

  // onMount(_=> {
  //   createPopper(button, tooltip, {
  //     // placement: 'right',
  //   })
  // })
</script>

<svelte:element this={wrapperTag} class="group | relative">
  <slot>
    <span>{title}</span>
  </slot>
  <span class="z-10 absolute top-full translate-y-1 left-1/2 -translate-x-1/2 | py-1 px-2 whitespace-nowrap font-normal | bg-gray-800 rounded | invisible opacity-0 pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto | duration-150 ease-in-out">
    {content}
  </span>
</svelte:element>
