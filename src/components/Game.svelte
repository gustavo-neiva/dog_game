<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { newGame } from "../lib/buildQuiz";
  import { currentGame, reloadGame } from "../lib/repository";
  import { finished, isPlaying, loading } from "../store";
  import Result from "@components/Result.svelte";
  import Quiz from "@components/Quiz.svelte";
  import InitialLoading from "@components/InitialLoading.svelte";
  import QuizProgress from "@components/QuizProgress.svelte";

  const startGame = async () => {
    if (currentGame.isPlaying) {
      reloadGame();
    } else {
      await newGame();
    }
  };

  onMount(() => {
    startGame();
  });
</script>

<div id="main">
  {#if $finished}
    <Result />
  {:else if $loading}
    <InitialLoading />
  {:else if $isPlaying}
    <div class="quiz" in:fade={{ duration: 1500 }}>
      <QuizProgress />
      <Quiz />
    </div>
  {/if}
</div>

<style lang="postcss">
  #main {
    text-align: center;
    padding-top: 0.5rem;
  }

  .quiz {
    @media screen and (min-width: 1024px) {
      height: 92vh;
    }

    @media screen and (max-width: 768px) {
      height: 80vh;
    }
  }
</style>
