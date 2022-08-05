<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import DogImg from './DogImg.svelte';
	import Option from './Option.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
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
  $: innerHeight = 0;
  $: isCorrect = null;
  $: positionY = 0;

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

  const answer = (e) => {
    hasAnswered = true;
    isCorrect = selectedOption.correct;
    $answers = [...$answers, selectedOption];
    const button = e.target;
    const rect = button.getBoundingClientRect();
    positionY = rect.top
    console.log(rect.top, rect.right, rect.bottom, rect.left);
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

<svelte:window bind:innerWidth bind:innerHeight />

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
      in:fly|local={{ x: $xIn, duration: $durationIn, easing: cubicOut }}
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
      {#each options as option}
        <Option 
          {...option}
          on:click="{e => { selectedOption = option; answer(e) } }"
          answered="{selectedOption.breed === option.breed && hasAnswered}"
          disabled={hasAnswered}
        />
      {/each}
    </div>
    {#if hasAnswered && isCorrect}
      <div class="animation" style="top: {positionY}px;">
        <LottiePlayer path={'./correct.json'} height={innerHeight/2} width={innerWidth/2} loop={false}/>
      </div>
    {/if}
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
      height: 38rem;
      width: 38rem;
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

  .question {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
  }

  .animation {
    position: absolute;
    z-index: 999;
    right: 25vw;
    transform: translateY(-50%);
  }
</style>
