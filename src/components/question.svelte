<script>
  import Img from './dogImg.svelte';
  import { quizIndex } from '../store'

  export let index;
  export let images;
  export let breed;
  let selectedImg = 0;
</script>

{#if $quizIndex == index}
  <h2>Which picture is {breed}?</h2>
  {#each images as image(image.id)}
    <Img
      url={image.url}
      id={image.id}
      on:click="{_ => selectedImg = image.id}"
      selected="{selectedImg === image.id}"
    />
  {/each}

  <button on:submit={onSubmit}>Custom Close Button</button>
{/if}