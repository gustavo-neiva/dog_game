<style lang="postcss">
  #main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    background-color: #FAFAFF;
    border-radius: 6px;
    box-shadow: 0 0 .5rem #FAFAFF;
    text-align: left;
  }
</style>

<script>
  import { startGame, finished } from '../store'
  import Result from './../lib/Result.svelte';
  import Quiz from './../lib/quiz.svelte';

	startGame()
</script>
<div id="main">
  {#if $finished}
    <Result/>
  {:else}
    <Quiz/>
  {/if}
</div>