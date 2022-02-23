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
      row-gap: 5rem;
    }
	}

  .image {
    text-align: center;
    margin: 2rem;
    height: max(calc(100vh/4), calc(100vw/4));
    width: max(calc(100vh/4), calc(100vw/4));
  }

  .button {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
  }
</style>

<script>
  import DogImg from './DogImg.svelte';
	import Option from './option.svelte';
  import Button from './Button.svelte';
  import { quizIndex, answers, numberOfQuestions, finished } from '../store';
  import { fade, fly } from 'svelte/transition';

  export let index;
  export let image;
  export let options;
  export let answered;

  
  $: show = false;
  $: selectedOption = { breed: null, correct: null };
	$: innerWidth = 0

  const onSubmit = () => {
    $answers = [...$answers, selectedOption];
    quizIndex.update(n => n + 1)
    if($quizIndex == numberOfQuestions) {
      finished.set(true)
    }
  }
</script>

<svelte:window bind:innerWidth />

{#if answered}
  {answered}
{/if}

{#if $quizIndex == index}
  <div class="card" >
      <div class="image">
        <DogImg url={image} />
      </div>
      {#if show}
        <div class="button">
          <Button text="Select Dog" href='' on:click={onSubmit}/>
        </div>
      {/if}
      <div class="options">
        {#each options as option}
          <Option 
            {...option}
            on:click="{_ => {selectedOption = option; show = true}}"
            selected="{selectedOption.breed === option.breed}"
          />
        {/each}
      </div>
  </div>
{/if}