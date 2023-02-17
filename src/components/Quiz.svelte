<script>
  import { quiz, quizIndex, answerIndex, back, next, timeout } from "../store";
  import Question from "@components/Question.svelte";

  let xDown;

  const onKeyDown = (e) => {
    if ($quizIndex <= $answerIndex && e.keyCode === 39 && !$timeout) {
      next();
    }
    if ($quizIndex >= 1 && e.keyCode === 37) {
      back();
    }
  };

  const handleTouchMove = (e) => {
    if (!xDown) {
      return;
    }

    let xUp = e.touches[0].clientX;

    let xDiff = xDown - xUp;

    if (xDiff > 0) {
      if ($quizIndex <= $answerIndex && !$timeout) {
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
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div on:touchmove={handleTouchMove} on:touchstart={handleTouchStart}>
  {#each $quiz as question}
    <Question {...question} />
  {/each}
</div>
