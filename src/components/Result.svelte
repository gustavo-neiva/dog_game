<script>
  import { goto } from '$app/navigation';
  import LottiePlayer from './LottiePlayer.svelte'
  import { answers, numberOfQuestions, quiz, finished, quizIndex, startGame} from '../store'
  const correct = $answers.filter(Boolean).length;
	import Button from "./Button.svelte";

  const reset = () => {
    $quiz = [];
    $answers = [];
    quizIndex.set(0)
    finished.set(false)
    startGame()
    goto('/play')
  }
</script>

<div class="score">
  <h2>
    You got {correct} out of {numberOfQuestions} correct! Are you a dog whisperer?
  </h2>

  <LottiePlayer path={'./dog-walking.json'} height={300} width={300}/>

  <ul>
    {#each $answers as answer}
      <li>{answer}</li>
    {/each}
  </ul>

  <Button text="Restart" href='' on:click={reset} />
</div>

<style>
  li {
    font-size: 3rem;
  }
</style>