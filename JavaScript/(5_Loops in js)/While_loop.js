// ** While loop syntax :-
/*
initialization;
while(conditon){
    loop body
    update_expression
}
*/
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
//**  let n=prompt("Enter value of n :")
// n=parseInt(n)
// let i = prompt("Enter initialization value : ")
// while(i<n)
// {
//     console.log(i)
//     i++
// }

// ? Program to print even and odd no.
let n = prompt("Enter the value of n : ")
n = parseInt(n)
let i = prompt("Enter initialization point : ")
while (i < n) {
    //% To print even no.
    // if (i % 2 == 0) {
    //     console.log(i)
    // } 

    //% To print odd no.
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}