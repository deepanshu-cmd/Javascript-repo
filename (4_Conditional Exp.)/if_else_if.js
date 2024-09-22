const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let a = prompt("Enter your age : ");
if (a >= 0 && a <= 10) {
    console.log("You are a small kid.");
}
else if (a >= 11 && a <= 17) {
    console.log("You are a minor.");
}
else if (a >= 18 && a <= 40) {
    console.log("You are an adult.");
}
else if (a >= 41 && a <= 100) {
    console.log("You are an old person.");
}
else if (a > 101) {
    console.log("How you are alive  ?");
}
else {
    console.log("Invalid age.");
}