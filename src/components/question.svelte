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
    grid-template-rows: 10% 50% 33% 7%;
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

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .progress-bar {
    text-align: left;
    width: 100%;
    margin: auto;
  }

  .button {
    position: relative;
  }

  .animation {
    position: absolute;
    z-index: 10;
    top: -10;
    left: 10;
    transform: translate(100%, -100%);
  }

  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }
</style>

<script>
  import DogImg from './dogImg.svelte';
	import Option from './option.svelte';
  import Button from './button.svelte';
  import QuizProgress from './quizProgress.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
  import { quizIndex, answers, numberOfQuestions, finished, answerIndex } from '../store';

  export let index;
  export let image;
  export let options;
  export let answered;

  $: hasAnswered = answered;
  $: hasSelected = false;
  $: selectedOption = { breed: null, correct: null };
	$: innerWidth = 0
  $: buttonText = hasAnswered ? 'Next question' : 'Check'
  $: correct = null;

  const answer = () => {
    hasAnswered = true;
    hasSelected = true;
    correct = selectedOption.correct
    $answers = [...$answers, selectedOption];
    answerIndex.update(n => n + 1)
  }

  const onSubmit = () => {
    quizIndex.update(n => n + 1)
    if($quizIndex == numberOfQuestions) {
      finished.set(true)
    }
  }
</script>

<svelte:window bind:innerWidth />

{#if $quizIndex === index}
  <div class="question">
    <div class="top">
      <h2>What breed is this dog?</h2>
    </div>
    <div class="center">
      <div class="image">
        <DogImg url={image} />
      </div>
    </div>
    <div class="options">
      {#each options as option}
        <Option
          {...option}
          on:click="{_ => {selectedOption = option; hasSelected = true}}"
          selected="{selectedOption.breed === option.breed}"
          answered="{selectedOption.breed === option.breed && hasAnswered}"
          disabled={hasAnswered}
        />
      {/each}
    </div>
    <div class="bottom">
      <div class="progress-bar">
        <QuizProgress></QuizProgress>
      </div>
      <div class="button" class:disabled={!hasSelected}>
        <div class="animation">
          {#if correct && hasAnswered}
            <LottiePlayer path={'./correct.json'} height={50} width={50} loop={false}/>
          {/if}
          {#if !correct && hasAnswered}
            <LottiePlayer path={'./wrong.json'} height={50} width={50} loop={false}/>
          {/if}
        </div>
        <Button
          on:click={hasAnswered ? onSubmit : answer}
          texto={buttonText}
        />
      </div>
    </div>
  </div>
{/if}