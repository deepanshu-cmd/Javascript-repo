const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

const charpyramid1 = (n) => {
    let space;
    for (let i = 0; i <= n; i++) {
        space = "";
        for (let k = n - i; k >= 1; k--) {
            space = space + ' ';
        }
        //% Printing characters
        for (let j = 0; j < i; j++) {
            space += String.fromCharCode(j + 65);
        }
        console.log(space);
    }

}

const charpyramid2 = (n) => {
    let space;
    for (let i = 0; i <= n; i++) {
        space = "";
        for (let k = n - i; k >= 1; k--) {
            space = space + ' ';
        }
        //% Printing characters
        for (let j = 0; j < i; j++) {
            space += String.fromCharCode(j + 65) + ' ';
        }
        console.log(space);
    }

}

const charpyramid3 = (n) => {
    let space;
    for (let i = 0; i <= n; i++) {
        space = "";
        for (let k = n - i; k >= 1; k--) {
            space = space + ' ';
        }
        //% Printing characters
        for (let j = 0; j < i; j++) {
            space += String.fromCharCode(j + 65) + ' ';
        }
        console.log(space);
    }

    for (let i = n; i >= 1; i--) {
        space = "";
        for (let k = n - i; k >= 1; k--) {
            space = space + ' ';
        }
        //% Printing characters
        for (let j = i, k = 0; j >= 1; j--, k++) {

            space += String.fromCharCode(k + 65) + ' ';
        }
        console.log(space);
    }

}

let n = +prompt("Enter number of lines(n): ");

charpyramid1(n);
charpyramid2(n);
charpyramid3(n);
