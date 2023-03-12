const questions = [
  "The peregrine falcon is the fastest bird in the world.",
  "The peregrine falcon is the slowest bird in the world.",
  "The Andes is the longest mountain range in the world.",
  "The Andes is the shortest mountain range in the world.",
  "The polar bear is the largest carnivorous mammal in the world.",
  "The polar bear is the smallest carnivorous mammal in the world.",
  "The bee hummingbird is the smallest bird in the world.",
  "The pigeon is the smallest bird in the world.",
  "The Challenger Deep is the deepest part of the ocean.",
  "The Challenger Deep is the shallowest part of the ocean.",
  "The box jellyfish is the most venomous animal in the world.",
  "The box jellyfish is the least venomous animal in the world.",
  "The wandering albatross has the largest wingspan of any bird.",
  "The wandering albatross has the shortest wingspan of any bird.",
  "A grove of aspen trees in Utah is the oldest known living organism on Earth.",
  "A grove of aspen trees in Los Angeles is the oldest known living organism on Earth.",
  "The sailfish is the fastest fish in the world.",
  "The goldfish is the fastest fish in the world.",
  "The Rafflesia arnoldii is the largest flower in the world.",
  "The Rafflesia arnoldii is the smallest flower in the world.",
];
let randomAnswers = [];
const correctAnswers = [
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
  "True",
  "False",
];

let userAnswers = new Array(5).fill(null);

function createQuiz() {
  const quizContainer = document.getElementById("quiz-container");
  let quizHTML = "";
  quizHTML += '<form id="quiz-form">';

  const randomizedFacts = [];
  while (randomizedFacts.length < 5) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomFact = questions[randomIndex];
    randomAnswers.push(correctAnswers[randomIndex]);
    console.log(randomAnswers);
    if (!randomizedFacts.includes(randomFact)) {
      randomizedFacts.push(randomFact);
    }
  }
  for (let i = 0; i < randomizedFacts.length; i++) {
    const fact = randomizedFacts[i];

    const questionNumber = `<h2>Question ${i + 1}</h2>`;

    const questionText = `<h4>${fact}</h4>`;

    const answerChoices = createAnswerChoices(i);

    quizHTML += questionNumber + questionText + answerChoices.outerHTML;
  }
  const submitButton =
    '<button id="submit-btn" type="submit">Submit Quiz</button>';

  quizHTML += submitButton + "</form>";

  quizContainer.innerHTML = quizHTML;

  document
    .getElementById("quiz-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      gradeQuiz();
    });
}
function createAnswerChoices(questionIndex) {
  let answerChoicesHTML = "<div>";

  const options = [
    {
      label: "True",
      value: "True",
    },
    {
      label: "False",
      value: "False",
    },
  ];

  for (let i = 0; i < options.length; i++) {
    const option = options[i];

    const radioButton = `<input type="radio" name="question-${questionIndex}" value="${option.value}">`;

    const answerText = `<span class="answer-text">${option.label}</span>`;

    answerChoicesHTML += `<label class="answer-choice">${radioButton}${answerText}</label>`;
  }

  answerChoicesHTML += "</div>";

  const answerChoicesContainer = {
    outerHTML: answerChoicesHTML,
  };

  return answerChoicesContainer;
}
function gradeQuiz() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const questionName = `question-${i}`;
    const userAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );
    if (userAnswer) {
      userAnswers[i] = userAnswer.value;
      console.log("user" + userAnswer.value);
      console.log(correctAnswers[i]);
      if (userAnswer.value === randomAnswers[i]) {
        score++;
      }
    }
  }

  displayResults(score);
}

function displayResults(score) {
  const quizContainer = document.getElementById("quiz-container");
  if (score >= 3) {
    quizContainer.innerHTML = `<h2>Congrats! You got ${score} out of 5 correct!</h2>`;
  } else {
    quizContainer.innerHTML = `<h2>Oh no! You got ${score} out of 5 correct!</h2>`;
  }
}

createQuiz();
function restartQuiz() {
  location.reload();
}

var restartButton = document.getElementById("restart-button");

restartButton.addEventListener("click", restartQuiz);

var backButton = document.getElementById("back-button");

backButton.addEventListener("click", function () {
  window.location.href = "main.html";
});