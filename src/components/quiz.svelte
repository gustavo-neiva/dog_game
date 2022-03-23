<script>
  import Question from './question.svelte';
  import { quiz } from '../store'
</script>

{#each $quiz as question}
  <Question {...question}/>
{/each}