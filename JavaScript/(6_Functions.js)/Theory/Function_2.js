const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// !*! Another way to create and use the function.
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

const sum_of_even = () => {
    let n = prompt("enter n for even : ")
    let Sumeven = 0
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
            Sumeven += i
        }
    }
    return "Sum of even numbers = " + Sumeven
}
// !*! The above is called Arrow function.
console.log(sum_of_odd())
console.log(sum_of_even())