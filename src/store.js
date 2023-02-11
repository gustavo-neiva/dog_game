import { get, writable } from "svelte/store";
import { updateGame } from "./lib/repository";

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
export const numberOfQuestions = 12; //max is 12
export const isPlaying = writable(false);

export const next = () => {
  xIn.update((n) => (n = Math.abs(n)));
  quizIndex.update((n) => n + 1);
  const index = get(quizIndex);
  if (index >= numberOfQuestions) {
    finished.set(true);
    isPlaying.set(false);
  }
  updateGame();
};

export const back = () => {
  xIn.update((n) => (n = -Math.abs(n)));
  quizIndex.update((n) => n - 1);
  updateGame();
};
