//! Constant values can't be modified and re-declared.
//! We use 'const' keyword to make constant  in JS.

const author = "Babita Thakur";
const COLOR_ORANGE = "#FF7F00"; //* Uppercase constants are only used as aliases(shortcut) for “hard-coded” values.
//% author="Deepanshu Yadav" ---> updation of a constant is not allowed
//% cont author ="Deepanshu Yadav" ---> Re-declaration of contant is not allowed
console.log(author);
console.log(COLOR_ORANGE);

//@ NOTE: unlinke var and let ,we can't declare and initialize constants seperatly ,DECLARATION & INITIALIZATION of constant must be done parallely.
/* example:
const author;
author = "Babita" (This will give error)*/

//@ Learn about when to use uppercase constant. 