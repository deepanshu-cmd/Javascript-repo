const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

const halfpyramid2 = (n) => {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let k = n - i; k >= 1; k--) {
            currentline = currentline + ' ';
        }
        for (let j = 1; j <= i; j++) {
            currentline = currentline + j;
        }
        console.log(currentline);
    }
}
const halfpyramid = (n) => {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let j = 1; j <= i; j++) {
            currentline = currentline + i;
            //^ currentline = currentline + j;
        }
        console.log(currentline);
    }
}

let n = +prompt("Enter number of lines : ");
halfpyramid(n);
halfpyramid2(n);