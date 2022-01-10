import { writable } from 'svelte/store';
import { shuffle, unslugify } from './helpers';

export const quiz = writable([]);
export const answers = writable([]);
export const quizIndex = writable(0);
export const finished = writable(false);
export const numberOfQuestions = 12

const buildQuiz = async () => {
  const numberOfOptions = 4
  const url = 'https://dog.ceo/api/breeds/image/random/50';
  try {
    // fetch user profile
    const response = await fetch(url);
    if (response.ok) {
      const { message }  = await response.json();
      const images = message;
      let questionIndex = 0;
      let imageIndex = 0;
      const questions = [];
      const shuffledImages = shuffle(images);
      while (questionIndex < numberOfQuestions) {
        const imagesSelection = shuffledImages.splice(0, numberOfOptions);
        const images = imagesSelection.map((url) => {
          imageIndex += 1
          return { id: imageIndex, url }
        })
        const randomElement = images[Math.floor(Math.random() * images.length)];
        const question = { answer: randomElement.id, breed: unslugify(randomElement.url.split('/')[4]), images, index: questionIndex }
        questions.push(question)
        questionIndex += 1
      }
      quiz.set(questions)
    }
  } catch (error) {
    console.error(error)
  }
}

export const startGame = () => {
  buildQuiz()
}