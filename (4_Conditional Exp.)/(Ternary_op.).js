const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// ** TERNARY OPERATOR:
// ** Syntax --->  condition ? exp1 : exp 2 (True ---> exp1 or false ---> exp2.)
let age = prompt("Enter your age. : ")
console.log("You are", (age < 18 ? "a minor" : "an adult"))