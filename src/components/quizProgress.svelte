<script>
  import { quizIndex, numberOfQuestions, answers, answerIndex } from '../store';

  $: rightAnswer = (row) => {
    if (row <= $answerIndex) {
      return  $answers[row].correct ? "right": "wrong" 
    }
    ''
  }
</script>

<div class="progress-container">
  <div class="steps">
    {#each Array(numberOfQuestions) as _, row}
      <div 
        class:current={row === $quizIndex}
        class='step {rightAnswer(row)}'
      >
    </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .progress-container {
    left: 0;
    width: 100%;
    height: 0.82rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    margin: 0 0.1rem;
  }

  .step {
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    margin: 0 0.125rem;
    background-color: rgba(244,245,249,0.4);
  }

  .current {
    transition: all .2s ease-in-out;
    background: rgba(255, 255, 255, 0.95);
    filter: saturate(80%);
  }

  .right {
    background-color: rgb(89,195,100);
  }

  .wrong {
    background-color: rgb(200, 45, 81);
  }
</style>