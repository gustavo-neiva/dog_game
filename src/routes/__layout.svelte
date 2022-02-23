<script>
	import '../app.css';
	// import Nav from '../components/Nav.svelte';
	// import Footer from '../components/Footer.svelte';
</script>

<div class="game">
	<!-- <Nav/> -->
		<div class="content">
			<slot />
		</div>
	<!-- <Footer /> -->
</div>

<style>
	.game {
		display: flex;
		flex-direction: column;
	}

	.content {
		max-width: 100%;
		height: 100%;
	}
</style>
