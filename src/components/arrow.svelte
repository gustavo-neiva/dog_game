<style lang="postcss">
  .wrapper {
    height: 4.8rem;
    width: 4.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    margin: auto;
    transform: scale(2);
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(2.4);
    }
  }

  .arrow {
    fill: #222222;
  }

</style>

<script>
	import InlineSVG from 'svelte-inline-svg';
  export let direction;

  $: texto = direction === 'right' ? 'Next' : 'Return'
</script>

<div class="wrapper">
  <div class="arrow" on:click>
    <InlineSVG src={`./arrow-${direction}.svg`} />
  </div>
  <div class="texto">
    {texto}
  </div>
</div>
