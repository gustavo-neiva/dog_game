<style lang="postcss">
  progress {
		display: block;
		width: 100%;
    height: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-progress-value {
      background-color: #3AA394;
    }

    &::-webkit-progress-bar {
      background-color: darkgray;
    }
	}

  p {
    font-size: large;
  }

  span {
    font-size: larger;
  }
</style>
<script>
  import { quizIndex, numberOfQuestions, answers } from '../store';
  $: totalProgress = $answers.length/numberOfQuestions
</script>

<p>Question <span>{$quizIndex + 1}</span></p>
<progress value={totalProgress}></progress>
