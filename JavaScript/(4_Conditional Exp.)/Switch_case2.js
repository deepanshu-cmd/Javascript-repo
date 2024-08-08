//? Type matters in Switch case.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let arg = prompt("Enter a value :"); //* Always have input in String type.
switch (arg) {
  case '0':
  case '1':
    console.log('One or zero');
    break;

  case '2':
    console.log('Two');
    break;

  case 3:
    console.log('Never executes!');
    break;
  default:
    console.log('An unknown value');
} 

//@ type of expression passed in switch condition must match to the type of case value. 