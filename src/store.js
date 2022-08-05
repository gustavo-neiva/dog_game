import { writable } from 'svelte/store';

// const storedGames = localStorage.getItem("games");

// export const games = writable(storedGames);
export const quiz = writable([]);
export const answers = writable([]);
export const quizIndex = writable(0);
export const answerIndex = writable(-1);
export const rowIndex = writable(0);
export const finished = writable(false);
export const loading = writable(true);
export const xIn = writable(700);
export const durationIn = writable(2000);
export const durationOut = writable(600);
export const numberOfQuestions = 12 //max is 12


// games.subscribe(value => {
//   localStorage.setItem("games", value);
// });

export const next = () => {
  xIn.update(n => n = Math.abs(n))
  quizIndex.update(n => n + 1)
  if(quizIndex >= numberOfQuestions) {
    finished.set(true)
  }
}

export const back = () => {
  xIn.update(n => n = -Math.abs(n))
  quizIndex.update(n => n - 1);
}