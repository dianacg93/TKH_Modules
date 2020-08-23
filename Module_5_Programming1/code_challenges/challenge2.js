// https://codepen.io/dianagaona/pen/XWdjEgJ

let grade = parseInt(prompt("On a scale from 0 - 100, what grade do you expect to get?"))

switch (true){
  case (grade > 95):
    console.log("you are getting an A+");
    break;
  case (grade > 88 && grade <= 95):
    console.log("You are getting an A");
    break;
  case (grade > 84 && grade <= 88):
    console.log("You are getting a B+");
    break;
  case (grade > 76 && grade <= 84):
    console.log("You are getting a C+");
    break;
  case (grade > 70 && grade <= 76):
    console.log("You are getting a C");
    break;
  case (grade > 67 && grade <= 70):
    console.log("You are getting a D+");
    break;
  case (grade > 64 && grade <= 67):
    console.log("You are getting a D");
    break;
  case (grade < 64):
    console.log("You are getting an F");
    break;
  default:
    console.log("Please provide a valid number");
    break;
}
