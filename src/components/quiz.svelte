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
    padding: 0.5rem;
    background-color: #FAFAFF;
    border-radius: 6px;
    box-shadow: 0 0 .5rem #FAFAFF;

    text-align: left;
  }
</style>

<script>
  import QuizProgress from './quizProgress.svelte';
  import Question from './question.svelte';
  import { quiz } from '../store'

</script>
<div id="main">
  <div class="progress-bar">
    <QuizProgress></QuizProgress>
  </div>
  {#each $quiz as question}
    <Question {...question}/>
  {/each}
</div>