<script>
	import Button from "../components/button.svelte";
</script>

<svelte:head>
	<title>Qaul é a raça?</title>
</svelte:head>
<main>
	<h1>Adivinhe a raça</h1>
	<Button href={'/play'} text="Jogar"/>
</main>

<style>
	h1 {
		font-size: 6rem;
	}
</style>