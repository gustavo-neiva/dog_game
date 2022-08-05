<script>
  import Question from './Question.svelte';
  import { quiz, quizIndex, answerIndex, back, next} from '../store'
  import QuizProgress from './QuizProgress.svelte';

  const onKeyDown = (e) => {
    if ($quizIndex <= $answerIndex && e.keyCode === 39) {
      next()
    }
    if ($quizIndex >= 1 && e.keyCode === 37) {
      back()
    }
  }
</script>

<svelte:window on:keydown|preventDefault={onKeyDown}/>

<QuizProgress></QuizProgress>
{#each $quiz as question}
  <Question {...question}/>
{/each}

