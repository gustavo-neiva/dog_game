<script>
  import { buildQuiz, quiz } from '../store'
  import Question from '../components/question.svelte';
	buildQuiz()
</script>


{#each $quiz as question}
  <Question {...question}/>
{/each}