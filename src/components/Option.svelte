<script>
  export let breed, correct, answered, disabled, registeredAnswer;
  $: answeredClassName = correct ? "correct" : "wrong";
  $: answeredClass = answered ? answeredClassName : "";
  $: paintRight = disabled && correct ? "correct" : "";
  $: paintWrong = disabled && registeredAnswer ? "wrong" : "";
</script>

<div
  class="option {answeredClass} {paintRight} {paintWrong}"
  on:click
  class:disabled
>
  <span class="text">
    {breed}
  </span>
</div>

<style lang="postcss">
  .option {
    position: relative;
    cursor: pointer;
    background-color: #fafaff;
    border-radius: 1em;
    transition: all 0.2s ease-in-out;
    padding: 0.3em 0;
    color: #37383a;
    width: 80%;
    max-width: 27em;
    height: auto;
    font-size: 2.8em;
    margin: 0.5em 0;

    &:last-child {
      margin-bottom: 3em;
    }

    &:hover {
      transform: scale(101.3%);
    }
  }

  .correct {
    background-color: rgb(89, 195, 100);
  }

  .wrong {
    background-color: rgb(200, 45, 81);
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }

  .disabled {
    pointer-events: none;
  }

  .text {
    padding-left: 1rem;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
