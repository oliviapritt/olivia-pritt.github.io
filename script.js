const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const keyButton = document.getElementById("key-btn");
const bottom = document.getElementById("bottom")
const counter = document.getElementById("correct-answers")
const questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
let currentQuestionIndex;
let count;
var questionAnswered = false;
startButton.addEventListener("click", start);
nextButton.addEventListener("click", () =>{
    currentQuestionIndex += 1;
    newQuestion();
})
keyButton.addEventListener("click", () => {
    window.location = "key.html";
})

const questions= [
    {
        question: "Most likely to write a poem about you",
        answers: [
            { text: "Pisces", correct: true },
            { text: "Aries", correct: false },
            { text: "Sagittarius", correct: false },
            { text: "Libra", correct: false }
        ]
    },
    {
        question: "Most likely to succeed",
        answers: [
            { text: "Libra", correct: false },
            { text: "Cancer", correct: false },
            { text: "Aquarius", correct: false },
            { text: "Capricorn", correct: true }
        ]
    },
    {
        question: "Most likely to be a switch",
        answers: [
            { text: "Taurus", correct: false },
            { text: "Gemini", correct: true },
            { text: "Aquarius", correct: false },
            { text: "Leo", correct: false }
        ]
    },
    {
        question: "Most likely to study computer science",
        answers: [
            { text: "Virgo", correct: true },
            { text: "Cancer", correct: false },
            { text: "Sagittarius", correct: false },
            { text: "Capricorn", correct: false }
        ]
    },
    {
        question: "Most flirty",
        answers: [
            { text: "Scorpio", correct: true },
            { text: "Leo", correct: false },
            { text: "Virgo", correct: false },
            { text: "Aquarius", correct: false }
        ]
    },
    {
        question: "Most likely to cuddle you to sleep",
        answers: [
            { text: "Pisces", correct: false },
            { text: "Libra", correct: false },
            { text: "Cancer", correct: true },
            { text: "Aries", correct: false }
        ]
    },
    {
        question: "Most likely to have a 5-year plan",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Sagittarius", correct: false },
            { text: "Taurus", correct: false },
            { text: "Capricorn", correct: true }
        ]
    },
    {
        question: "Most likely to actually change the world",
        answers: [
            { text: "Aquarius", correct: true },
            { text: "Leo", correct: false },
            { text: "Taurus", correct: false },
            { text: "Pisces", correct: false }
        ]
    },
    {
        question: "Most likely to go out 4 days a week",
        answers: [
            { text: "Gemini", correct: true },
            { text: "Sagittarius", correct: false },
            { text: "Taurus", correct: false },
            { text: "Capricorn", correct: false }
        ]
    },
    {
        question: "Most likely to have a quickie in the baseball dugout",
        answers: [
            { text: "Libra", correct: false },
            { text: "Aries", correct: true },
            { text: "Sagittarius", correct: false },
            { text: "Gemini", correct: false }
        ]
    },
    {
        question: "Most likely to give you a pre-coital essential oils massage",
        answers: [
            { text: "Leo", correct: false },
            { text: "Aquarius", correct: false },
            { text: "Taurus", correct: true },
            { text: "Capricorn", correct: false }
        ]
    },
    {
        question: "Most likely to be a good cook",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Libra", correct: false },
            { text: "Taurus", correct: false },
            { text: "Virgo", correct: true }
        ]
    },
    {
        question: "Most likely to have a kinky toys collection",
        answers: [
            { text: "Leo", correct: false },
            { text: "Aries", correct: false },
            { text: "Gemini", correct: false },
            { text: "Aquarius", correct: true }
        ]
    },
    {
        question: "Most likely to have a one-night stand",
        answers: [
            { text: "Leo", correct: false },
            { text: "Sagittarius", correct: true },
            { text: "Pisces", correct: false },
            { text: "Taurus", correct: false }
        ]
    },
    {
        question: "Most likely to learn lessons the hard way",
        answers: [
            { text: "Libra", correct: false },
            { text: "Virgo", correct: false },
            { text: "Aries", correct: true },
            { text: "Leo", correct: false }
        ]
    },
    {
        question: "Most likely to want who they can't have",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Leo", correct: false },
            { text: "Taurus", correct: false },
            { text: "Capricorn", correct: true }
        ]
    },
    {
        question: "Most gullible",
        answers: [
            { text: "Pisces", correct: false },
            { text: "Sagittarius", correct: false },
            { text: "Taurus", correct: false },
            { text: "Cancer", correct: true }
        ]
    },
    {
        question: "Most dependable",
        answers: [
            { text: "Virgo", correct: false },
            { text: "Pisces", correct: false },
            { text: "Taurus", correct: true },
            { text: "Libra", correct: false }
        ]
    },
    {
        question: "Most likely to be quiet",
        answers: [
            { text: "Cancer", correct: true },
            { text: "Leo", correct: false },
            { text: "Pisces", correct: false },
            { text: "Capricorn", correct: false }
        ]
    },
    {
        question: "Most popular",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Leo", correct: true },
            { text: "Taurus", correct: false },
            { text: "Aries", correct: false }
        ]
    },
    {
        question: "Most likely to see life as a game of chess",
        answers: [
            { text: "Libra", correct: false },
            { text: "Sagittarius", correct: false },
            { text: "Taurus", correct: false },
            { text: "Scorpio", correct: true }
        ]
    },
    {
        question: "Most likely to be best-dressed",
        answers: [
            { text: "Libra", correct: false },
            { text: "Taurus", correct: true },
            { text: "Aquarius", correct: false },
            { text: "Leo", correct: false }
        ]
    },
    {
        question: "Most likely for everyone to like them",
        answers: [
            { text: "Aries", correct: false },
            { text: "Leo", correct: false },
            { text: "Pisces", correct: false },
            { text: "Libra", correct: true }
        ]
    },
    {
        question: "Most artistic",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Virgo", correct: false },
            { text: "Scorpio", correct: false },
            { text: "Pisces", correct: true }
        ]
    },
    {
        question: "Most unique...or weird",
        answers: [
            { text: "Leo", correct: false },
            { text: "Taurus", correct: false },
            { text: "Virgo", correct: false },
            { text: "Aquarius", correct: true }
        ]
    },
    {
        question: "Most likely to cast a spell on you mid-sex",
        answers: [
            { text: "Cancer", correct: false },
            { text: "Libra", correct: false },
            { text: "Scorpio", correct: true },
            { text: "Pisces", correct: false }
        ]
    },
    {
        question: "Most involved",
        answers: [
            { text: "Gemini", correct: false },
            { text: "Virgo", correct: true },
            { text: "Taurus", correct: false },
            { text: "Capricorn", correct: false }
        ]
    },
    {
        question: "Most likely to plan a 5-star dinner as a first date",
        answers: [
            { text: "Pisces", correct: false },
            { text: "Aries", correct: false },
            { text: "Taurus", correct: false },
            { text: "Leo", correct: true }
        ]
    },
    {
        question: "Most likely to be athletic",
        answers: [
            { text: "Aquarius", correct: false },
            { text: "Leo", correct: false },
            { text: "Aries", correct: true },
            { text: "Sagittarius", correct: false }
        ]
    }
]

