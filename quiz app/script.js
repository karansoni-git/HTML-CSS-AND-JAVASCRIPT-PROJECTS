let questions = [
  {
    question:
      'The tallest statue in world "The Statue of Unity" is located near which dam?',
    answers: [
      {
        text: "bhakra nangal dam",
        correct: false,
      },
      {
        text: "sardar sarovar dam",
        correct: true,
      },
      {
        text: "tehri dam",
        correct: false,
      },
      {
        text: "hirakud dam",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which article of the indian constitution gives the president the power of pardoning?",
    answers: [
      {
        text: "article 72",
        correct: true,
      },
      {
        text: "article 73",
        correct: false,
      },
      {
        text: "article 74",
        correct: false,
      },
      {
        text: "article 75",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the largest producer of copper in india?",
    answers: [
      {
        text: "jharkhand",
        correct: false,
      },
      {
        text: "bihar",
        correct: false,
      },
      {
        text: "madhya pradesh",
        correct: true,
      },
      {
        text: "rajasthan",
        correct: false,
      },
    ],
  },
  {
    question:
      "Which one of the following gases is considered as atmospheric pollutant?",
    answers: [
      {
        text: "oxygen",
        correct: false,
      },
      {
        text: "ozone",
        correct: false,
      },
      {
        text: "sulphur dioxide",
        correct: true,
      },
      {
        text: "nitrogen",
        correct: false,
      },
    ],
  },
];

let questionElement = document.querySelector("#main_question");
let answerList = document.querySelector(".option_list");
let nextBtn = document.querySelector("#btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const li = document.createElement("li");
    li.innerText = answer.text;
    li.classList.add("option");
    answerList.appendChild(li);
    if (answer.correct) {
      li.dataset.correct = answer.correct;
    }
    li.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  let selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerList.children).forEach((li) => {
    if (li.dataset.correct === "true") {
      li.classList.add("correct");
    }
    li.pointerEvents = "none";
    li.style.opacity = "0.5";
    li.style.cursor = "not-allowed";
  });
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
