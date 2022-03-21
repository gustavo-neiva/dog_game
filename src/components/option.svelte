<style lang="postcss">
  .option {
    cursor: pointer;
    border: 0.2rem solid darkgrey;
    border-radius: 0.5rem;
    transition: all .2s ease-in-out;
    margin: 0.5rem;

    @media screen and (max-width: 768px) {
      width: 30rem;
      padding-left: 1rem;
      font-size: 2.2rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 50rem;
      padding-left: 1.2rem;
      font-size: 2.4rem;
    }

    @media screen and (min-width: 1024px) {
      width: 70rem;
      padding-left: 1.4rem;
      font-size: 2.8rem;
    }
  }

  .selected {
    border-color: maroon;
    border-width: 0.3rem;
  }

  .correct {
    border-color: #3AA394;
    border-width: 0.4rem;
  }

  .wrong {
    border-color: red;
    border-width: 0.4rem;
  }

  .disabled {
    pointer-events: none;
  }
</style>

<script>
  export let breed, selected, correct, answered, disabled;
  $: answeredClassName = correct ? 'correct' : 'wrong'
  $: answeredClass = answered ? answeredClassName : null
  $: paintRight = disabled && correct ? 'correct' : null
</script>

<div class="option {answeredClass} {paintRight}" on:click class:selected class:disabled>
  {breed}
</div>