const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

//^ -------- let age = prompt("Enter your age :")
/*switch (age) {
    case '20':
        console.log("Your age is 20.")
        break;
    case '32':
        console.log("Your age is 32.")
        break;
    case '36':
        console.log("Your age is 36.")
        break;
    default:
        console.log("Your age is not special.")
}*/

//? Program of a simple calculator.
let a = prompt("Enter your first number(a) : ");
let b = prompt("Enter your second number(b) : ");
a = parseFloat(a);
b = parseFloat(b);
let operator = prompt("Enter the operator : ");
switch (operator) {
    case '+':
        console.log("a+b = ", parseFloat(a + b));
        break;
    case '-':
        console.log("a-b = ", parseFloat(a - b));
        break;
    case '*':
        console.log("a*b = ", parseFloat(a * b));
        break;
    case '/':
        console.log("a/b = ", parseFloat(a / b));
        break;
    default:
        console.log("Wrong value.");
}