<script>
  import LottiePlayer from "@components/LottiePlayer.svelte";
  $: innerHeight = 0;
  $: innerWidth = 0;
  $: scale = innerWidth / 2;

  $: {
    if (innerWidth < 760) {
      scale = innerWidth;
    }
  }
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="loading">
  <p>Woofing Up Our Quiz!</p>
  <div class="animation">
    <LottiePlayer
      path={"./canine-cognition/dog-walking.json"}
      height={scale}
      width={scale}
    />
  </div>
</div>

<style lang="postcss">
  .animation {
    height: 70em;
    width: 70em;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  .loading {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    animation: flickerAnimation 2s infinite;

    @media screen and (max-width: 768px) {
      margin-bottom: 3rem;
      font-size: 4.5rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin-bottom: 2rem;
      font-size: 4rem;
    }

    @media screen and (min-width: 1024px) {
      margin-bottom: 1rem;
      font-size: 5rem;
    }
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
