// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
//* f alert() --> used to invoke a mini window on browsser. 
alert("Babita Thakur!");

//* f prompt() -->takes input from user. 
let a = +prompt("enter value of a : ", '');

//* f confrim()  --> shows a msg and wait for user to enter ok or cancel.Show true for ok & false for cancel.
let write = confirm("Do you want to display your number & its type on screen?");
if (write) {
    document.write(a, "<br>", typeof (a));

}

//% Limitation of these function: The exact location and styling of msg box(or module) is determined by browser & also block the maine execution thread of javascript. 