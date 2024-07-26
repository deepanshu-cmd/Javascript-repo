const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

//? Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. 
const pow = (x, y) => {
    let power = 1;
    for (let i = 1; i <= y; i++) {
        power = power * x;
    }
    return power;
}

let x = +prompt("Enter base : "), y = +prompt("Enter power : ");

(y < 1) ? console.log("Invalid power") : console.log(pow(x, y));