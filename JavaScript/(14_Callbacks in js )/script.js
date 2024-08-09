//? Asynchronous action are the action that we initiat now and they get finished later.For example setTimeout() & setIntervel().One approach to asynchronous programming is to make functions that need to wait for something to take an extra argument, a callback function. The asynchronous function starts a process, sets things up so that the callback function is called when the process finishes, and then returns.
const prompt = require('prompt-sync')();
//* ASynchronous programming example:
// console.log("Start");
// setTimeout(function () {
//     console.log("Babita Thakur");
//     console.log("End");
// }, 3000);

//? Synchronous actions are the actions that starts now and finish one-by-one.Synchronous programming is a programming model where operations take place sequentially. This model is antithetical to asynchronous programming. In such a model, operations occur one after the other. The program moves to the next step when the current step has completed execution and has returned an outcome.
//*  Synchronous programming example:
/*
let name = prompt("Enter your name: ");
let age = +prompt("Enter your age: ");
console.log(name + " is my name and my age is " + age);
*/

//% A callback function is a function which passed as an argument in another function,which is then called or invoked inside the outer function to complete an action.


let operation = (oprator, addition, subtraction, division, multiplication) => {
    let op = prompt(oprator);
    if (op == '+') {
        addition(a, b);
    }
    else if (op == '-') {
        subtraction(a, b)
    }
    else if (op == '/') {
        division(a, b)
    }
    else if (op == '*') {
        multiplication(a, b)
    }
    else {
        console.log("Wrong Input");
    }
}

function add(a, b) {
    return console.log(a + b);
}
function subtract(a, b) {
    return console.log(a - b);
}
function divide(a, b) {
    return console.log(a / b);
}
function multiply(a, b) {
    return console.log(a * b);
}

let a = +prompt("Enter a:");
let b = +prompt("Enter b: ");
let oprator = "Enter the type of operation on a & b: ";
operation(oprator, add, subtract, divide, multiply);
//^ add,subtract,divide & multiply are callback functions. They were passed as an argument in function 'operation'.The copy these function got stored in the 'operation' function's parameters.

//@ Drawbacks of Using callbacks:
//! Callback hell (pyramid of doom). --> due to nested callbacks
//! Reduces Readability & Maintinance of code.
//! Lack of sequential flow.
//! Inversion of Control.
