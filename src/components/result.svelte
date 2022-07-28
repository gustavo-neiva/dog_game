<script>
  import { goto } from '$app/navigation';
  import LottiePlayer from './LottiePlayer.svelte';
  import { answers, numberOfQuestions, quiz, finished, quizIndex, answerIndex, startGame} from '../store';
	import Button from "./button.svelte";

  const reset = () => {
    $quiz = [];
    $answers = [];
    quizIndex.set(0)
    answerIndex.set(-1)
    finished.set(false)
    startGame()
    goto('/play')
  }

  let correct = $answers.filter(el => el.correct === true).length;
  let percentRight = correct/numberOfQuestions

  let funText = ""
  if (percentRight < 0.2) funText = "My cat would know better"
  if (percentRight >= 0.2 && percentRight < 0.4) funText = "We guess that you don't know much about dogs"
  if (percentRight >= 0.4 && percentRight < 0.6) funText = "Breeds are hard, we know"
  if (percentRight >= 0.6 && percentRight < 0.8) funText = "Aren't dogs great?"
  if (percentRight >= 0.8 && percentRight < 1) funText = "You are really into dogs, aren't you?"
  if (percentRight === 1) funText = "You are a Cynophilist! Yeah, a dog lover"
</script>

<div class="score">
  <h3>
    You got {correct} out of {numberOfQuestions} correct!
    <br>
    {funText}
  </h3>

  <LottiePlayer path={'./dog-walking.json'} height={300} width={300}/>

  <Button
    on:click={reset}
    texto={"Restart"}
  />
</div>

<style>
  .score {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    text-align: center;
    font-size: 2.8rem;
    line-height: 5.6rem;
    margin: 2rem;
  }
</style>