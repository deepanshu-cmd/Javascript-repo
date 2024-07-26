// ? Use loop to print a string.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let s = prompt("Enter your string : ")
for (let i = 0; i < s.length; i++) {
    console.log(s[i])
}