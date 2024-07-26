// ** doWhile loop syntax :-
/*
initialization;
do{
    loop body  //! Loop body will execute atleast once.
    update_expression 
}while(conditon)
*/

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let n = prompt("Enter value of n :")
n = parseInt(n)
let i = prompt("Enter initialization value : ")
do {
    console.log(i)
    i++
} while (i < n)

