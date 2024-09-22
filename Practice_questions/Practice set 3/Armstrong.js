// ? Program to tell whaether the given number is an armstrong number or not.
// ^Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let n = prompt("Enter your number : ")
n = parseInt(n)
let f = n
f = parseInt(f)
let r
let sum = 0
for (; f != 0; f = parseInt(f / 10)) {
    r = f % 10
    sum = sum + r * r * r
}
console.log(sum)

if (sum == n) {
    console.log("Armstrong number.")
}
else {
    console.log("Not an Armstrong number.")
}
