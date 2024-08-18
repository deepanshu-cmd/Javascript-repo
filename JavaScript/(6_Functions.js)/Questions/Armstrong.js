//? W.A.P which tells that given number is an armstrong number.
const prompt = require('prompt-sync')();

const palindrom = (number) => {
    let r = 0, sum = 0, t = number;

    for (number; number != 0; number = parseInt(number / 10)) {
        r = number % 10;
        sum = sum + r * r * r;
    }
    console.log("reverse of given number is " + sum);
    if (t == sum)
        console.log("Given number is an Armstrong number!");
    else
        console.error("Given number is not an Armstrong number!")

}

let number = +prompt("Enter your number: ");
palindrom(number); 