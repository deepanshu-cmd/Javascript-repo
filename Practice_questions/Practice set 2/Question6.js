//? Write the code which asks for a login with prompt.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser. 

console.log("Who's there?");
let a = prompt("Enter a : ");
if (a == "Admin") {
    let password = prompt("What's the password : ");
    if (password == "TheMaster") {
        console.log("Welcome!");
    }
    else {
        console.log("Wrong password");
    }
}
else {
    console.log("Invalid Input");
}
