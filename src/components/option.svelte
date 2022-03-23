<style lang="postcss">
  .option {
    cursor: pointer;
    border: 0.2rem solid darkgrey;
    border-radius: 0.5rem;
    transition: all .2s ease-in-out;
    margin: 0.7rem 0;
    width: 100%;
    
    @media (min-width: 1024px) {
      font-size: 2.8rem;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.4rem;
    }

    @media (max-width: 768px) {
      font-size: 2.2rem;
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

  .text {
    padding-left: 1rem;
  }
</style>

<script>
  export let breed, selected, correct, answered, disabled;
  $: answeredClassName = correct ? 'correct' : 'wrong'
  $: answeredClass = answered ? answeredClassName : null
  $: paintRight = disabled && correct ? 'correct' : null
</script>

<div class="option {answeredClass} {paintRight}" on:click class:selected class:disabled>
  <span class="text">
    {breed}
  </span>
</div>