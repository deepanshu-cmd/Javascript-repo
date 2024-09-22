//? Create an array of sqaure of the elements of anohter array. 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let arr_1 = []
let size = prompt("Array size : ")
for (let i = 0; i < size; i++) {
    arr_1[i] = prompt("Enter element no. " + (i + 1) + " : ")
}

let new_arr_1 = arr_1.map((value) => {
    return value * value
})
console.log("arr_1 = ", arr_1)
console.log("new_arr_1 = ", new_arr_1)