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
    durationIn,
    quiz,
    autoNext,
    timeout,
  } from "../store";

  export let index;
  export let image;
  export let options;
  export let answered;

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
    autoNext();
  };
</script>

<svelte:window bind:innerWidth bind:innerHeight />

{#if $quizIndex === index}
  {#if $quizIndex >= 1}
    <div in:fade={{ duration: $durationIn }}>
      <Arrow direction="left" />
    </div>
  {/if}

  {#if hasAnswered && !$timeout}
    <div in:fade={{ duration: $durationIn }}>
      <Arrow direction="right" />
    </div>
  {/if}

  <div class="question" in:fade={{ duration: $durationIn }}>
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
        path={"https://res.cloudinary.com/dohfsgcbx/raw/upload/v1677106653/correct_vb2r3r.json"}
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
    font-size: 3.6em;
    margin: 0.5em;
  }

  .image {
    margin: 0 auto;
    display: block;
    margin: 1.5em;
    height: 30em;
    width: auto;
    max-width: 40em;
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
