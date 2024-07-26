// ? W.A.P to tell the given no. is either divisible by 2 or 3.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let number = prompt("Enter your number : ")
number = parseInt(number)
if (number % 2 == 0 || number % 3 == 0) {
    console.log("Given no.", number, "is either divisible by 2 or 3.")

    if (number % 2 == 0 && number % 3 == 0) {
        console.log("Given no.", number, "is divisible by 2 & 3.")
    }

    else if (number % 2 == 0) {
        console.log("Given no.", number, "is divisible by 2")
    }

    else if (number % 3 == 0) {
        console.log("Given no.", number, "is divisible by  3.")
    }
}

else {
    console.log("Given no.", number, "is neither divisible by 2 nor by 3.")
}