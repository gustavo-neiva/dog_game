<script>
  import { quizIndex, answers, answerIndex, rowIndex } from "../store";
  import { numberOfQuestions } from "../lib/repository";

  $: rightAnswer = (row) => {
    if (row <= $answerIndex) {
      return $answers[row].correct ? "right" : "wrong";
    }
    return "";
  };

  function goTo(row) {
    if (row <= $answerIndex) {
      rowIndex.set(row);
      quizIndex.update((_) => row);
    }
  }
</script>

<div class="progress-container">
  <div class="steps">
    {#each Array(numberOfQuestions) as _, row}
      <div
        class:current={row === $quizIndex}
        class="step {rightAnswer(row)}"
        on:click={() => goTo(row)}
        on:keypress={() => goTo(row)}
      />
    {/each}
  </div>
</div>

<style lang="postcss">
  .progress-container {
    left: 0;
    width: 100%;
    height: 0.8em;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.1em 0;
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
    border-radius: 0.375em;
    width: 100%;
    height: 100%;
    margin: 0 0.125em;
    background-color: rgba(244, 245, 249, 0.4);
  }

  .current {
    transition: all 0.25s ease-in-out;
    background: rgba(255, 255, 255, 0.95);
    filter: saturate(60%);
    cursor: pointer;
  }

  .right {
    background-color: rgb(89, 195, 100);
    cursor: pointer;
  }

  .wrong {
    background-color: rgb(200, 45, 81);
    cursor: pointer;
  }
</style>
