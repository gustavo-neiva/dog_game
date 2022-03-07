<style lang="postcss">
  .option {
    cursor: pointer;
    width: 70rem;
    margin: 0.5rem;
    padding-left: 1.4rem;
    font-size: 2.8rem;
    border: 0.2rem solid darkgrey;
    border-radius: 0.5rem;
    transition: all .2s ease-in-out;
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