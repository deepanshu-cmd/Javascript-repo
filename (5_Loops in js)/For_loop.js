// ** Loops are used to perform repeated tasks in JS.
// ** For loop :-
// ** for(initialization ; condition ; update_expression){/*loop body*/}

// ? Program to print sum of n natural no.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let sum = 0
let n = prompt("Enter value of n : ")
// for (var i = 1; i <= n; i++)
for (let i = 1; i <= n; i++) {
    sum += i
}
console.log("Sum of " + n + " natural numbers is equals to " + sum)
// ! For value of i either declare i globally or use var.