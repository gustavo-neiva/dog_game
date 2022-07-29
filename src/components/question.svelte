<script>
  import DogImg from './DogImg.svelte';
	import Option from './Option.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
  import { fade, fly } from 'svelte/transition';
  import Arrow from './Arrow.svelte'; 
  import { quizIndex, answers, answerIndex, back, next, durationIn, xIn, durationOut } from '../store';
  export let index;
  export let image;
  export let options;
  export let answered;

  let xDown;    

  $: hasAnswered = answered;
  $: selectedOption = { breed: null, correct: null };
	$: innerWidth = 0;
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
    isCorrect = selectedOption.correct;
    $answers = [...$answers, selectedOption];
    answerIndex.update(n => n + 1)
  }

  const handleTouchMove = (e) => {
    if ( ! xDown ) {
        return;
    }

    let xUp = e.touches[0].clientX;                                    

    let xDiff = xDown - xUp;
                                                                        
    if (xDiff > 0) {
      if (hasAnswered) {
        next()
      }
    } else {
      if ($quizIndex >= 1) {
        back()
      }
    }                       
  
    xDown = null;
  }

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];                                      
    xDown = firstTouch.clientX;                                      
  }
</script>

<svelte:window bind:innerWidth />

{#if $quizIndex === index}
  {#await preload(image)}
    <div class="loading">
      <LottiePlayer path={'./loading.json'} height={innerWidth} width={innerWidth} />
    </div>
  {:then base64}
    {#if $quizIndex >= 1}
      <div class="arrow-left" in:fade={{ duration: $durationIn }} out:fade>
        <Arrow direction='left' />
      </div>
    {/if}
    
    {#if hasAnswered }
      <div class="arrow-right" in:fade={{ duration: $durationIn }} out:fade>
        <Arrow direction='right'/>
      </div>
    {/if}

    <div 
      class="question" 
      in:fly={{ x: $xIn, duration: $durationIn }}
      out:fade={{ duration: $durationOut }}
      on:touchmove={handleTouchMove} 
      on:touchstart={handleTouchStart}
    >
      <div class="image">
        <DogImg base64={base64} />
      </div>
      <div class="center">
        <h2>What breed is this dog?</h2>
      </div>
      <div class="options">
        {#each options as option}
          <div class="option">
            <Option 
              {...option}
              on:click="{_ => {selectedOption = option; answer()}}"
              answered="{selectedOption.breed === option.breed && hasAnswered}"
              disabled={hasAnswered}
              isCorrect={isCorrect}
            />
          </div>
        {/each}
      </div>
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
      font-size: 2.2rem;
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
      margin: 0.7rem;
      height: 20rem;
      width: 20rem;
    }
  }

  .disabled {
    opacity: 0.2;
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

    @media (max-width: 768px) {
      margin-bottom: 3rem;
    }
  }

  .question {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }
</style>
