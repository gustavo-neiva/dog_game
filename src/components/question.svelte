<script>
  import DogImg from './dogImg.svelte';
	import Option from './option.svelte';
  import Button from './button.svelte';
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
  $: isCorrect = null;

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
    isCorrect = selectedOption.correct;
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
      <LottiePlayer path={'./dog-loading.json'} height={375} width={375} loop={false}/>
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
            on:click="{_ => {selectedOption = option; hasSelected = true; answer()}}"
            selected="{selectedOption.breed === option.breed}"
            answered="{selectedOption.breed === option.breed && hasAnswered}"
            disabled={hasAnswered}
          />
        {/each}
      </div>
      <div class="bottom">
        <div class="bottom__item button" class:disabled={!hasSelected}>
          {#if hasAnswered && isCorrect}
            <div class="animation">
              <LottiePlayer path={'./correct.json'} height={50} width={50} loop={false}/>
            </div>
          {:else if hasAnswered && !isCorrect}
            <div class="animation">
              <LottiePlayer path={'./wrong.json'} height={35} width={35} loop={false}/>
            </div>
          {/if}
          <!-- <Button 
            on:click={hasAnswered ? onSubmit : answer} 
            texto={buttonText}
          /> -->
        </div>
      </div>
    </div>
  {/await}
{/if}

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

  .center {
    margin: 0;
  }

  .image {
    margin: 2rem;
    height: 30rem;
    width: 30rem;
    margin: 0 auto;
    display: block;
  }

  .bottom {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1rem;
  }

  .progress-bar {
    text-align: left;
    height: 100%;
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

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .options {
    width: 100%;
  }

  .bottom__item:last-of-type {
    margin-left: auto;
  }

  .question > * {
    margin-top: 2rem;
  }

  .button {
    position: relative;
  }

  .animation {
    position: absolute;
    z-index: 100;
    transform: translateX(-100%);
  }
</style>
