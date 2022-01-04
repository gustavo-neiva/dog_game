<script>
  import { buildQuiz, quiz} from '../store'
  import Question from '../components/question.svelte';
	buildQuiz()
  console.log($quiz)
</script>


{#each $quiz as question}
  <Question question={question}></Question>
{/each}