function start() {
    count = 1;
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    bottom.classList.remove("hide");
    currentQuestionIndex = 0;
    newQuestion();
}

function increment() {
    counter.innerText = count++;
}

function newQuestion() {
    removeOldAnswers();
    showQuestion(questions[currentQuestionIndex]);
    questionAnswered = false;
}

function showQuestion(currentQuestion) {
    question.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function removeOldAnswers() {
    nextButton.classList.add("hide");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(element) {
    if (!questionAnswered) {
        const selectedButton = element.target
        const correct = selectedButton.dataset.correct;
        if (correct) {
            increment();
        }
        setAnswerState(document.body, correct, undefined);
        Array.from(answerButtons.children).forEach(button => {
            setAnswerState(button, button.dataset.correct, selectedButton)
        })
        if (questions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove("hide");
        } else {
            startButton.innerText = "Restart";
            startButton.classList.remove("hide");
            keyButton.classList.remove("hide");
        }
        questionAnswered = true;
    }
}

function setAnswerState(element, correct, wrong) {
    clearAnswerState(element);
    if (correct) {
        element.classList.add("correct");
    } else if (element == wrong) {
        element.classList.add("wrong");
    } else {
        element.classList.add("neutral");
    }
}

function clearAnswerState(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
    element.classList.remove("neutral")
}