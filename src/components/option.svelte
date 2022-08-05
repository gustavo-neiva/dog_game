<script>
  export let breed, correct, answered, disabled;
  $: answeredClassName = correct ? 'correct' : 'wrong'
  $: answeredClass = answered ? answeredClassName : ''
  $: paintRight = disabled && correct ? 'correct' : ''
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
    transition: all .2s ease-in-out;
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
      margin: 1.4rem 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.6rem;
      margin: 1.1rem 0;
    }

    @media (max-width: 768px) {
      font-size: 2.4rem;
    }

    &:last-child {
      margin-bottom: 3.3rem;
    }

    &:hover {
      transform: scale(101.3%);
    }
  }

  .correct {
    background-color: rgb(89,195,100);
  }

  .wrong {
    background-color: rgb(200, 45, 81);
  }

  .disabled {
    pointer-events: none;
  }

  .text {
    padding-left: 1rem;
  }
</style>