const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

const print_even = () => {

    console.log("Even numbers :-");
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            continue;
        }
        console.log(i); //% //% Exclude all odd  numbers and back to looping
    }
}
const print_odd = () => {
    console.log('\n' + "Odd numbers :- ");
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            continue; //% Exclude all even  numbers and back to looping
        }
        console.log(i);
    }
}
let n = +prompt("Enter value of n : ");
console.log("n = ", n);
print_even();
print_odd();
