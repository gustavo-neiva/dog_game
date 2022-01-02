
<script>
	import Nav from "../components/nav.svelte";
	import Footer from "../components/footer.svelte";
</script>

<div class="container">
	<Nav/>
	<div class="content">
		<slot></slot>
	</div>
	<Footer/>
</div>

<style>
	.container {
		background-color: #CA965C;
	}

	.content {
		max-width: 100%;
		height: 100vh;
	}
</style>