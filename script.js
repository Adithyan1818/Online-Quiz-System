const questions = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks and Text Language",
        "Home Tool Markup Language"
    ],
    answer: 0
},
{
    question: "Which language is used to style web pages?",
    options: [
        "HTML",
        "Java",
        "CSS",
        "Python"
    ],
    answer: 2
},
{
    question: "Which tag creates a hyperlink in HTML?",
    options: [
        "<a>",
        "<link>",
        "<h1>",
        "<img>"
    ],
    answer: 0
},
{
    question: "Which language is used to make a website interactive?",
    options: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL"
    ],
    answer: 2
},
{
    question: "Which CSS property changes text color?",
    options: [
        "background",
        "font-size",
        "color",
        "margin"
    ],
    answer: 2
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {

    document.getElementById("progress").textContent =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").textContent =
        questions[currentQuestion].question;

    document.getElementById("op1").textContent = questions[currentQuestion].options[0];
    document.getElementById("op2").textContent = questions[currentQuestion].options[1];
    document.getElementById("op3").textContent = questions[currentQuestion].options[2];
    document.getElementById("op4").textContent = questions[currentQuestion].options[3];

    let radios = document.getElementsByName("answer");

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    for (let i = 1; i <= 4; i++) {
        document.getElementById("label" + i).classList.remove("correct");
        document.getElementById("label" + i).classList.remove("wrong");
    }
}

loadQuestion();

function nextQuestion() {

    let radios = document.getElementsByName("answer");
    let selected = -1;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = i;
        }
    }

    if (selected == questions[currentQuestion].answer) {

        score++;

        document.getElementById("label" + (selected + 1)).classList.add("correct");

    } else {

        if (selected != -1) {
            document.getElementById("label" + (selected + 1)).classList.add("wrong");
        }

        document.getElementById("label" + (questions[currentQuestion].answer + 1)).classList.add("correct");
    }

    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            localStorage.setItem("score", score + "/" + questions.length);
            window.location.href = "result.html";

        }

    }, 1000);

}