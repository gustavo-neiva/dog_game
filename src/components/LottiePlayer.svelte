<script>
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  export let path, height, width, speed = 0.5;

</script>

<LottiePlayer
  src="{path}"
  autoplay="{true}"
  loop="{true}"
  speed="{speed}"
  controls="{false}"
  renderer="svg"
  background="transparent"
  height="{height}"
  width="{width}"
  controlsLayout="{{}}"
/>