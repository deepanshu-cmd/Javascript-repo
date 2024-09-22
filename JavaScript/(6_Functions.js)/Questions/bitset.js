const prompt = require('prompt-sync')();

const binary = (number) => {
    let ans = 10;
    let i = 0;
    while (number != 0) {
        let bit = number & 1;
        ans =ans**i
    }
}

let number = +prompt("Enter your number: ");
number = parseInt(number);
binary(number);