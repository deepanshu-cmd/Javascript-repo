const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// !*! Another way to creat and use the function.
const sum_of_odd = () => {
    let n = prompt("enter n for odd : ")
    let Sumodd = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i)
            Sumodd += i
        }
    }
    return "Sum of odd numbers = " + Sumodd
}
// !*! The above is called arrow function.

let n = prompt("Enter n for even : ")
let Sumeven = 0
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
        Sumeven += i
    }
}
console.log("Sum of even numbers = " + Sumeven)
console.log(sum_of_odd())