// ? W.A.P to print table of a number.

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter your number(n) : ")
let mul
for (i = 1; i <= 10; i++) {
    mul = n * i
    console.log(n + "*" + i + "=" + mul)
}