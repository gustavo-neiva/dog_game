<script>
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";
  import { answers, reset, finished } from "../store";
  import { numberOfQuestions } from "../lib/repository";
  import { copyTextToClipboard } from "../lib/helpers";
  import Button from "@components/Button.svelte";
  import Statistics from "@components/Statistics.svelte";

  let theme = {
    "--toastBackground": "#ff7700",
    "--toastColor": "white",
    "--toastBarHeight": 0,
  };

  const clipboardText = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const url = window.location.href;
    const simpleUrl = url.replace(/(^\w+:|^)\/\//, "");
    copyTextToClipboard(simpleUrl);
    toast.push("Copied to ctrl + v!", { theme, duration: 1500 });
  };

  let correct = $answers.filter((el) => el.correct === true).length;
  let percentRight = correct / numberOfQuestions;

  let funText = "";
  if (percentRight < 0.2) funText = "A cat would know better...";
  if (percentRight >= 0.2 && percentRight < 0.4)
    funText = "We guess that you don't like dogs that much";
  if (percentRight >= 0.4 && percentRight < 0.6)
    funText = "Breeds are hard, we know";
  if (percentRight >= 0.6 && percentRight < 0.8) funText = "Aren't dogs great?";
  if (percentRight >= 0.8 && percentRight < 1)
    funText = "You are really into dogs, aren't you?";
  if (percentRight === 1) funText = "You are a Cynophilist! A true dog lover";
</script>

<div class="toast">
  <SvelteToast options={{ reversed: true, intro: { y: -198 } }} />
</div>

<div class="score">
  {#if $finished}
    <h3>
      You got {correct} out of {numberOfQuestions} correct!
    </h3>
    <p>{funText}</p>
  {/if}
  <Statistics />
  <div class="buttons">
    {#if $finished}
      <Button text="Play again" on:click={() => reset()} />
    {/if}
    <Button text="Share" on:click={(e) => clipboardText(e)} />
  </div>
</div>

<style lang="postcss">
  :root {
    --toastContainerTop: 8rem;
    --toastContainerRight: auto;
    --toastContainerBottom: auto;
    --toastContainerLeft: calc(50% - 8rem);
  }

  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2a2550;
    max-width: 72rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    width: 85%;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      padding: 1rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 2rem;
      padding: 2rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3rem;
      padding: 3rem;
    }
  }

  h3 {
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.4rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 2.8rem;
    }
  }

  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    max-width: 60rem;
    width: 100%;
  }

  .toast {
    z-index: 9999;
  }
</style>
