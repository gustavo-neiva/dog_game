<style lang="postcss">
  h2 {
		font-size: 3.6rem;
		text-align: center;
    color: darkgray;
    margin-top: 1rem;
	}

  .question  {
    height: 100%;
    position: relative;
		display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 50% 40%;
    justify-items: center;
    align-items: center;
    overflow: hidden;
  }

  .center {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .image {
    margin: 2rem;
    height: 30rem;
    width: 30rem;
  }

  .option {
    min-width: 10rem;
    margin: auto;
  }

  .navigation {
    margin: auto;
    min-width: 10rem;
  }

  .confirm {
    z-index: 999;
  }

</style>

<script>
  import DogImg from './DogImg.svelte';
	import Option from './option.svelte';
  import Arrow from './arrow.svelte';
  import { quizIndex, answers, numberOfQuestions, finished } from '../store';

  export let index;
  export let image;
  export let options;
  export let answered;
  
  $: hasAnswered = answered;
  $: hasSelected = false;
  $: selectedOption = { breed: null, correct: null };
	$: innerWidth = 0

  const answer = () => {
    hasAnswered = true;
    hasSelected = true;
    $answers = [...$answers, selectedOption];
  }

  const onSubmit = () => {
    if(answered) { console.log('vai')}
    quizIndex.update(n => n + 1)
    if($quizIndex == numberOfQuestions) {
      finished.set(true)
    }
  }

  const goBack = () => {
    quizIndex.update(n => n - 1)
  }
</script>

<svelte:window bind:innerWidth />

{#if answered}
  {answered}
{/if}

{#if $quizIndex === index}
  <div class="question">
    <div class="top">
      <h2>What breed is this dog?</h2>
    </div>
    <div class="center">
      <div class="navigation">
        <div class="arrow-left" hidden={index === 0}>
          <Arrow direction="left" on:click={goBack} />
        </div>
      </div>
      <div class="image">
        <DogImg url={image} />
      </div>
      <div class="navigation">
        <p on:click={answer} hidden={!hasSelected || hasAnswered} class="confirm">Choose</p>
        <div class="arrow-right" hidden={!hasAnswered}>
          <Arrow direction="right" on:click={onSubmit}/>
        </div>
      </div>
    </div>
    <div class="bottom">
      {#each options as option}
        <Option 
          {...option}
          on:click="{_ => {selectedOption = option; hasSelected = true}}"
          selected="{selectedOption.breed === option.breed}"
        />
      {/each}
    </div>
  </div>
{/if}