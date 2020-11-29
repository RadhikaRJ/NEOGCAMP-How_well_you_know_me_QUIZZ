var readlineSync = require('readline-sync')
const chalk = require('chalk')
console.log(chalk.bgBlue("Welcome to the HOW WELL DO YOU KNOW ME Quiz \n"))
var userName = readlineSync.question(chalk.bgBlue("Enter your name: \n"))
console.log(chalk.bgBlue.bold("\nHi",userName))
console.log(chalk.bgBlue.bold("\n Let's get started with the quiz\n"))
var questions=[{
  question:"Which is my favourite food item? ",
  answer:"Panipuri"
},{
  question:"Which is my favourite color? ",
  answer: "blue"
},
{
  question:"Which is my dream destination?",
  answer:"Finland"
},
{
  question:"Which is my favourite chocolate?",
  answer:"Kitkat"
},
{
  question:"Where city did I graduate from?",
  answer:"Pune"
}]
highest_score=4
score=0
function play(question,answer){
  
  var userAnswer = readlineSync.question(chalk.bgBlue(question))
  if(answer===userAnswer){
    console.log(chalk.bgGreen("Right! "))
    score=score+1;
     }
     else{
       console.log(chalk.bgRed("Wrong!"))
       score=score-1;
     }
}
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
  console.log("_______________________________________\n")
}
console.log("Your final score: ", score)
if(score>highest_score)
{
console.log(chalk.bgGreen("You are the highest scorer! Congratulations!!"))
}
else console.log(chalk.bgRed("Oops!..Your score is less than the highest scorer!\n The highest score is: ", highest_score))