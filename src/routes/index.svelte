<style lang="postcss">
	main {
		display: flex;
		flex-direction: row;
	}
	h1 {
		font-size: 6rem;
		line-height: 10rem;
		text-align: center;
		-webkit-text-stroke-color: black;
		-webkit-text-stroke-width: 1px;
	}

	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		height: 100vh;
		width: 30%;
	}
	.right {
		width: 70%;
		background-image:
			linear-gradient(
				rgba(0, 0, 0, 0.1),
				rgba(0, 0, 0, 0.1)
			),
			url('./dogs.jpeg');
			min-height: 100vh;
	}

	.icon {
		min-width: 25vh;
		min-height: 25vh;
		cursor: pointer;
		transition: all .2s;

		&:hover {
			transform: scale(1.03);
			&::after {
				position: absolute;
				bottom: 0;
				left: 50%;
				content: 'Play';
				font-size: 4.8rem;
				transform: translate(-50%, 100%);
				color: #F0582F;
				font-weight: bold;
			}
		}

		&:active {
			transform: translateY(-1px);
		}
	}
</style>

<script>
	import InlineSVG from 'svelte-inline-svg';
	import { goto } from '$app/navigation';

	const startGame = () => {
		goto('/play')
	}
</script>

<svelte:head>
	<title>Guess the breed</title>
</svelte:head>

<main>
	<div class="left">
		<h1>Guess the breed</h1>
		<div class="icon" on:click={() => startGame()}>
			<InlineSVG src={'./icon.svg'} />
		</div>
	</div>
	<div class="right">
	</div>
</main>