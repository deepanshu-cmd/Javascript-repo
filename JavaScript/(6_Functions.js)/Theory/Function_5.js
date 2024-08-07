// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

//? Function Expression: Initializing a variable with function makes an function expression.Name of the variable act as a function name(that's y ommiting function name is allowed in function expression).
let d = function () {
    console.log("Babita thakkur is so beautifull.");
};
console.log("d = ",d); //% [Function: d]
console.log("d = ", d());
//@ NOTE:There’s no name after the function keyword. Omitting a name is allowed for Function Expressions. 

// let d = function deepanshu() {
//     console.log("Babita thakkur is so beautifull.");
// }
// console.log(d); //% [Function: deepanshu]


//* In JavaScript, a function is a value, so we can deal with it as a value. The code below shows its string.
function bits() {
    console.log("Babita");
    return "Bits";
}

let func = bits; //% copy of function bits got assigned to variable 'func'.
console.log(func);//^ [Function: bits]
console.log(func()); //^  Babita ,Bits.If function return nothing then its return type is undefined.

// console.log(bits); //^ see on browser console.
// console.log(bits()); //^ bits function  returning nothing(undefined).

//@ A Function Expression is created when the execution reaches it and is usable only from that moment Whereas A Function Declaration can be called earlier than it is defined.


