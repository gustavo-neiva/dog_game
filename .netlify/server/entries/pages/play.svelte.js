var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Play
});
var import_index_95cee8a2 = require("../../chunks/index-95cee8a2.js");
const subscriber_queue = [];
function writable(value, start = import_index_95cee8a2.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_95cee8a2.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_95cee8a2.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_95cee8a2.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }
  return array;
}
function unslugify(slug) {
  const result = slug.replace(/\-/g, " ");
  return result.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
const quiz = writable([]);
const answers = writable([]);
const quizIndex = writable(0);
const answerIndex = writable(-1);
const finished = writable(false);
const numberOfQuestions = 12;
const buildOptions = (correctUrl, imagesUrl) => {
  const allOptions = imagesUrl;
  shuffle(allOptions);
  const wrongUrls = allOptions.filter((url) => url !== correctUrl).splice(0, 3);
  const wrongOptions = wrongUrls.map((url) => {
    return { correct: false, breed: unslugify(url.split("/")[4]) };
  });
  const correctOption = { correct: true, breed: unslugify(correctUrl.split("/")[4]) };
  const orderedOptions = [...wrongOptions, correctOption];
  const options = shuffle(orderedOptions);
  return options;
};
const buildQuiz = async () => {
  const url = "https://dog.ceo/api/breeds/image/random/50";
  let questionIndex = 0;
  const questions = [];
  try {
    const response = await fetch(url);
    if (response.ok) {
      const { message } = await response.json();
      const images = message;
      const shuffledImages = shuffle(images);
      while (questionIndex < numberOfQuestions) {
        const [randomElement] = shuffledImages.splice(Math.floor(Math.random() * images.length), 1);
        const question = { options: buildOptions(randomElement, shuffledImages), image: randomElement, index: questionIndex, answered: false };
        questions.push(question);
        questionIndex += 1;
      }
      quiz.set(questions);
    }
  } catch (error) {
    console.error(error);
  }
};
const startGame = () => {
  buildQuiz();
};
const LottiePlayer_1 = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let { path, height, width, speed = 0.5 } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  return `${``}`;
});
var button_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "button.svelte-bh1tgc,button.svelte-bh1tgc:link,button.svelte-bh1tgc:visited{color:white;border:0.2rem solid rgb(24, 101, 242);background:rgb(24, 101, 242);text-decoration:none;font-weight:bold;padding:1rem 2rem;display:inline-block;border-radius:1rem;transition:all .2s;position:relative;font-size:1.6rem;white-space:nowrap;min-width:15rem;text-align:center;cursor:pointer}button.svelte-bh1tgc:active{transform:translateY(-1px)}button.svelte-bh1tgc::after{content:'';display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:all .4s}",
  map: null
};
const Button = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let { texto } = $$props;
  if ($$props.texto === void 0 && $$bindings.texto && texto !== void 0)
    $$bindings.texto(texto);
  $$result.css.add(css$6);
  return `<button class="${"svelte-bh1tgc"}">${(0, import_index_95cee8a2.e)(texto)}</button>`;
});
var result_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".score.svelte-1l0mhhh{font-size:3rem;display:flex;flex-direction:column;align-items:center}h3.svelte-1l0mhhh{text-align:center;font-size:2.8rem;line-height:5.6rem;margin:2rem}",
  map: null
};
const Result = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let $answers, $$unsubscribe_answers;
  let $$unsubscribe_quiz;
  $$unsubscribe_answers = (0, import_index_95cee8a2.g)(answers, (value) => $answers = value);
  $$unsubscribe_quiz = (0, import_index_95cee8a2.g)(quiz, (value) => value);
  const correct = $answers.filter((el) => el.correct !== true).length;
  const percentRight = correct / numberOfQuestions;
  let funText = "";
  if (percentRight < 0.2)
    funText = "My cat would know better";
  if (percentRight > 0.2 && percentRight < 0.4)
    funText = "We guess that you don't know much about dogs";
  if (percentRight > 0.4 && percentRight < 0.6)
    funText = "Breeds are hard, we know";
  if (percentRight > 0.6 && percentRight < 0.8)
    funText = "Aren't dogs great?";
  if (percentRight > 0.8 && percentRight < 1)
    funText = "You are really into dogs, aren't you?";
  if (percentRight === 1)
    funText = "You are a Cynophilist! Yeah, a dog lover";
  $$result.css.add(css$5);
  $$unsubscribe_answers();
  $$unsubscribe_quiz();
  return `<div class="${"score svelte-1l0mhhh"}"><h3 class="${"svelte-1l0mhhh"}">You got ${(0, import_index_95cee8a2.e)(correct)} out of ${(0, import_index_95cee8a2.e)(numberOfQuestions)} correct! 
    <br>
    ${(0, import_index_95cee8a2.e)(funText)}</h3>

  ${(0, import_index_95cee8a2.v)(LottiePlayer_1, "LottiePlayer").$$render($$result, {
    path: "./dog-walking.json",
    height: 300,
    width: 300
  }, {}, {})}

  ${(0, import_index_95cee8a2.v)(Button, "Button").$$render($$result, { texto: "Restart" }, {}, {})}</div>`;
});
var DogImg_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".dog-img.svelte-lvhlxp{-o-object-fit:cover;object-fit:cover;width:100%;height:100%;transition:all .2s;border-radius:15px}",
  map: null
};
const DogImg = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  const preload = async (src) => {
    const resp = await fetch(src);
    const blob = await resp.blob();
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject("Error: ", error);
    });
  };
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  $$result.css.add(css$4);
  return `${function(__value) {
    if ((0, import_index_95cee8a2.i)(__value)) {
      __value.then(null, import_index_95cee8a2.n);
      return `
  <div class="${"loading"}">${(0, import_index_95cee8a2.v)(LottiePlayer_1, "LottiePlayer").$$render($$result, {
        path: "./dog-loading.json",
        height: 300,
        width: 300
      }, {}, {})}</div>
