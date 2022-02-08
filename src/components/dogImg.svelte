<style lang="postcss">
  .dog-img {
    cursor: pointer;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all .2s;
    border: 1px solid #ccc;
  }

  .dog-img:hover:not(.selected) {
    transform: scale(1.03, 1.01) translateY(3px);
    border: 0.2rem solid tan;
    filter: drop-shadow(0 0 3rem tan);
  }

  .selected {
    border: 0.2rem solid gold;
    filter: drop-shadow(0 0 2rem gold);
  }
</style>

<script>
  import LottiePlayer from './LottiePlayer.svelte';

  export let id
  export let url
  export let selected

  const preload = async (src) => {
    const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise((resolve) =>{
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
  };
</script>

{#await preload(url)}
  <div class="loading">
    <LottiePlayer path={'./dog-loading.json'} height={300} width={300}/>
  </div>
{:then base64}
  <img
    src="{base64}"
    id={id}
    alt="Dog to choose"
    class="dog-img"
    on:click
    class:selected
  >
{/await}