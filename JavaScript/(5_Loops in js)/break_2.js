const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let count = 0;
// for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j}) : `, '');
//         parseInt(count++);
//!! what if we want to exit from here to Done (below)?
//     }
// }

// console.log("Number of coordinates : " + count);
// console.log('Done!');

//* The break <labelName> statement in the loop below breaks out to the label:
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        //^ if an empty string or canceled, then break out of both loops
        if (!input) break outer;

        //^ do something with the value...(try entering 0,null,NaN or just enter)
        parseInt(count++);
    }
}
console.log("Number of coordinates : " + count);
console.log('Done!');

//% break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

//@ Note:Labels do not allow us to jump into an arbitrary place in the code. 