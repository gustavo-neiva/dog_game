<script>
  import { onMount } from 'svelte';

  export let path, height, width, speed = 0.5, loop = true;
  let LottiePlayer;

  onMount(async () => {
    const module = await import('@lottiefiles/svelte-lottie-player');
    LottiePlayer = module.LottiePlayer;
  });
</script>

{#if LottiePlayer}
  <LottiePlayer
    src="{path}"
    autoplay="{true}"
    loop="{loop}"
    speed="{speed}"
    controls="{false}"
    renderer="svg"
    background="transparent"
    height="{height}"
    width="{width}"
    controlsLayout="{{}}"
  />
{/if}