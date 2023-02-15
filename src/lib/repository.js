import { get } from "svelte/store";
import {
  quiz,
  quizIndex,
  answerIndex,
  rowIndex,
  isPlaying,
  answers,
} from "../store";

export const numberOfQuestions = 12; //max is 12

const defaultStreaks = [...Array(numberOfQuestions + 1).keys()].map((v) => {
  return { number: v, value: 0 };
});

if (localStorage.getItem("current-game") === null) {
  localStorage.setItem("current-game", JSON.stringify({ isPlaying: false }));
}

if (localStorage.getItem("stats") === null) {
  localStorage.setItem(
    "stats",
    JSON.stringify({
      nGames: 0,
      maxStreak: 0,
      lastStreak: 0,
      allAnswers: [],
      streaks: defaultStreaks,
    })
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
  let { nGames, maxStreak, allAnswers, streaks } = stats();
  const numberGames = nGames + 1;
  console.log(numberGames, nGames);
  const lastAnswers = get(answers);
  const correctAnswers = lastAnswers.filter((obj) => obj.correct === true);
  const streak = correctAnswers.length;
  const newMaxStreak = Math.max(maxStreak, streak);
  const updatedAnswers = [...allAnswers, lastAnswers];
  const streaksCopy = [...streaks];
  const newStreaks = streaksCopy.map((p) =>
    p.number === streak ? { number: p.number, value: p.value + 1 } : p
  );
  const updatedStats = {
    nGames: numberGames,
    lastStreak: streak,
    maxStreak: newMaxStreak,
    allAnswers: updatedAnswers,
    streaks: newStreaks,
  };
  localStorage.setItem("stats", JSON.stringify(updatedStats));
};

export const graphStreaks = () => {
  const { streaks } = stats();
  return streaks;
};

export const getStats = () => {
  const { nGames, lastStreak, maxStreak, allAnswers } = stats();
  const average =
    allAnswers
      .map((a) => a.filter((v) => v.correct === true).length / a.length)
      .reduce((prev, curr) => prev + curr) / allAnswers.length;
  return { nGames, lastStreak, maxStreak, average };
};
