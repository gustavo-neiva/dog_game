<script>
  import { quiz, quizIndex, answerIndex, back, next } from "../store";
  import Question from "@components/Question.svelte";
</script>

{#each $quiz as question}
  <Question {...question} />
{/each}
