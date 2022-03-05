<style lang="postcss">
  .option {
    cursor: pointer;
    width: 70rem;
    margin: 0.5rem;
    padding-left: 1.4rem;
    font-size: 2.8rem;
    border: 0.2rem solid darkgrey;
    border-radius: 2px;
    &:hover {
      border-color: green;
    }
  }

  .selected {
    border-color: green;
  }

  .correct {
    border-color: blue;
  }
</style>

<script>
  export let breed, selected, correct;
</script>

<div class="option" on:click class:selected >
  {breed}
</div>