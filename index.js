var readlineSync = require('readline-sync');
var score = 0;
console.log('Know Game');

var questionSet = [{
  question: "Which is my favourite book? ",
  answer: "The wealth of Nations"
}, {
  question: "Which is my native place? ",
  answer: "sangli"
},
{
  question: "Where do I work? ",
  answer: "TCS"
},
{
  question: "Where do I studied? ",
  answer: "DKTE"
}];

var highScores = [
  {
    name: "Rushikesh",
    score: 4,
  },

  {
    name: "Ashitosh",
    score: 2,
  }
];

function game(question, answer) {
  var ans = readlineSync.question(question);

  if (ans.toLowerCase() == answer.toLowerCase()) {
    score += 1;
    console.log("right!");
  }
  else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("--------------------------");
}

var playerName = readlineSync.question('What is your name? ');
console.log('Hi ' + playerName + ' Welcome to Do you know Rushikesh?');

for (i = 0; i < questionSet.length; i++) {
  game(questionSet[i].question, questionSet[i].answer);
}

console.log("Your Final score ", score);
console.log("High Scores")

for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name, " : ", highScores[i].score);
}