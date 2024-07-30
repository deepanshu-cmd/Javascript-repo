//? How to display Ascii code of a character or a string.

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

//*  Using  codePointAt() or charCodeAt() methode. 
let character2 = prompt("Enter your character : ");
for (i = 0; i < character2.length; i++) {
    //% let ASCII = character2.codePointAt(i);
    let ASCII = character2.charCodeAt(i);
    console.log("ASCII code of " + character2[i] + " is " + ASCII);
}

//% Both The charCodeAt() and The codePointAt() method takes in an index value and returns an integer representing UTF-16 (16-bit Unicode Transformation Format) code.If you don't pass the index value, the default index value will be 0. If the index value is out of range, it gives NaN.
