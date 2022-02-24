<style>
  .progress-bar {
    text-align: center;
    width: 40rem;
    margin: auto;
  }

  #main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80rem;
    width: 80rem;
    padding: 0.5rem;

    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 .5rem white;

    text-align: left;
  }
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
