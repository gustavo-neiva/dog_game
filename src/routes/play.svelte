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
    position: relative;
    text-align: center;
    padding-top: 0.5rem;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
</style>