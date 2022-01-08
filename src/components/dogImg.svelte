<script>
  export let id
  export let url
  export let selected
</script>

<img
  src={url}
  id={id}
  alt="Dog to choose"
  class="dog-option"
  lazy
  on:click
  class:selected
>

<style>
  .dog-option {
    width:  35rem;
    height: 35rem;
    object-fit: cover;
    border-radius: 8%;
    cursor: pointer;
  }

  .dog-option:hover:not(.selected) {
    border: 1rem solid red;
    border-radius: 8%;
  }

  .selected {
    border: 1rem solid blue;
  }
</style>