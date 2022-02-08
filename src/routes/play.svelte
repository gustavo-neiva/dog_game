<script>
  import { startGame, quiz, finished } from '../store'
  import Question from '../components/question.svelte';
  import Result from '../components/result.svelte';
	startGame()
</script>

{#if $finished}
  <Result/>
{:else}
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
{/if}
