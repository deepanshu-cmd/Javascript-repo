// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
// alert("Deepanshu yadav");

//? setTimeout(func_name,delay, <arg1>, <arg2>,....) 
//* I want to alert "bits" after 2s of  alert("Deepanshu yadav");
// let a = setTimeout(function () {
//     alert("Bits");
// }, 5000)

//* removing setTimeout.
// let b = prompt("Do you want to show alert after 5s: ");
// if (b == "no") {
//     clearTimeout(a); //% Nothing will happen after 5s.
// }
// console.log(a); //% 1 ---> timer ID.

const sum = (a, b) => {
    console.log("Addition of two numbers:");
    // return alert(a + b);
    return console.log(a + b);
}

let s = setTimeout(sum, 3000, 20, 26);
console.log(s);

//? setInterval(func_name,<delay>, <arg1>, <arg2>,....) ---> has similar syntext as setTimeout,it execute code again & again in interval of time.
// let a = setInterval(function () {
//     alert("Bits");
// }, 3000)
//% alert("Bits") will gonna execute infinitly after every 3s.

const Sum = (a, b) => {
    console.log("Addition of two numbers:");
    // return alert(a + b);
    return console.log(a + b);
}

let S = setInterval(Sum, 3000, 20, 26);
console.log(s);