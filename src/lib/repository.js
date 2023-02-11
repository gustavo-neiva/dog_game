import { get } from "svelte/store";
import {
  quiz,
  quizIndex,
  answerIndex,
  rowIndex,
  isPlaying,
  answers,
} from "../store";

if (localStorage.getItem("current-game") === null) {
  localStorage.setItem("current-game", JSON.stringify({ isPlaying: false }));
}

export let currentGame = JSON.parse(localStorage.getItem("current-game"));

export const updateGame = () => {
  let game = {
    quiz: get(quiz),
    quizIndex: get(quizIndex),
    answerIndex: get(answerIndex),
    rowIndex: get(rowIndex),
    isPlaying: get(isPlaying),
    answers: get(answers),
  };
  localStorage.setItem("current-game", JSON.stringify(game));
};

export const reloadGame = () => {
  quiz.set(currentGame.quiz);
  answerIndex.set(currentGame.answerIndex);
  rowIndex.set(currentGame.rowIndex + 1);
  quizIndex.set(currentGame.quizIndex);
  answers.set(currentGame.answers);
  isPlaying.set(currentGame.isPlaying);
};
