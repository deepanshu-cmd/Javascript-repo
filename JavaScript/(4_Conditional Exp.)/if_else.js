const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let a = prompt("Enter your age:")

if (a >= 18) {
    console.log("You are an adult.")
    // alert("You are an adult.") //! Work in browser
}
else {
    console.log("You are a minor.")
    // alert("You are a minor.") //! Work in browser
}
