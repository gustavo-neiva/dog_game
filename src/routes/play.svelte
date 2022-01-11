<script>
  import { startGame, quiz, finished } from '../store'
  import Question from '../components/Question.svelte';
  import Result from '../components/Result.svelte';
  console.log($quiz, $finished)
	startGame()
</script>

{#if $finished}
  <Result/>
{:else}
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
{/if}
