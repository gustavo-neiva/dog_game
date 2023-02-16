import { get, writable } from "svelte/store";
import { updateGame, setStats, numberOfQuestions } from "./lib/repository";
import { newGame } from "./lib/buildQuiz";

export const quiz = writable([]);
export const answers = writable([]);
export const quizIndex = writable(0);
export const answerIndex = writable(-1);
export const rowIndex = writable(0);
export const finished = writable(false);
export const loading = writable(false);
export const xIn = writable(700);
export const durationIn = writable(600);
export const durationOut = writable(600);
export const isPlaying = writable(false);
export const timeout = writable(false);

export let autoNext = () => {
  timeout.set(true);
  setTimeout(goToNext, 1500);
};

export const next = () => {
  goToNext();
};

const goToNext = () => {
  xIn.update((n) => (n = Math.abs(n)));
  quizIndex.update((n) => n + 1);
  const index = get(quizIndex);
  if (index >= numberOfQuestions) {
    finished.set(true);
    isPlaying.set(false);
    updateGame();
    setStats();
    return;
  }
  updateGame();
  timeout.set(false);
};

export const back = () => {
  xIn.update((n) => (n = -Math.abs(n)));
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
  newGame();
};
