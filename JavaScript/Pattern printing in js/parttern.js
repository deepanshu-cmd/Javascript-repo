const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

const halfpyramid2 = (n, s) => {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let j = 1; j <= n - i; j++) {
            currentline = currentline + ' ';
        }
        for (let k = 1; k <= i; k++) {
            currentline = currentline + s;
        }
        console.log(currentline);
    }
}

const halfpyramid = (n, s) => {
    for (let i = 1; i <= n; i++) {
        let currentline = " ";
        for (let k = 1; k <= i; k++) {
            currentline = currentline + s;
        }
        console.log(currentline);
    }
}

let n = +prompt("Enter number of lines : ");
console.log("Number of lines : ", n);
let s = prompt("Enter the symbol you want in your pyramid : ");
console.warn("1 for halfpyramid, 2 for halfpyramid2 & 0 for both.");
let type = +prompt("Enter which pyramid you want to print : ");
if (type == 1) {
    halfpyramid(n, s);
}
else if (type == 2) {
    halfpyramid2(n, s);
}
else if (type == 0) {
    halfpyramid(n, s);
    halfpyramid2(n, s);
}