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

    answer: "514,000 MPH",
  },
  {
    question: "How many stars are estimated to be in the MILKY Way",

    options: ["100-400 Billion", "1-2 Trillion", "3 Sextillion", "Deez Nuts"],

    answer: "Deez Nuts",
  },
  {
    question: "What is 9 + 10",

    options: ["19", "Twenty Van", "21", "Deez Nuts"],

    answer: "19",
  },
  {
    question: "What is my favorite meal",

    options: ["Spaghetti", "Surf n Turf", "McDonalds", "Sushi"],

    answer: "Sushi",
  },
  {
    question: "Which State is known as Sunshine state",

    options: ["Texas", "California", "Arizona", "Florida"],

    answer: "Florida",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const startButton = document.getElementById("startButton");


questionElement.style.display = "none";
optionsElement.style.display = "none";
scoreElement.style.display = "none";

function startQuiz() {
  
  questionElement.style.display = "block";
  optionsElement.style.display = "block";
  scoreElement.style.display = "block";

  
  startButton.style.display = "none";

  displayQuestion();
}

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
document.getElementById("startButton").addEventListener("click", startTimer);

function startTimer() {
  let timerSeconds = 15;
  const timerElement = document.getElementById("timer");

  
  const timerInterval = setInterval(() => {
    timerElement.textContent = `Time Left: ${timerSeconds} seconds`;
    timerSeconds--;

    
    if (timerSeconds < 0) {
      clearInterval(timerInterval); 
      timerElement.textContent = "You Lose! Read a book!!";
    }
  }, 1000); 
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