<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { newGame } from "../lib/buildQuiz";
  import { currentGame, reloadGame } from "../lib/repository";
  import { loading, showStats, showInfo } from "../store";
  import Result from "@components/Result.svelte";
  import Quiz from "@components/Quiz.svelte";
  import InitialLoading from "@components/InitialLoading.svelte";
  import QuizProgress from "@components/QuizProgress.svelte";
  import Modal from "@components/Modal.svelte";
  import Info from "@components/Info.svelte";

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
  {#if $showStats && !$loading}
    <Modal on:close={() => showStats.set(false)}>
      <Result />
    </Modal>
  {/if}
  {#if $showInfo && !$loading}
    <Modal on:close={() => showInfo.set(false)}>
      <Info />
    </Modal>
  {/if}
  {#if $loading}
    <InitialLoading />
  {:else}
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
</style>
