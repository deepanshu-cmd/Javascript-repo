// ** The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables. **//
// ** Syntax :-
// ** for (variable of iterable){} ----> Loop through the values of an object.
// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let student = {
    student_26: "Babita Thakur",
    student_20: "Deepanshu Yadav",
    student_15: "Angad"
}

for (let a of "Babita Thakur") {
    console.log(a)
}