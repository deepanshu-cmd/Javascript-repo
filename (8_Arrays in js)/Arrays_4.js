//? Using Loops with arrays.
// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
//! for loop{} 
let num = [2, 4, 6, 8, 10, 12]
for (let i = 0; i < num.length; i++) {
    console.log(num[i], "\t", num[i] * num[i])
}
console.log("\n")

//! for each loop{}
let num_2 = [1, 3, 5, 7, 9, 11, 13]
num_2.forEach((element) => {
    console.log(element, "\t", element * element)
})
console.log("num_2 = ", num_2)
console.log("\n")

//! Array.from{}
//% Use to create array from any other object html documents.
//^ See its working in any website also. 
let Name = "Babita"
let arr = Array.from(Name)
console.log(arr)
console.log("\n")

//! For of{} 
//% Shortcut to access array elements 
let num_3 = [3, 9, 27, 81]
for (let j of num_3) {
    console.log(j)
}
console.log("\n")

//! for in{} 
let num_4 = [5, 10, 15, 20, 25]
for (let j in num) {
    console.log(j, "\t", num[j])
    //@ NOTE: j is not an index here. It act as an key. 
}