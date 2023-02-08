<script>
	import { fade } from 'svelte/transition';
	import { startGame } from '../lib/buildQuiz';
	import { finished, loading } from '../store';
	import Result from '$components/result.svelte';
	import Quiz from '$components/quiz.svelte';
	import InitialLoading from '$components/InitialLoading.svelte';

	startGame();
</script>

<div id="main">
	{#if $finished}
		<Result />
	{:else if $loading}
		<InitialLoading />
	{:else}
		<div class="quiz" in:fade={{ duration: 1500 }}>
			<Quiz />
		</div>
	{/if}
</div>

<style lang="postcss">
	#main {
		text-align: center;
		padding-top: 0.5rem;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
