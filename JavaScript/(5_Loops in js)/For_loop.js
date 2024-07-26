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

//* for (let i = 0; i < 3; i++) connsol.log(i);
//^ run begin
let i = 0
//^ if condition → run body and run step
if (i < 3) { console.log(i); i++ }
//^ if condition → run body and run step
if (i < 3) { console.log(i); i++ }
//^ if condition → run body and run step
if (i < 3) { console.log(i); i++ }
//^ ...finish, because now i == 3
