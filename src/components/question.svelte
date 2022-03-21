<style lang="postcss">
  h2 {
		text-align: center;
    color: darkgray;

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
      margin-top: 0.5rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 3.2rem;
      margin-top: 0.8rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3.6rem;
      margin-top: 1rem;
    }
	}

  .question  {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .progress-bar {
    text-align: left;
    margin: auto;
  }

  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

<script>
  import DogImg from './DogImg.svelte';
	import Option from './option.svelte';
  import Button from './button.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
  import QuizProgress from './quizProgress.svelte';
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

  const preload = async (src) => {
    const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise((resolve) => {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
  };

  const answer = () => {
    hasAnswered = true;
    hasSelected = true;
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
  {#await preload(image)}
    <div class="loading">
      <LottiePlayer path={'./dog-loading.json'} height={300} width={300}/>
    </div>
    {:then base64}
    <div class="question">
      <div class="top">
        <h2>What breed is this dog?</h2>
      </div>
      <div class="center">
        <div class="image">
          <DogImg base64={base64} />
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
          <Button 
            on:click={hasAnswered ? onSubmit : answer} 
            texto={buttonText}
          />
        </div>
      </div>
    </div>
  {/await}
{/if}