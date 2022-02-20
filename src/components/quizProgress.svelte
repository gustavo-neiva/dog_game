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
  import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
  import { quizIndex, numberOfQuestions } from '../store';
  $: totalProgress = $quizIndex/numberOfQuestions

  $: progress = tweened(totalProgress, {
		duration: 6000,
		easing: cubicOut
	});
</script>

<p><span>{$quizIndex}</span>/{numberOfQuestions}</p>
<progress value={$progress}></progress>
