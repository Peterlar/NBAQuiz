const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("btn-quiz"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};


let Questions = [
    {
      question: "Which year was the first nba game played?",
      answers: {
        optn1: "1944",
        optn2: "1945",
        optn3: "1946",
        optn4: "1947",
      },
      correctAns: 3,
    },

    {
      question:
          "Who have scored most points in nba history?",
        answers: {
          optn1: "Michael Jordan",
          optn2: "Lebron james",
          optn3: "Karem Abdul-Jabbar",
          optn4: "Kobe Bryant",
        },
        correctAns: 3,
    },
    {
        question: "Which year was the first nba game played?",
        answers: {
          optn1: "1944",
          optn2: "1945",
          optn3: "1946",
          optn4: "1947",
        },
        correctAns: 3,
      },
  
      {
        question:
            "Who have scored most points in nba history?",
          answers: {
            optn1: "Michael Jordan",
            optn2: "Lebron james",
            optn3: "Karem Abdul-Jabbar",
            optn4: "Kobe Bryant",
          },
          correctAns: 3,
      },



function startgame (){
questionCounter = 0;
score = 0;
availableQuestions = [...questions];
console.log(availableQuestions);
};

startgame();