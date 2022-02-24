<style lang="postcss">
  h2 {
		font-size: 3.6rem;
		text-align: center;
    color: darkgray;
    margin-top: 1rem;
	}

  .question  {
    position: relative;
		display: grid;
    height: 80vh;
    grid-template-columns: 100%;
    grid-template-rows: 10% 50% 40%;
    justify-items: center;
    align-items: center;
    overflow: hidden;
  }

  .image {
    margin: 2rem;
    height: 30rem;
    width: 30rem;
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
  <div class="question" >
      <h2>Which dog is this?</h2>
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