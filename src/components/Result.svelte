<script>
  import { answers, numberOfQuestions } from '../store'
  const correct = $answers.filter(Boolean).length;
</script>

<div class="score">
  <h2>
    You got {correct} out of {numberOfQuestions} correct! Are you a dog whisperer?
  </h2>

  <ul>
    {#each $answers as answer}
      <li>{answer}</li>
    {/each}
  </ul>
</div>

<style>
  li {
    font-size: 3rem;
  }
</style>