const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter number of lines : ");
console.log("Number of lines : ", n);
for (let i = 1; i <= n; i++) {
    let currentline = " ";
    for (let j = 1; j <= n - i; j++) {
        currentline = currentline + ' ';
    }
    for (let k = 1; k <= i; k++) {
        currentline = currentline + '*';
    }
    console.log(currentline);
}

for (let i = 1; i <= n; i++) {
    let currentline = " ";
    for (let k = 1; k <= i; k++) {
        currentline = currentline + '*';
    }
    console.log(currentline);
}