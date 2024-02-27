
const questions = [
  {
    question: "How old is the Milky Way",

    options: [
      "5 Years Old",
      "12 Trillion Years Old",
      "13 Billion Years Old",
      "15 Billion Years Old",
    ],

    answer: "13 Billion Years Old",
  },
  {
    question: "Which planet is known as the Red Planet?",

    options: ["Earth", "Mars", "Venus", "Jupiter"],

    answer: "Mars",
  },
  {
    question: "How fast does the Sun orbit the center of the Milky Way?",

    options: ["600,000 MPH", "700,000 MPH", "514,000 MPH", "674,000 MPH"],

    answer: "Blue Whale",
  },
  {
    question: "How many stars are estimated to be in the MILKY Way",

    options: ["100-400 Billion", "1-2 Trillion", "3 Sextillion", "Deez Nuts"],

    answer: "Deez Nuts",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", () => checkAnswer(option));

    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

displayQuestion();
