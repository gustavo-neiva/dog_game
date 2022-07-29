<script>
  import LottiePlayer from './LottiePlayer.svelte';

  export let breed, correct, answered, disabled, isCorrect;
  $: answeredClassName = correct ? 'correct' : 'wrong'
  $: answeredClass = answered ? answeredClassName : ''
  $: paintRight = disabled && correct ? 'correct' : ''
  $: innerWidth = 0;
  $: innerHeight = 0;

  let played = false;

  const translateX = '50%';
  $: translateY = innerHeight >= innerWidth ? `-${innerHeight * 0.01}rem` : '-100%';
</script>

<svelte:window bind:innerWidth bind:innerHeight/>

<div class="option {answeredClass} {paintRight} " on:click class:disabled>
  {#if answered && isCorrect && !played}
    <div class="animation" style='transform: translate({translateX}, {translateY});'>
      <LottiePlayer path={'./correct.json'} height={innerHeight/2} width={innerWidth/2} loop={false}/>
      {played = true}
    </div>
  {/if}
  <span class="text">
    {breed}
  </span>
</div>

<style lang="postcss">
  .option {
    position: relative;
    cursor: pointer;
    background-color: #fafaff;
    border-radius: 3.3rem;
    transition: all .2s ease-in-out;
    padding: 0.675rem 0;
    color: #37383a;
    width: 100%;
    
    @media (min-width: 1024px) {
      font-size: 2.8rem;
      margin: 1.4rem 0;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.2rem;
      margin: 1.1rem 0;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
      margin: 0.6rem 0;
    }

    &:last-child {
      margin-bottom: 3.3rem;
    }

    &:hover {
      transform: scale(101.3%);
    }
  }

  .correct {
    background-color: rgb(89,195,100);
  }

  .wrong {
    background-color: rgb(200, 45, 81);
  }

  .disabled {
    pointer-events: none;
  }

  .text {
    padding-left: 1rem;
  }

  .animation {
    position: absolute;
    z-index: 999;
    top: 0;
    right: 50%;
  }

</style>