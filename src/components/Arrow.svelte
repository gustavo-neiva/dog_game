<script>
  import { next, back } from "../store";
  export let direction = "right";
</script>

<div class="arrow {direction}" on:click={direction == "right" ? next : back} />

<style lang="postcss">
  .arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 3vmin;
    height: 3vmin;
    background: transparent;
    border-top: 1vmin solid white;
    border-right: 1vmin solid white;
    box-shadow: 0 0 0 lightgray;
    transition: all 200ms ease;
    z-index: 9999;

    &.left {
      left: 2.4rem;
      transform: translate3d(0, -50%, 0) rotate(-135deg);
    }

    &.right {
      right: 2rem;
      transform: translate3d(0, -50%, 0) rotate(45deg);
    }

    &:hover {
      border-color: #a88960;
      box-shadow: 0.5vmin -0.5vmin 0 white;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-40%, -60%) rotate(45deg);
      width: 200%;
      height: 200%;
    }
  }
</style>
