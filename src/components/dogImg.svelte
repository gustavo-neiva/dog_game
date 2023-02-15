<script>
  export let image;
</script>

<img src={image} alt="Dog to choose" class="dog-img" />

<style lang="postcss">
  .dog-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.2s;
    border-radius: 15px;
  }
</style>
