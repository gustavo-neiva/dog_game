<style lang="postcss">
  .dog-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all .2s;
    border-radius: 15px;
  }
</style>

<script>
  import LottiePlayer from './LottiePlayer.svelte';
  
  export let url;

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
    alt="Dog to choose"
    class="dog-img"
  >
{/await}