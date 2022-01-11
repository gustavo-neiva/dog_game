<script>
	import InlineSVG from 'svelte-inline-svg'
	import { goto } from '$app/navigation';

	const startGame = () => {
		goto('/play')
	}
</script>

<svelte:head>
	<title>Guess the breed</title>
</svelte:head>

<main>
	<h1>Guess the breed</h1>
	<div class="icon" on:click={() => startGame()}>
		<InlineSVG src={'./icon.svg'} />
	</div>
</main>

<style lang="postcss">
	h1 {
		font-size: 6rem;
		text-align: center;
	}

	.icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 25vh;
		height: 25vh;
		cursor: pointer;
    transition: all .2s;

		&:hover {
			transform: translate(-50%, -50%) scale(1.03);
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
			transform: translate(-50%, -50%) translateY(-1px);
		}
	}
</style>