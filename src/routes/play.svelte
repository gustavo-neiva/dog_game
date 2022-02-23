<style>
  .progress-bar {
    text-align: center;
    width: 60%;
    transform: translateX(30%);
    margin: 2rem;
  }

  /* #main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: calc(100vh - 10%);
    width: calc(100vw - 10%);
    padding: 15px;

    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 5px white;

    text-align: left;
  } */
</style>

<script>
  import { startGame, quiz, finished } from '../store'
  import Question from '../components/question.svelte';
  import Result from '../components/result.svelte';
  import QuizProgress from '../components/quizProgress.svelte';

	startGame()
</script>

{#if $finished}
  <Result/>
{:else}
<div id="main">
  <div class="progress-bar">
    <QuizProgress></QuizProgress>
  </div>
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
</div>
{/if}
