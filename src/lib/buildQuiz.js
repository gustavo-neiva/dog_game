import { quiz, numberOfQuestions } from "../store"
import { shuffle, unslugify } from './helpers';

const removeBreedFromUrl = (url) => {
  return unslugify(url.split('/')[4])
}

const buildOptions = (correctUrl, imagesUrl) => {
  const allOptions = imagesUrl
  shuffle(allOptions)
  const uniqoptions = [...new Set(allOptions)]
  const wrongUrls = uniqoptions.filter(url => removeBreedFromUrl(url) !== removeBreedFromUrl(correctUrl)).splice(0, 3)
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

export const startGame = () => {
  buildQuiz()
}