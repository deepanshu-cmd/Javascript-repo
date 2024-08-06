//? Program to print alphabet of English language.

// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

function alphabet(n) {
    for (let i = 1; i <= n; i++) {
        let currentline = "";
        for (let j = 26, k = 0; j >= 1; j--, k++) {
            currentline = currentline + String.fromCharCode(k + 65) + " ";
        }
        console.log(currentline);
    }
}

let n = +1;
alphabet(n);