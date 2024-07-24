// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// ? Strings are sequennce of character or it is also called character array.Strings are used to store & manuplate text.
let s = "Babita" //* First methode to declare a string (using double quotes.)
console.log("s = ", s)
console.log("Length of string s = ", s.length) //* Name.lenth ---> Gives length of string.
console.log(s[0])
console.log(s[1])
console.log(s[2])
console.log(s[3])
console.log(s[4])
console.log(s[5])

let S = 'Bits' //* Second methode to declare a string (using single quotes quotes.)
console.log("S = ", S)
console.log("Length of string S = ", S.length)

//? Program to print elements of string in reverse manner. 
for (let i = (s.length - 1); i >= 0; i--) {
    console.log(s[i])
}

//@ Note: We can't use double and single qoutes in a single text(for ex:- "babita' or "Bitt'oo'" --> This will give error.)