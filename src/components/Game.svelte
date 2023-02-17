<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { newGame } from "../lib/buildQuiz";
  import { currentGame, reloadGame } from "../lib/repository";
  import { loading, showModal } from "../store";
  import Result from "@components/Result.svelte";
  import Quiz from "@components/Quiz.svelte";
  import InitialLoading from "@components/InitialLoading.svelte";
  import QuizProgress from "@components/QuizProgress.svelte";
  import Modal from "@components/Modal.svelte";

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
  {#if $showModal && !$loading}
    <Modal on:close={() => showModal.set(false)}>
      <Result />
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

  .quiz {
    @media screen and (min-width: 1024px) {
      height: 92vh;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: 80vh;
    }

    @media screen and (max-width: 768px) {
      height: 7vh;
    }
  }
</style>
