// ? Program to tell wheather thegiven number is a palindrom number or not.
// ^ A palindromic number (also known as a numeral palindrome or a numeric palindrome) is a number (such as 16461) that remains the same when its digits are reversed. In other words, it has reflectional symmetry across a vertical axis.
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
if (sum == n) {
    console.log("palindrom no.")
}
else {
    console.log("Not palindrom")
}