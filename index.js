var readlineSync = require('readline-sync');

// Ex 01 Write a program to console your name on the output

// console.log("Smitha");

// Ex 02 read the name of your user

// var username = readlineSync.question("What is your name? ");
// console.log(username);

// ex03: welcome your user

// console.log("Welocme "+username);


// ex04: do it all together

// var username = readlineSync.question("What is your name? ");
// console.log("Welocme "+username);


// ex05: print right/wrong if greater than 25

// var age = readlineSync.question("Is my age greater than 25? ");

// if(age === "yes" ) console.log("right")
// else console.log("wrong")


// ex06: increment score if the right answer

// var age = readlineSync.question("Is my hometown Bokaro? ");
// var count = 0;
// if(age === "yes" ) {
//   console.log("right")
//   count += 1;
// } else {
//   console.log("wrong")
// }
// console.log("your count is : ", count)


// ex07: function to add two numbers

// var n1 = readlineSync.question("Enter first number ");
// var n2 = readlineSync.question("Enter second number ");

// function add(n1,n2){
//   var sum = Number(n1)+Number(n2)
//   return sum;
// }
// console.log(add(n1,n2));


// ex08: function to check the answer

// var count = 0;

// function checkAnswer(q1, ans1){
//   var userAns1 = readlineSync.question(q1);
//   if(userAns1.toLowerCase() === ans1.toLowerCase()){
//     count += 1;
//     console.log("You are Correct!")
//   } else {
//     console.log("You are wrong!")
//   }
// }
// var ques1 = "What is my first name? ";
// var answer1 = "Kumari"
// checkAnswer(ques1, answer1)



// ex09: print your name 5 times

// for(let i=0; i<5; i++){
//   console.log(i+1+". Smita")
// }


// homework: star pattern
// *
// **
// ***
// ****
// *****

// var n = readlineSync.question("enter the number ");
// var str = ""
// for(let i=0; i<n; i++){
//   for(let j=0; j<=i ; j++){
//     str += "*"
//   }
//   str += "\n"
// }
// console.log(str)


// BONUS (optional): Can you print this inverted? Like 5 stars > 4 stars > 3...?

// *****
// ****
// ***
// **
// *

// var n = readlineSync.question("enter the number ")
// var str = ""
// for(let i=0; i<n; i++){
//   for(let j=n-i; j>0; j--){
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);




// inverted star pattern
// *****
//  ****
//   ***
//    **
//     *

// var n = readlineSync.question("enter the number ")
// var str = ""
// for(let i=1; i<n; i++){
//   if(i==1){
//     for(let k=0; k<n; k++){
//       str += "*"
//     }
//     str += "\n"
//   }
  
//   for(let j=0; j<i; j++){
//     str += " ";
    
//   }
//   for(let l=n-i; l>0; l--){
//       str += "*"
//     }
  
//   str += "\n";
// }
// console.log(str);


// ex10: list grocery items to buy

// var li = ["Milk", "Bread", "Butter", "Honey", "Eggs"];

// console.log(li[0])
// console.log(li[2])
// console.log(li.at(-1))


// ex11: print every item on the list

// var li = ["Milk", "Bread", "Butter", "Honey", "Eggs"];

// for(let i in li){
//   console.log(li[i])
// }

// //using map()

// const list = li.map((i)=>console.log(i))



// ex12: club info about a superhero together

// var obj1 = {
//   name : "Superman",
//   color : "Red"
// }

// var obj2 = {
//   name : "Batman",
//   color : "Black"
// }

// console.log(obj1.name)
// console.log(obj1.color)
// console.log(obj2["name"])



// ex13: put a list of questions together

// var questionOne = {
//   question: "What is my First name? ",
//   answer: "Kumari"
// }

// var questionTwo = {
//   question: "Which is my favorite song? ",
//   answer: "Pasoori"
// }

// var questionThree = {
//   question: "Which city do I live in? ",
//   answer: "Bangalore"
// }

// var questionFour = {
//   question: "How many siblings do I have? ",
//   answer: "3"
// }

// var questionFive = {
//   question: "How old am I? ",
//   answer: "26"
// }



// ex14: club everything to make the game
let count = 0;


var questionArray = [
  {
  question: "What is my First name? ",
  answer: "Kumari"
},
{
  question: "Which is my favorite song? ",
  answer: "Pasoori"
},
{
  question: "Which city do I live in? ",
  answer: "Bangalore"
},
{
  question: "How many siblings do I have? ",
  answer: "3"
},
{
  question: "How old am I? ",
  answer: "26"
}]


questionArray.map((que)=>{
  game(que.question, que.answer)
})

function game(ques, ans){
  var userAns = readlineSync.question(ques);
  if(userAns.toLowerCase() === ans.toLowerCase()){
    count += 1;
    console.log("You are right!")
    console.log("Your current score is: ",count);
    console.log("----------------------")
  } else {
    console.log("You are wrong!")
    console.log("Your current score is: ",count);
    console.log("----------------------")
  }
}



// game(questionOne.question, questionOne.answer )
// game(questionTwo.question, questionTwo.answer )
// game(questionThree.question, questionThree.answer )
// game(questionFour.question, questionFour.answer )
// game(questionFive.question, questionFive.answer )





// ex15: print the final score to the user

const scores = [{
  name: "Smita",
  score: 5
},
{
  name: "Shwe",
  score: 5
} ,
{
  name: "Madhu",
  score: 4
} ]
console.log("\n")
console.log("Your total score is: " , count);
console.log("\n")
console.log("Top 3 High scores are: ")
scores.map((s)=>{
  console.log(s.name + ": "+ s.score)
})
console.log("\n")
console.log("If you have beaten the top scores, do send the screenshot to smita267t@gmail.com")