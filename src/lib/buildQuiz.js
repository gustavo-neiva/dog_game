import { quiz, loading, isPlaying } from "../store";
import { updateGame, numberOfQuestions } from "./repository";
import { shuffle, unslugify } from "./helpers";

const removeBreedFromUrl = (url) => {
  return unslugify(url.split("/")[4]);
};

const preload = async (src) => {
  const resp = await fetch(src);
  const blob = await resp.blob();

  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
  });
};

const buildOptions = (correctUrl, imagesUrl) => {
  const allOptions = imagesUrl;
  const breeds = allOptions.map((url) => removeBreedFromUrl(url));
  shuffle(breeds);
  const uniqoptions = [...new Set(breeds)];
  const breed = removeBreedFromUrl(correctUrl);
  const wrongUrls = uniqoptions.filter((url) => url !== breed).splice(0, 3);
  const wrongOptions = wrongUrls.map((url) => {
    return { correct: false, breed: url };
  });
  const correctOption = {
    correct: true,
    breed,
  };
  const orderedOptions = [...wrongOptions, correctOption];
  const options = shuffle(orderedOptions);
  return options;
};

const buildQuiz = async () => {
  const url = `https://dog.ceo/api/breeds/image/random/50`;
  let questionIndex = 0;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const { message } = await response.json();
      const images = message;
      const shuffledImages = shuffle(images);
      while (questionIndex < numberOfQuestions) {
        const [randomElement] = shuffledImages.splice(
          Math.floor(Math.random() * images.length),
          1
        );
        const question = {
          options: buildOptions(randomElement, shuffledImages),
          image: await preload(randomElement),
          index: questionIndex,
          answered: false,
        };
        quiz.update((items) => {
          items.push(question);
          return items;
        });
        questionIndex += 1;
        isPlaying.set(true);
        loading.set(false);
      }
      updateGame();
    }
  } catch (error) {
    console.error(
      `error while loading images or acessing dog's api: ${error}. retrying`
    );
    newGame();
  }
};

export const newGame = async () => {
  loading.set(true);
  await buildQuiz();
};
