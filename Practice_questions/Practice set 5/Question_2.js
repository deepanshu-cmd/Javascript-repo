//? Creat an array of number and take input from user to add number to this array 
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let num_arr = []
let size = prompt("Array Size : ")

for (let i = 0; i < size; i++) {
    num_arr[i] = prompt("Enter Element no. " + (i + 1) + " : ")
}
console.log(num_arr);

let a = prompt("Enter a number your want to push in the array : ")
num_arr.push(a) //% Push() modifies the original array by pushing an element in it.
console.log(num_arr)