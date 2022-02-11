<style lang="postcss">
  h2 {
		font-size: 4.8rem;
		text-align: center;
    color: white;
    width: 100rem;
    margin: auto;
	}

  .container  {
		display: grid;
    justify-content: center;
    align-items: center;
    justify-items: center;
    
    @media (max-width: 64rem)  {
      grid-template-columns: 1fr;
    }

    @media (min-width: 64rem)  {
      grid-template-columns: 25% 25%;
      row-gap: 3rem;
    }
	}

  .image {
    text-align: center;
    margin: 2rem;
    width: 30rem;
    height: 30rem;
  }

  .button {
    text-align: center;
  }
</style>

<script>
  import DogImg from './DogImg.svelte';
	import Button from './Button.svelte';
  import { quizIndex, answers, numberOfQuestions, finished, } from '../store';

  export let index;
  export let images;
  export let breed;
  export let answer;

  let selectedImg = 0;

  const onSubmit = () => {
    $answers = [...$answers, selectedImg === answer];
    quizIndex.update(n => n + 1)
    if($quizIndex == numberOfQuestions) {
      finished.set(true)
    }
  }
</script>

{#if $quizIndex == index}
    <h2>Which dog is the {breed}?</h2>
    <div class="container">
      {#each images as image(image.id)}
        <div class="image">
          <DogImg
            url={image.url}
            id={image.id}
            on:click="{_ => selectedImg = image.id}"
            selected="{selectedImg === image.id}"
          />
        </div>
      {/each}
    </div>
    <div class="button">
      <Button text="Select Dog" href='' on:click={onSubmit} disabled={selectedImg === 0}/>
    </div>
{/if}