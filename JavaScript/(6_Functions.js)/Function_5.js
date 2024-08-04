// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

//? Function Expression:
let d = function () {
    console.log("Babita thakkur is so beautifull.");
};
console.log(d); //% [Function: d]

//@ NOTE:There’s no name after the function keyword. Omitting a name is allowed for Function Expressions. 

// let d = function deepanshu() {
//     console.log("Babita thakkur is so beautifull.");
// }
// console.log(d); //% [Function: deepanshu]


//* In JavaScript, a function is a value, so we can deal with it as a value. The code below shows its string
function bits() {
    console.log("Babita");
}

let func = bits; //% copy of function bits got assigned to variable 'func'.
console.log(func);//^ [Function: bits]
console.log(func()); //^  Babita ,undefined.

// console.log(bits); //^ see on browser console.
// console.log(bits()); //^ bits function not returning nothing(undefined).


