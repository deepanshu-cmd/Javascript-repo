// ? W.A.P to print n natural prim no. and their sum.
// ! Hint - A prime number has only two factors(divisble by only two no.)

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter value of n : ")
let sum = 0
for (let i = 2; i <= n; i++) {
    let count = 0
    count = parseInt(count)
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++
        }
    }
    if (count == 2) {
        console.log(i)
        sum += i
    }
}

console.log("sum = " + sum)