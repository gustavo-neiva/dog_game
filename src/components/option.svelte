<script>
  export let breed, correct, answered, disabled;
  $: answeredClassName = correct ? "correct" : "wrong";
  $: answeredClass = answered ? answeredClassName : "";
  $: paintRight = disabled && correct ? "correct" : "";
</script>

<div class="option {answeredClass} {paintRight} " on:click class:disabled>
  <span class="text">
    {breed}
  </span>
</div>

<style lang="postcss">
  .option {
    position: relative;
    cursor: pointer;
    background-color: #fafaff;
    border-radius: 3.3rem;
    transition: all 0.2s ease-in-out;
    padding: 0.675rem 0;
    color: #37383a;
    width: 80%;
    max-width: 60rem;
    height: auto;

    @media (max-width: 768px) {
      &:last-child {
        margin-bottom: 3rem;
      }
    }
    @media (min-width: 1024px) {
      font-size: 2.8rem;
      margin: 1.2rem 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.6rem;
      margin: 1rem 0;
    }

    @media (max-width: 768px) {
      margin: 0.5rem 0;
      font-size: 2rem;
    }

    &:last-child {
      margin-bottom: 3.3rem;
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
