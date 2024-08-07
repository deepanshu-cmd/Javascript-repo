const prompt = require('prompt-sync')();

let pattern1 = (n, s) => {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let space = n - i; space >= 1; space--) {
            currentline = currentline + ' ';
        }
        for (let j = 1; j <= i; j++) {
            currentline = currentline + s + ' ';
        }
        console.log(currentline);
    }
    for (let i = n - 1; i >= 1; i--) {
        let currentline = "";
        for (let space = n - i; space >= 1; space--) {
            currentline = currentline + ' ';
        }
        for (let j = i; j >= 1; j--) {
            currentline = currentline + s + ' ';
        }
        console.log(currentline);
    }
}



let n = +prompt("Enter number of lines(n): ");
let s = prompt("Enter your symbole(s): ");
pattern1(n, s);