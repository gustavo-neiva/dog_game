import { writable } from 'svelte/store';
import { shuffle, unslugify } from './helpers';

export const quiz = writable([]);
export const answers = writable([]);
export const quizIndex = writable(0);
export const answerIndex = writable(-1);
export const finished = writable(false);
export const loading = writable(true);
export const xIn = writable(900);
export const durationIn = writable(2000);
export const durationOut = writable(800);
export const numberOfQuestions = 12 //max is 12

const removeBreedFromUrl = (url) => {
  return unslugify(url.split('/')[4])
}

const buildOptions = (correctUrl, imagesUrl) => {
  const allOptions = imagesUrl
  shuffle(allOptions)
  const wrongUrls = allOptions.filter(url => removeBreedFromUrl(url) !== removeBreedFromUrl(correctUrl)).splice(0, 3)
  const wrongOptions = wrongUrls.map(url => {
    return { correct: false, breed: removeBreedFromUrl(url)}
  })
  const correctOption = { correct: true, breed: unslugify(correctUrl.split('/')[4])}
  const orderedOptions = [ ...wrongOptions, correctOption ]
  const options = shuffle(orderedOptions)
  return options
}

const buildQuiz = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random/50';
  let questionIndex = 0;
  const questions = [];

  try {
    const response = await fetch(url);
    if (response.ok) {
      const { message }  = await response.json();
      const images = message;
      const shuffledImages = shuffle(images);
      while (questionIndex < numberOfQuestions) {
        const [ randomElement ]= shuffledImages.splice(Math.floor(Math.random() * images.length), 1);
        const question = { options: buildOptions(randomElement, shuffledImages), image: randomElement, index: questionIndex, answered: false }
        questions.push(question)
        questionIndex += 1
      }
      quiz.set(questions)
    }
  } catch (error) {
    console.error(error)
  }
}

export const next = () => {
  xIn.set(900);
  quizIndex.update(n => n + 1)
  if(quizIndex == numberOfQuestions) {
    finished.set(true)
  }
}

export const back = () => {
  xIn.set(-900);
  quizIndex.update(n => n - 1);
}

export const startGame = () => {
  buildQuiz()
}