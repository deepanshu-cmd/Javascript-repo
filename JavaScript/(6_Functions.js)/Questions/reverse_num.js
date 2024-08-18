"use strict";
const prompt = require('prompt-sync')();
//? W.A.P which reverse the given multi-digit number.
const reverse = (number) => {
    let sum = 0;
    let reminder = 0;
    for (number; number != 0; number = parseInt(number / 10)) {
        reminder = number % 10;
        sum = sum * 10 + reminder;
    }
    console.log("Reverse of given number : " + sum);
}

let number = +prompt("Enter your number: ");
reverse(number);
