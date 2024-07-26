// **ARTHEMATIC OPERATORS.** //

const arthematic = {
    "+": "Additon Operator",
    "-": "Subtraction Operator",
    "*": "Multiplication Operator",
    "/": "Division Operator",
    "%": "Modulo Operator",
    "**": "Exponetial Operator(x to the power y)",
    "++": "Increament Operator",
    "--": "Decrement Operator"
}

console.log(arthematic)

let a = 24
let b = 5
console.log("a+b = ", a + b)
console.log("a-b = ", a - b)
console.log("a*b = ", a * b)
console.log("a/b = ", a / b)
console.log("a%b = ", a % b)
console.log("a**b = ", a ** b)
console.log("a++ = ", a++) //! Post-increment
console.log("a = ", a)
console.log("a-- = ", a--) //! Post-decrement
console.log("a = ", a)
console.log("++a = ", ++a) //! Pre-increment
console.log("a = ", a)
console.log("--a = ", --a) //! Pre-deccrement
console.log("a = ", a)

//* Unary operator.
let apples = "2";
let oranges = "3";
console.log(apples + oranges); //^ "23", the binary plus concatenates strings 
console.log(+apples + +oranges); //^ "5", Now because of unary + ,values got converted into numbers. 

//* Comma operator.
let B = (1 + 19, 25 + 1);
//^ Result of 1+19 get thrown away and 25+1 result get assigned to B. 
console.log(B); 
//^ Comma has a very low precedence.

//@ Go at js tutorial web page and go at operators section and read everything. 
