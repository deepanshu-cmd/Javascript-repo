// ? Use ternary operator with a simple example.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let age = prompt("Enter your age : ")
console.log("You can", (age >= 18 ? "drive." : "not drive."))