const prompt = require('prompt-sync')();
//? Arrow Function.
//* Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:
//^1. Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
//^2. With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something. 

let Question = (question, yes, no) => {
    let q = prompt(question);
    if (q == "yes")
        yes();
    else
        no();
}

let Positive = () => console.log("You agreed!");

let Negative = () => console.log("You denied!");

let question = "Do You agree?";
Question(question, Positive, Negative);
