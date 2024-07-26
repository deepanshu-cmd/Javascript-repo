// ? Write a program to print marks of students in an object using for_loop,oject=
// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
// }

// ^ using for_in_loop
for (let a in marks) {
    console.log("Marks of " + a + " is " + marks[a])
}