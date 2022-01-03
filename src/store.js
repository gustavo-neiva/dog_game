import { writable } from 'svelte/store';
import { shuffle, unslugify } from './helpers';

export const quiz = writable([]);

export const buildQuiz = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random/50';
  try {
    // fetch user profile
    const response = await fetch(url);
    if (response.ok) {
      const { message }  = await response.json();
      const images = message;
      let nQuestions = 5;
      const questions = [];
      const shuffledImages = shuffle(images);
      while (nQuestions > 0) {
        const imagesSelection = shuffledImages.splice(0, 5);
        const images = imagesSelection.map((url, index) => {
          return { index: index + 1, url }
        })
        const randomElement = images[Math.floor(Math.random() * images.length)];
        const answerObj = { index: randomElement.index, breed: unslugify(randomElement.url.split('/')[4]) }
        const question = { question: answerObj, images }
        questions.push(question)
        nQuestions -= 1
      }
      quiz.set(questions)
    }
  } catch (error) {
    console.error(error)
  }
}
