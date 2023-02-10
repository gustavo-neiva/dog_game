<script>
  import LottiePlayer from "@components/LottiePlayer.svelte";
  $: innerHeight = 0;
  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="loading">
  <p>Woofing Up Your Knowledge!</p>
  <LottiePlayer
    path={"./dog-walking.json"}
    height={innerWidth / 3}
    width={innerWidth / 3}
  />
</div>

<style lang="postcss">
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-size: 3rem;
    animation: flickerAnimation 2s infinite;
  }

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
