//? Daimond pattern 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let pattern1 = function (n, s) {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let space = n - i; space >= 1; space--) {
            currentline = currentline + ' ';
        }
        for (let j = 1; j <= i; j++) {
            currentline = currentline + s + ' ';
        }
        let currentline2 = "";
        for (let space = n * 2 - i * 2; space >= 1; space--) {
            currentline2 = currentline2 + ' ';
        }
        for (let j = 1; j <= i; j++) {
            currentline2 = currentline2 + s + ' ';
        }
        let currentline3 = currentline + currentline2;
        console.log(currentline3);
    }
}

let n = +prompt("Enter number of Lines(n): ");
let s = prompt("Enter the symbole(s) you want in your pattern: ");

pattern1(n, s);