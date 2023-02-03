import { quiz, numberOfQuestions, loading } from '../store';
import { shuffle, unslugify } from './helpers';

const removeBreedFromUrl = (url) => {
	return unslugify(url.split('/')[4]);
};

const preload = async (src) => {
	console.log(src);
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
	shuffle(allOptions);
	const uniqoptions = [...new Set(allOptions)];
	const wrongUrls = uniqoptions
		.filter((url) => removeBreedFromUrl(url) !== removeBreedFromUrl(correctUrl))
		.splice(0, 3);
	const wrongOptions = wrongUrls.map((url) => {
		return { correct: false, breed: removeBreedFromUrl(url) };
	});
	const correctOption = { correct: true, breed: unslugify(correctUrl.split('/')[4]) };
	const orderedOptions = [...wrongOptions, correctOption];
	const options = shuffle(orderedOptions);
	return options;
};

const buildQuiz = async () => {
	const url = 'https://dog.ceo/api/breeds/image/random/50';
	let questionIndex = 0;

	try {
		const response = await fetch(url);
		if (response.ok) {
			const { message } = await response.json();
			const images = message;
			const shuffledImages = shuffle(images);
			while (questionIndex < numberOfQuestions) {
				const [randomElement] = shuffledImages.splice(Math.floor(Math.random() * images.length), 1);
				const question = {
					options: buildOptions(randomElement, shuffledImages),
					image: await preload(randomElement),
					index: questionIndex,
					answered: false
				};
				quiz.update((items) => {
					items.push(question);
					return items;
				});
				questionIndex += 1;
				loading.set(false);
			}
		}
	} catch (error) {
		console.error(error);
	}
};

export const startGame = () => {
	buildQuiz();
};