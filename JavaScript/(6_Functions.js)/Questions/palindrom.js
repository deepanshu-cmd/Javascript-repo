//? Write a program to tell that given number is a palindrom number or not.
const prompt = require('prompt-sync')();

const palindrom = (number) => {
    let r = 0, sum = 0, t = number;

    for (number; number != 0; number = parseInt(number / 10)) {
        r = number % 10;
        sum = sum * 10 + r;
    }
    console.log("reverse of given number is " + sum);
    if (t == sum)
        console.log("Given number is a palindrom number!");
    else
        console.error("Given number is not a palindrom number!")

}

let number = +prompt("Enter your number: ");
palindrom(number);