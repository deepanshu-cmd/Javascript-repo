const prompt = require('prompt-sync')();
let upperpatter = function (n, s, lowerpattern) {
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
    lowerpattern();
}

let lowerpattern = () => {
    for (let i = n - 1; i >= 1; i--) {
        let currentline = "";
        for (let space = n - i; space >= 1; space--) {
            currentline = currentline + ' ';
        }
        for (let j = i; j >= 1; j--) {
            currentline = currentline + s + ' ';
        }
        let currentline2 = "";
        for (let space = n * 2 - i * 2; space >= 1; space--) {
            currentline2 = currentline2 + ' ';
        }
        for (let j = i; j >= 1; j--) {
            currentline2 = currentline2 + s + ' ';
        }
        let currentline3 = currentline + currentline2;
        console.log(currentline3);
    }
}

let n = +prompt("Enter number of lines(n): ");
let s = prompt("Enter your symbole(s): ");
upperpatter(n, s, lowerpattern);