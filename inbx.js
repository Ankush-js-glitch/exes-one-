var readlineSync = require('readline-sync');
var userName  = readlineSync.question('write your name?');
console.log(userName);
//ex- welcome the user
//ex-Do it all together
var welcomeMessage="welcome"+ userName
console.log(welcomeMessage)
//input
var myHome= readlineSync.question('where are you from?');
var score = 0
console.log("i am from:"+myHome)
// //process
if (myHome === 'Bhagalpur')
{
  //Output
  console.log("you are right");
  score = score+1;
  console.log("your score is:" + myHome + score) // This is called concatination
}
else{
  //output

console.log("you are wrong");
score = score-1;
console.log("your score is:" + myHome + score)
}