<style lang="postcss">
  .option {
    cursor: pointer;
    width: 50rem;
    height: 3rem;
  }
</style>

<script>
  export let correct, breed, selected;
</script>

<div class="option" on:click class:selected>
  {breed}
</div>