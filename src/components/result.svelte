<script>
  import {
    answers,
    quiz,
    finished,
    quizIndex,
    answerIndex,
    loading,
  } from "../store";
  import { numberOfQuestions } from "../lib/repository";
  import { newGame } from "../lib/buildQuiz";
  import Button from "./Button.svelte";
  import Statistics from "./Statistics.svelte";

  const reset = () => {
    $quiz = [];
    $answers = [];
    loading.set(true);
    quizIndex.set(0);
    answerIndex.set(-1);
    finished.set(false);
    newGame();
  };

  let correct = $answers.filter((el) => el.correct === true).length;
  let percentRight = correct / numberOfQuestions;

  let funText = "";
  if (percentRight < 0.2) funText = "My cat would know better";
  if (percentRight >= 0.2 && percentRight < 0.4)
    funText = "We guess that you don't know much about dogs";
  if (percentRight >= 0.4 && percentRight < 0.6)
    funText = "Breeds are hard, we know";
  if (percentRight >= 0.6 && percentRight < 0.8) funText = "Aren't dogs great?";
  if (percentRight >= 0.8 && percentRight < 1)
    funText = "You are really into dogs, aren't you?";
  if (percentRight === 1) funText = "You are a Cynophilist! A true dog lover";
</script>

<div class="score">
  <p>
    You got {correct} out of {numberOfQuestions} correct!
  </p>
  <p class="fun-text">{funText}</p>
  <Statistics />
  <Button text="Play again" on:click={() => reset()} />
</div>

<style>
  .score {
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: center;
    font-size: 2.8rem;
    line-height: 5.6rem;
    margin: 2rem;
  }
</style>
