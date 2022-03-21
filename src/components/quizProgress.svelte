<style lang="postcss">
  p {
    font-size: large;
    font-weight: bold;
    margin-left: 1rem;
  }

  .progress-container {
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .steps {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 1rem;
    height: 100%;
  }

  .step {
    border: 2px solid #BABEC2;
    border-radius: 50%;

    @media screen and (max-width: 768px) {
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
    }
  }

  .current {
    transition: all .2s ease-in-out;
    transform: scale(1.3);
  }

  .answered {
    background-color: rgb(24, 101, 242);
    border: transparent;
  }
</style>
<script>
  import { quizIndex, numberOfQuestions, answers, answerIndex } from '../store';  
</script>

<div class="progress-container">
  <p>{$quizIndex + 1} of {numberOfQuestions}</p>
  <div class="steps">
    {#each Array(numberOfQuestions) as _, row}
      <div 
        class="step" 
        class:current={row === $quizIndex}
        class:answered={row <= $answerIndex}
      >
    </div>
    {/each}
  </div>
</div>
