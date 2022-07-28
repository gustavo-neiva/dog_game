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
        class='step {rightAnswer(row)}'
        class:current={row === $quizIndex}
      >
    </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  p {
    font-size: large;
    font-weight: bold;
    margin-left: 1rem;
  }

  .progress-container {
    left: 0;
    width: 100%;
    height: 0.675rem;
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
  }

  .step {
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    margin: 0 0.125rem;
    background-color: rgba(244,245,249,0.4);
    /* @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
      margin: 0 .3rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 1rem;
      height: 1rem;
      margin: 0 .3rem;
    }

    @media screen and (min-width: 1024px) {
      width: 1.2rem;
      height: 1.2rem;
      margin: 0 0.5rem;
    } */
  }

  .current {
    transition: all .2s ease-in-out;
    background-color: white;
    opacity: 0.95;
  }

  .right {
    background-color: rgb(89,195,100);
  }

  .wrong {
    background-color: rgb(200, 45, 81);
  }
</style>