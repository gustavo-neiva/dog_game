<script>
	import InlineSVG from 'svelte-inline-svg'

  export let id
  export let url
  export let selected

  let image = null;
	$: image;

  const preload = async (src) => {
    const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise(function (resolve) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject('Error: ', error);
		});
  };
</script>

{#await preload(url)}
  <InlineSVG src={'./loading.svg'} />
{:then base64}
  <img
    src="{base64}"
    id={id}
    alt="Dog to choose"
    class="dog-option"
    on:click
    class:selected
  >
{/await}
<style>
  .dog-option {
    cursor: pointer;
    border-radius: 8%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all .2s;
  }

  .dog-option:hover:not(.selected) {
    border: 0.3rem solid brown;
    filter: drop-shadow(0 0 2rem brown);
    border-radius: 8%;
  }

  .selected {
    border: 0.3rem solid gold;
    filter: drop-shadow(0 0 2rem gold);
  }
</style>