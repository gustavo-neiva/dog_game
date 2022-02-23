<style lang="postcss">
  progress {
		display: block;
		width: 100%;
    height: 2rem;
    appearance: none;
	}

  p {
    font-size: large;
  }

  span {
    font-size: larger;
  }
</style>
<script>
  import { quizIndex, numberOfQuestions } from '../store';
  $: totalProgress = $quizIndex/numberOfQuestions
</script>

<p><span>{$quizIndex}</span>/{numberOfQuestions}</p>
<progress value={totalProgress}></progress>
