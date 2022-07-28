<script>
  import Question from './question.svelte';
  import { quiz } from '../store'
  import QuizProgress from './quizProgress.svelte';
</script>

<div class="questions">
  <QuizProgress></QuizProgress>
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
</div>