<style lang="postcss">
  .game {
    background-image: url('patinhas.png');
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #main {
    position: relative;
    background-color: #FAFAFF;
    border-radius: 6px;
    box-shadow: 0 0 .5rem #FAFAFF;
    text-align: left;
    min-width: 60vw;
    min-height: 80vh;
    padding: 0 1.3rem;
    border: 3px solid black;

    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
</style>

<script>
  import { startGame, finished } from '../store'
  import Result from '$components/result.svelte';
  import Quiz from '$components/quiz.svelte';

	startGame()
</script>
<div class="game">
  <div id="main">
    {#if $finished}
      <Result/>
    {:else}
      <Quiz/>
    {/if}
  </div>
</div>