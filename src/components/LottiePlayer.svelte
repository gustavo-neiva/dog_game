<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function finishAnimation() {
		dispatch('finish', true);
	}

	export let path,
		height,
		width,
		speed = 0.5,
		loop = true;
	let LottiePlayer;
	let player;

	$: innerWidth = 0;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

	$: {
		if (player) {
			const lottie = player.getLottie();
			lottie.addEventListener('complete', () => {
				console.log('complete');
				finishAnimation();
			});
		}
	}
</script>

<svelte:window bind:innerWidth />

{#if LottiePlayer}
	<LottiePlayer
		src={path}
		autoplay={true}
		{loop}
		{speed}
		controls={false}
		renderer="svg"
		background="transparent"
		{height}
		width={width || innerWidth}
		controlsLayout={{}}
		bind:this={player}
	/>
{/if}
