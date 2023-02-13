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

if (localStorage.getItem("stats") === null) {
  localStorage.setItem(
    "stats",
    JSON.stringify({ nGames: 0, maxStreak: 0, lastStreak: 0, allAnswers: [] })
  );
}

export let currentGame = JSON.parse(localStorage.getItem("current-game"));

export let stats = () => JSON.parse(localStorage.getItem("stats"));

export const updateGame = () => {
  const game = {
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

export const setStats = () => {
  let { nGames, maxStreak, allAnswers } = stats();
  const numberGames = nGames + 1;
  console.log(numberGames, nGames);
  const lastAnswers = get(answers);
  const correctAnswers = lastAnswers.filter((obj) => obj.correct === true);
  const streak = correctAnswers.length;
  const newMaxStreak = Math.max(maxStreak, streak);
  const updatedAnswers = [...allAnswers, lastAnswers];
  const updatedStats = {
    nGames: numberGames,
    lastStreak: streak,
    maxStreak: newMaxStreak,
    allAnswers: updatedAnswers,
  };
  localStorage.setItem("stats", JSON.stringify(updatedStats));
};
