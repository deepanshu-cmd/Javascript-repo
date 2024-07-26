//? Print factorial of number using reduce() 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let arr_1 = []
let size = prompt("Array size : ")
for (let i = 0; i < size; i++) {
    arr_1[i] = prompt("Enter element no. " + (i + 1) + " : ")
}
console.log("arr_1 = ", arr_1)
let factorial = arr_1.reduce((x1, x2) => {
    return x1 * x2
})
console.log("facorial of given number = ", factorial)