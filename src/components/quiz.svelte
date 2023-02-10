<script>
  import { quiz, quizIndex, answerIndex, back, next } from "../store";
  import Question from "@components/Question.svelte";
  import QuizProgress from "@components/QuizProgress.svelte";

  const onKeyDown = (e) => {
    if ($quizIndex <= $answerIndex && e.keyCode === 39) {
      next();
    }
    if ($quizIndex >= 1 && e.keyCode === 37) {
      back();
    }
  };
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<QuizProgress />
{#each $quiz as question}
  <Question {...question} />
{/each}
