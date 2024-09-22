// ? Program to print Reverse of a multi-digit number. 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter your number(n) = ")
n = parseInt(n)
let f = n
f = parseInt(f)
let r
let sum = 0
while (f != 0) {
    r = f % 10
    sum = sum * 10 + r
    f = parseInt(f / 10)
}
console.log("Reverse of given number  " + n + " = " + sum)