`;
    }
    return function(base64) {
      return `
  <img${(0, import_index_95cee8a2.h)("src", base64, 0)} alt="${"Dog to choose"}" class="${"dog-img svelte-lvhlxp"}">
`;
    }(__value);
  }(preload(url))}`;
});
var option_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".option.svelte-1e8q69j{cursor:pointer;width:70rem;margin:0.5rem;padding-left:1.4rem;font-size:2.8rem;border:0.2rem solid darkgrey;border-radius:0.5rem;transition:all .2s ease-in-out}.selected.svelte-1e8q69j{border-color:maroon;border-width:0.3rem}.correct.svelte-1e8q69j{border-color:#3AA394;border-width:0.4rem}.wrong.svelte-1e8q69j{border-color:red;border-width:0.4rem}.disabled.svelte-1e8q69j{pointer-events:none}",
  map: null
};
const Option = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let answeredClassName;
  let answeredClass;
  let paintRight;
  let { breed, selected, correct, answered, disabled } = $$props;
  console.log(answered && correct);
  if ($$props.breed === void 0 && $$bindings.breed && breed !== void 0)
    $$bindings.breed(breed);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.correct === void 0 && $$bindings.correct && correct !== void 0)
    $$bindings.correct(correct);
  if ($$props.answered === void 0 && $$bindings.answered && answered !== void 0)
    $$bindings.answered(answered);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$3);
  answeredClassName = correct ? "correct" : "wrong";
  answeredClass = answered ? answeredClassName : null;
  paintRight = disabled && correct ? "correct" : null;
  return `<div class="${[
    "option " + (0, import_index_95cee8a2.e)(answeredClass) + " " + (0, import_index_95cee8a2.e)(paintRight) + " svelte-1e8q69j",
    (selected ? "selected" : "") + " " + (disabled ? "disabled" : "")
  ].join(" ").trim()}">${(0, import_index_95cee8a2.e)(breed)}</div>`;
});
var quizProgress_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "p.svelte-1hmo37r{font-size:large;font-weight:bold;margin-left:1rem}.progress-container.svelte-1hmo37r{left:0;width:100%;display:flex;flex-direction:row;justify-content:flex-start}.steps.svelte-1hmo37r{display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-left:1rem}.step.svelte-1hmo37r{width:1.2rem;height:1.2rem;border:2px solid #BABEC2;border-radius:50%;margin:0 0.5rem}.current.svelte-1hmo37r{transition:all .2s ease-in-out;transform:scale(1.3)}.answered.svelte-1hmo37r{background-color:rgb(24, 101, 242);border:transparent}",
  map: null
};
const QuizProgress = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let $quizIndex, $$unsubscribe_quizIndex;
  let $answerIndex, $$unsubscribe_answerIndex;
  $$unsubscribe_quizIndex = (0, import_index_95cee8a2.g)(quizIndex, (value) => $quizIndex = value);
  $$unsubscribe_answerIndex = (0, import_index_95cee8a2.g)(answerIndex, (value) => $answerIndex = value);
  $$result.css.add(css$2);
  $$unsubscribe_quizIndex();
  $$unsubscribe_answerIndex();
  return `<div class="${"progress-container svelte-1hmo37r"}"><p class="${"svelte-1hmo37r"}">${(0, import_index_95cee8a2.e)($quizIndex + 1)} of ${(0, import_index_95cee8a2.e)(numberOfQuestions)}</p>
  <div class="${"steps svelte-1hmo37r"}">${(0, import_index_95cee8a2.j)(Array(numberOfQuestions), (_, row) => `<div class="${[
    "step svelte-1hmo37r",
    (row === $quizIndex ? "current" : "") + " " + (row <= $answerIndex ? "answered" : "")
  ].join(" ").trim()}"></div>`)}</div></div>`;
});
var question_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-214ynz{font-size:3.6rem;text-align:center;color:darkgray;margin-top:1rem}.question.svelte-214ynz{height:100%;position:relative;display:grid;grid-template-columns:100%;grid-template-rows:10% 50% 33% 7%;justify-items:center;align-items:center;overflow:hidden}.center.svelte-214ynz{display:flex;width:100%;justify-content:space-around}.image.svelte-214ynz{margin:2rem;height:30rem;width:30rem}.bottom.svelte-214ynz{width:100%;display:flex;justify-content:space-between}.progress-bar.svelte-214ynz{text-align:left;width:100%;margin:auto}.disabled.svelte-214ynz{opacity:0.3;pointer-events:none}",
  map: null
};
const Question = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let hasAnswered;
  let hasSelected;
  let selectedOption;
  let buttonText;
  let $quizIndex, $$unsubscribe_quizIndex;
  let $$unsubscribe_answers;
  $$unsubscribe_quizIndex = (0, import_index_95cee8a2.g)(quizIndex, (value) => $quizIndex = value);
  $$unsubscribe_answers = (0, import_index_95cee8a2.g)(answers, (value) => value);
  let { index } = $$props;
  let { image } = $$props;
  let { options } = $$props;
  let { answered } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.answered === void 0 && $$bindings.answered && answered !== void 0)
    $$bindings.answered(answered);
  $$result.css.add(css$1);
  hasAnswered = answered;
  hasSelected = false;
  selectedOption = { breed: null, correct: null };
  buttonText = hasAnswered ? "Next question" : "Check";
  $$unsubscribe_quizIndex();
  $$unsubscribe_answers();
  return `

${$quizIndex === index ? `<div class="${"question svelte-214ynz"}"><div class="${"top"}"><h2 class="${"svelte-214ynz"}">What breed is this dog?</h2></div>
    <div class="${"center svelte-214ynz"}"><div class="${"image svelte-214ynz"}">${(0, import_index_95cee8a2.v)(DogImg, "DogImg").$$render($$result, { url: image }, {}, {})}</div></div>
    <div class="${"options"}">${(0, import_index_95cee8a2.j)(options, (option) => `${(0, import_index_95cee8a2.v)(Option, "Option").$$render($$result, Object.assign(option, {
    selected: selectedOption.breed === option.breed
  }, {
    answered: selectedOption.breed === option.breed && hasAnswered
  }, { disabled: hasAnswered }), {}, {})}`)}</div>
    <div class="${"bottom svelte-214ynz"}"><div class="${"progress-bar svelte-214ynz"}">${(0, import_index_95cee8a2.v)(QuizProgress, "QuizProgress").$$render($$result, {}, {}, {})}</div>
      <div class="${["button svelte-214ynz", !hasSelected ? "disabled" : ""].join(" ").trim()}">${(0, import_index_95cee8a2.v)(Button, "Button").$$render($$result, { texto: buttonText }, {}, {})}</div></div></div>` : ``}`;
});
const Quiz = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let $quiz, $$unsubscribe_quiz;
  $$unsubscribe_quiz = (0, import_index_95cee8a2.g)(quiz, (value) => $quiz = value);
  $$unsubscribe_quiz();
  return `${(0, import_index_95cee8a2.j)($quiz, (question) => `${(0, import_index_95cee8a2.v)(Question, "Question").$$render($$result, Object.assign(question), {}, {})}`)}`;
});
var play_svelte_svelte_type_style_lang = "";
const css = {
  code: "#main.svelte-pcqf0b{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);padding:0.5rem;background-color:#FAFAFF;border-radius:6px;box-shadow:0 0 .5rem #FAFAFF;text-align:left}",
  map: null
};
const Play = (0, import_index_95cee8a2.c)(($$result, $$props, $$bindings, slots) => {
  let $finished, $$unsubscribe_finished;
  $$unsubscribe_finished = (0, import_index_95cee8a2.g)(finished, (value) => $finished = value);
  startGame();
  $$result.css.add(css);
  $$unsubscribe_finished();
  return `<div id="${"main"}" class="${"svelte-pcqf0b"}">${$finished ? `${(0, import_index_95cee8a2.v)(Result, "Result").$$render($$result, {}, {}, {})}` : `${(0, import_index_95cee8a2.v)(Quiz, "Quiz").$$render($$result, {}, {}, {})}`}</div>`;
});
module.exports = __toCommonJS(stdin_exports);
