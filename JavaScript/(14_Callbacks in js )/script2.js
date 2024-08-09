//? The solution of callbacks drawbacks is 'promises'.A promise in js is "promise of code execution".The code either executed or fails ,in both case the subscriber will be notified.
//* Syntax:-
/*
let promise= new Promise(function(resolve,reject){
execution....
})
*/
//^ resolve & reject are predeifned callbacks in js engine.

let promise = new Promise((resolve, reject) => {
    console.log("Code inside promise!");
    resolve(26);
})
console.log(promise);
//% The promise object returned by the new Promise has two propertie(run code in browser console.):-
//^ 1. state:Initially pending then either changes to "fullfiled"  when resolved is called or "rejected" when reject is called.
//^ 2. result:Initially undefined then changes to a value when its resolve or ethier changes to error when its rejected. 

console.log("Babita Thakur!");

setTimeout(function () {
    console.log("In 2s, " + '\n' + "Deepanshu Yadav.");
}, 2000);

console.log("Bitstha");