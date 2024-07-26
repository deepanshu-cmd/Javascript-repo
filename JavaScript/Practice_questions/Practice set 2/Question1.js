// ? Use logical operator to tell wheather the age of the person lies btw(10 & 20 not included) 10 and 20.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let age = prompt("Enter the age of the person : ")

if (age > 10 && age < 20) {
    console.log("The person age lies btw 10 and 20.")
}
else {
    console.log("The person age does'nt lie btw 10 and 20.")
}
console.log("Program Ended.")