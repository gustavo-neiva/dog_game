import { writable } from 'svelte/store';
import { shuffle, unslugify } from './helpers';

export const quiz = writable([]);
export const quizIndex = writable(1);

export const buildQuiz = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random/50';
  try {
    // fetch user profile
    const response = await fetch(url);
    if (response.ok) {
      const numberOfQuestions = 12
      const numberOfOptions = 4
      const { message }  = await response.json();
      const images = message;
      let questionIndex = 0;
      const questions = [];
      const shuffledImages = shuffle(images);
      while (questionIndex < numberOfQuestions) {
        const imagesSelection = shuffledImages.splice(0, numberOfOptions);
        const images = imagesSelection.map((url, index) => {
          return { index: index + 1, url }
        })
        const randomElement = images[Math.floor(Math.random() * images.length)];
        const question = { answer: randomElement.index, breed: unslugify(randomElement.url.split('/')[4]), images, index: questionIndex }
        questions.push(question)
        questionIndex += 1
      }
      quiz.set(questions)
    }
  } catch (error) {
    console.error(error)
  }
}
