<script>
  import { quiz } from '../store'
  console.log($quiz)
</script>

<ul>
  {#each $quiz as question}
    <li>{question.question.breed}</li>
  {/each}
</ul>