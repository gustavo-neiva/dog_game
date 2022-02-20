<style>
  .progress-bar {
    text-align: center;
    width: 60%;
    transform: translateX(30%);
    margin: 2rem;
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
  <div class="progress-bar">
    <QuizProgress></QuizProgress>
  </div>
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
{/if}
