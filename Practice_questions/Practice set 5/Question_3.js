//? Add number into your array until you enter zero. 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let arr_1 = []
let size = prompt("Array size : ")
for (let i = 0; i < size; i++) {
    arr_1[i] = prompt("Enter your element no " + (i + 1) + " : ")
}
console.log(arr_1)
let a
while (a != 0) {
    a = prompt("Enter your number you want to add : ")
    a = Number.parseInt(a)
    arr_1.push(a)
}
    console.log(arr_1)
