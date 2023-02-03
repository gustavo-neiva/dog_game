<script>
  import { fade, fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import DogImg from './DogImg.svelte';
	import Option from './Option.svelte';
  import LottiePlayer from './LottiePlayer.svelte';
  import Arrow from './Arrow.svelte'; 
  import { quizIndex, answers, answerIndex, back, next, durationIn, durationOut, xIn} from '../store';

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

  let animationHeight = innerHeight;

  if (innerWidth > 760) {
    animationHeight = animationHeight * 1.1
  }

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
      <div in:fade={{ duration: $durationIn }} out:fade>
        <Arrow direction='left' />
      </div>
    {/if}
    
    {#if hasAnswered }

      <div in:fade={{ duration: $durationIn }} out:fade>
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
        <h3>What breed is this dog?</h3>
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
        <LottiePlayer path={'./correct.json'} height={animationHeight} loop={false}/>
      </div>
    {/if}
  {/await}
{/if}

<style lang="postcss">
  h3 {
		text-align: center;
    color: darkgray;

    @media screen and (min-width: 1024px) {
      font-size: 3.6rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 3.4rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.6rem;
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
      height: 34rem;
      width: 34rem;
    }

    @media screen and (max-width: 768px) {
      margin: 0.7rem;
      height: 29rem;
      width: 30rem;
    }
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
    z-index: 10;
    transform: translate(-50%, -50%);
    left: 50%;
  }
</style>
