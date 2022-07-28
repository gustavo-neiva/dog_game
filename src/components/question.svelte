<script>
  import DogImg from './DogImg.svelte';
	import Option from './Option.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
  import { fade, fly } from 'svelte/transition';
  import Arrow from './Arrow.svelte'; 
  import { quizIndex, answers, answerIndex } from '../store';

  export let index;
  export let image;
  export let options;
  export let answered;

  $: hasAnswered = answered;
  $: hasSelected = false;
  $: selectedOption = { breed: null, correct: null };
	$: innerWidth = 0
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
</script>

<svelte:window bind:innerWidth />

{#if $quizIndex === index}
  {#await preload(image)}
    <div class="loading">
      <LottiePlayer path={'./loading.json'} height={375} width={375} />
    </div>
  {:then base64}
    {#if $quizIndex >= 1}
      <div class="arrow-left" in:fade out:fade>
        <Arrow direction='left' />
      </div>
    {/if}
    {#if hasAnswered }
      <div class="arrow-right" in:fade out:fade>
        <Arrow direction='right'/>
      </div>
    {/if}
    <div class="question" in:fly="{{ x: 200, duration: 1600 }}" out:fade>
      <div class="image">
        <DogImg base64={base64} />
      </div>
      <div class="center">
        <h2>What breed is this dog?</h2>
      </div>
      <div class="options">
        {#each options as option}
          <Option 
            {...option}
            on:click="{_ => {selectedOption = option; hasSelected = true; answer()}}"
            answered="{selectedOption.breed === option.breed && hasAnswered}"
            disabled={hasAnswered}
          />
        {/each}
      </div>
      <!-- <div class="bottom">
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
          <Button 
            on:click={hasAnswered ? onSubmit : answer} 
            texto={buttonText}
          />
        </div>
      </div> -->
    </div>
  {/await}
{/if}

<style lang="postcss">
  h2 {
		text-align: center;
    color: darkgray;

    @media screen and (min-width: 1024px) {
      font-size: 3.6rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
    }
	}

  .image {
    margin: 0 auto;
    display: block;

    @media screen and (min-width: 1024px) {
      margin: 2rem;
      height: 40rem;
      width: 40rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 1.2rem;
      height: 30rem;
      width: 30rem;
    }

    @media screen and (max-width: 768px) {
      margin: 1rem;
      height: 25rem;
      width: 25rem;
    }
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
    width: 75%;
    max-width: 73rem;
  }

  .bottom__item:last-of-type {
    margin-left: auto;
  }

  .question {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }
</style>
