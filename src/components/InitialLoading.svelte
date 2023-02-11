<script>
  import LottiePlayer from "@components/LottiePlayer.svelte";
  $: innerHeight = 0;
  $: innerWidth = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="loading">
  <p>Woofing Up Our Quiz!</p>
  <div class="animation">
    <LottiePlayer
      path={"./dog-walking.json"}
      height={innerWidth / 2}
      width={innerWidth / 2}
    />
  </div>
</div>

<style lang="postcss">
  .animation {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-size: 5rem;
    animation: flickerAnimation 2s infinite;
    margin-bottom: 5rem;
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
