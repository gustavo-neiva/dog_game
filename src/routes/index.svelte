<script>
  import { startGame, finished } from '../store'
  import Result from '$components/result.svelte';
  import Quiz from '$components/quiz.svelte';

	startGame()
</script>

<div id="main">
  {#if $finished}
    <Result/>
  {:else}
    <Quiz/>
  {/if}
</div>

<style lang="postcss">
 #main {
    text-align: center;
    padding-top: 0.5rem;
  }
</style>