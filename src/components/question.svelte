<script>
  import { quizIndex } from '../store'

  export let index;
  export let images;
  export let answer;
  export let breed;

  let selectedDog = null;

  const setDog = (e) => {
    const dogs = document.querySelectorAll('.dog-option')
    dogs.forEach(dog => { dog.classList.remove('selected')})
    const imgEl = e.target
    selectedDog = imgEl.getAttribute('img-index')
    imgEl.classList += 'selected'
  }
</script>

{#if $quizIndex == index}
  <h2>Which picture is {breed}?</h2>

  {#each images as image}
    <img src={image.url} alt="Dog to choose" img-index={image.index} class="dog-option" lazy on:click={(e) => setDog(e)}>
  {/each}
{/if}

<style>
  .dog-option {
    width:  35rem;
    height: 35rem;
    object-fit: cover;
    border-radius: 8%;
  }
  .dog-option:hover {
    border: 1rem solid red;
    border-radius: 8%;
  }

  .selected {
    border: 1rem solid blue;
  }
</style>