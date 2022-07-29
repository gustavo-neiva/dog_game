<script>
  import Question from './Question.svelte';
  import { quiz } from '../store'
  import QuizProgress from './QuizProgress.svelte';
</script>

<QuizProgress></QuizProgress>
{#each $quiz as question}
  <Question {...question}/>
{/each}

