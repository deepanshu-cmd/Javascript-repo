// ** The 'for...in' statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties. ** //

// ** Syntax :-
// ** for( variable in object){} ----> [Loops through key of an object.]

// const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
let Marks = {
    Babita: "57",
    Deepanshu: "45",
    Angad: "50",
    Akshit: "52"
}

console.log(Marks);

for (let a in Marks) {
    console.log("Marks of " + a + " are " + Marks[a])
}
