//? Filter no. from an array divisible by 10.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let num_arr = []
let size = prompt("Array size : ")
for (let i = 0; i < size; i++) {
    num_arr[i] = prompt("Enter element no : " + (i + 1) + " : ")
}
console.log("num_arr : ", num_arr)

let num_arr_2 = num_arr.filter((a) => {
    return a % 10 == 0
})
console.log("num_arr_2 : ", num_arr_2)