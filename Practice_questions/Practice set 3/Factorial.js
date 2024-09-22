// ? W.A.P to print factorial of a number. 

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter your number : ")
let i = 1
let f
f = n
while (i < n) {
    console.log(f + "*" + i + "=" + f * i)
    f *= i
    i++
}
console.log("Factorial of " + n + " is = " + f)