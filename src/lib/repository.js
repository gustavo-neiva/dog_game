import {
  quiz,
  loading,
  quizIndex,
  answerIndex,
  rowIndex,
  finished,
  isPlaying,
  answers,
} from "../store";

export let currentGame = localStorage.getItem("current-game");

export const updateGame = () => {
  console.log("atualizando");
  localStorage.setItem("current-game", {
    quiz,
    loading,
    quizIndex,
    answerIndex,
    rowIndex,
    finished,
    isPlaying,
    answers,
  });
  console.log(currentGame);
};
