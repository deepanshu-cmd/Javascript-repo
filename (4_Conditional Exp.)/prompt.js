const prompt = require('prompt-sync')(); //!! This statement is must to use prompt function in vscode ,but comment it out to run this code on browser.
let a = prompt("Enter your input: ")
console.log(a)
console.log("Befor typcasting : ", typeof a)
//% a = Number.parseInt(a) ----> This is type_casting in js now data_type of 'a' changes from string to number 
//% console.log("after type casting : ", typeof a)
// ! alert will work on browser.It is similar to console.log
// ! We use prompt function in js to take input from user at run time.
// ! Anything enter after using prompt is a string.
// ! See prompt and alert function working in browser also.