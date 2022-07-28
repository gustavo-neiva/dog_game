<script>
  export let base64;
</script>

<img
  src="{base64}"
  alt="Dog to choose"
  class="dog-img"
>

<style lang="postcss">
  .dog-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all .2s;
    border-radius: 15px;
  }
</style>