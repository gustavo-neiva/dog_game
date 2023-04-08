import { get, writable } from "svelte/store";
import { updateGame, numberOfQuestions, setStats } from "./lib/repository";
import { newGame } from "./lib/buildQuiz";

export const quiz = writable([]);
export const answers = writable([]);
export const quizIndex = writable(0);
export const answerIndex = writable(-1);
export const rowIndex = writable(0);
export const finished = writable(false);
export const loading = writable(false);
export const durationIn = writable(600);
export const durationOut = writable(600);
export const isPlaying = writable(false);
export const timeout = writable(false);
export const showStats = writable(false);
export const showInfo = writable(false);

export let autoNext = () => {
  timeout.set(true);
  setTimeout(goToNext, 1500);
};

export const next = () => {
  goToNext();
};

const goToNext = () => {
  const index = get(quizIndex);
  if (get(isPlaying) == false) {
    if (index + 1 == numberOfQuestions) {
      showStats.set(true);
      return;
    } else {
      quizIndex.update((n) => n + 1);
      return;
    }
  }
  if (index + 1 == numberOfQuestions) {
    setStats();
    finished.set(true);
    isPlaying.set(false);
    showStats.set(true);
  } else {
    quizIndex.update((n) => n + 1);
  }
  updateGame();
  timeout.set(false);
};

export const back = () => {
  quizIndex.update((n) => n - 1);
  updateGame();
};

export const reset = () => {
  quiz.set([]);
  answers.set([]);
  loading.set(true);
  quizIndex.set(0);
  answerIndex.set(-1);
  finished.set(false);
  showStats.set(false);
  showInfo.set(false);
  newGame();
};
