//! Constant values can't be change and re-declared.
//! We use 'const' keyword to make constant values in JS.

const author = "Babita Thakur"
//% author="Deepanshu Yadav" ---> updation of a constant is not allowed
//% cont author ="Deepanshu Yadav" ---> Re-declaration of contant is not allowed
console.log(author)

// ! NOTE: unlinke var and let ,we can't declare and initialize const seperatly ,DECLARATION & INITIALIZATION of constant must be done parallely.
/* example:
const author;
author = "Babita" (This will give error)*/
