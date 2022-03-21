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
    background-color: #FAFAFF;
    border-radius: 6px;
    box-shadow: 0 0 .5rem #FAFAFF;
    text-align: left;
    width: 60vw;
    height: 80vh;
    overflow: auto;
    margin: 0;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 90vh;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      border: 3px solid black;
    }

    @media screen and (min-width: 1024px) {
      border: 3px solid black;
    }
  }
</style>

<script>
  import { startGame, finished } from '../store'
  import Result from '../components/result.svelte';
  import Quiz from '../components/quiz.svelte';

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