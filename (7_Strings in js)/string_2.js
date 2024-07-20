// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// ? Template litral(also called string interpolation.) is also an another way to declare string.We use backtics(` `) in this method.
let s = `babita 'thakur'`
console.log("s = ", s)
//* In template litral we can use double and single qoutes together.

//*  In template litral we can print our string using their variable name. 
let S1 = `Babita Thakur`
let S2 = ` beautifull.`
let sentence = `${S1} is ${S2}`
console.log(sentence)
