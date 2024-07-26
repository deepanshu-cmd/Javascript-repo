const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let sum = 0;

while (true) {

    let value = +prompt("Enter a number : ", ''); //% +prompt() is just a + before a prompt(), it's like writing +"3" or +"10". It just tries to cast the outcome to a number.

    if (!value) break; //% Loop will break if the input is 0,null,undefined or empty.

    sum += value;

}
console.log('Sum: ' + sum);