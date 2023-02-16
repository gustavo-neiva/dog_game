<script>
  import { updateGame } from "../lib/repository";
  import { fade } from "svelte/transition";
  import DogImg from "./DogImg.svelte";
  import Option from "./Option.svelte";
  import Arrow from "./Arrow.svelte";
  import LottiePlayer from "./LottiePlayer.svelte";
  import {
    quizIndex,
    answers,
    answerIndex,
    back,
    next,
    durationIn,
    quiz,
  } from "../store";

  export let index;
  export let image;
  export let options;
  export let answered;

  let xDown;
  let animationHeight = innerHeight;
  let animate = false;

  $: hasAnswered = answered;
  $: selectedOption = { breed: null, correct: null };
  $: innerWidth = 0;
  $: innerHeight = 0;
  $: isCorrect = null;
  $: positionY = 0;
  $: currentAnswer = $answers[$quizIndex] || { breed: null, correct: null };

  if (innerWidth > 760) {
    animationHeight = animationHeight * 1.1;
  }

  const setNext = () => {
    setTimeout(() => {
      next();
    }, 2500);
  };

  const answer = (e) => {
    hasAnswered = true;
    isCorrect = selectedOption.correct;
    $answers = [...$answers, selectedOption];
    quiz.update((items) => {
      const item = items[$quizIndex];
      item.answered = true;
      items[$quizIndex] = item;
      const newItems = [...items];
      return newItems;
    });
    const button = e.target;
    const rect = button.getBoundingClientRect();
    positionY = rect.top;
    answerIndex.update((n) => n + 1);
    updateGame();
    if (isCorrect) {
      animate = true;
    }
    setNext();
  };

  const handleTouchMove = (e) => {
    if (!xDown) {
      return;
    }

    let xUp = e.touches[0].clientX;

    let xDiff = xDown - xUp;

    if (xDiff > 0) {
      if (hasAnswered) {
        next();
      }
    } else {
      if ($quizIndex >= 1) {
        back();
      }
    }

    xDown = null;
  };

  const handleTouchStart = (e) => {
    const firstTouch = e.touches[0];
    xDown = firstTouch.clientX;
  };

  const onKeyDown = (e) => {
    if ($quizIndex <= $answerIndex && e.keyCode === 39) {
      next();
    }
    if ($quizIndex >= 1 && e.keyCode === 37) {
      back();
    }
  };
</script>

<svelte:window
  bind:innerWidth
  bind:innerHeight
  on:keydown|preventDefault={onKeyDown}
/>

{#if $quizIndex === index}
  {#if $quizIndex >= 1}
    <div in:fade={{ duration: $durationIn }}>
      <Arrow direction="left" {index} />
    </div>
  {/if}

  {#if hasAnswered}
    <div in:fade={{ duration: $durationIn }}>
      <Arrow direction="right" {index} />
    </div>
  {/if}

  <div
    class="question"
    in:fade={{ duration: $durationIn }}
    on:touchmove={handleTouchMove}
    on:touchstart={handleTouchStart}
  >
    <div class="image">
      <DogImg {image} />
    </div>
    <div class="center">
      <h3>What breed is this dog?</h3>
    </div>
    {#each options as option}
      <Option
        {...option}
        on:click={(e) => {
          selectedOption = option;
          answer(e);
        }}
        answered={selectedOption.breed === option.breed && hasAnswered}
        disabled={hasAnswered}
        registeredAnswer={currentAnswer.breed === option.breed &&
          hasAnswered &&
          !currentAnswer.correct}
      />
    {/each}
  </div>
  {#if hasAnswered && isCorrect && animate}
    <div class="animation" style="top: {positionY}px;">
      <LottiePlayer
        path={"./correct.json"}
        height={animationHeight}
        width={innerWidth}
        loop={false}
        on:finish={() => (animate = false)}
      />
    </div>
  {/if}
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
      margin: 1.5rem;
      height: 35rem;
      width: 35rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin: 1rem;
      height: 32rem;
      width: 32rem;
    }

    @media screen and (max-width: 768px) {
      margin: 0.5rem;
      height: 22rem;
      width: 22rem;
    }
  }
  .question {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
  }

  .animation {
    position: absolute;
    z-index: 10;
    transform: translate(-50%, -50%);
    left: 50%;
  }
</style>
