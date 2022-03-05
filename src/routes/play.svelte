<script>
  import { startGame, finished } from '../store'
  import Result from '../components/result.svelte';
  import Quiz from '../components/quiz.svelte';

	startGame()
</script>

{#if $finished}
  <Result/>
{:else}
  <Quiz/>
{/if}
