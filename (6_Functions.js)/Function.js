//? Function are used to perform some specific tasks in JS.Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
// ** Function declarations
/* A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:
The name of the function.
A list of parameters to the function, enclosed in parentheses and separated by commas.
The JavaScript statements that define the function, enclosed in curly braces,{ } */

// ? Program to print sum of even and odd numbers.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

function sum_of_odd() {
    let n = prompt("enter n for odd numbers : ")
    let Sumodd = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i)
            Sumodd += i
        }
    }
    return "Sum of odd numbers = " + Sumodd
}

let n = prompt("Enter n for even : ")
let Sumeven = 0
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
        Sumeven += i
    }
}
console.log("Sum of even numbers = " + Sumeven)
console.log(sum_of_odd())