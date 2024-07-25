//* When a value is passed as a function parameter, it’s also called an argument.
//^ A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
//^ An argument is the value that is passed to the function when it is called (it’s a call time term).
//^ We declare functions listing their parameters, then call them passing arguments.

function showMessage(from, text) {

    from = '*' + from + '*'; 

    console.log(from + ': ' + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello
showMessage(from); // *Ann*: undefined

//% the value of "from" is the same, the function modified a local copy
console.log(from); //* Ann

function doNothing() { /* empty */ }

console.log(doNothing() === undefined); //% true

//@ Note:Never add a newline between return and the value.
/*return
 (some + long + expression + or + whatever * f(a) + f(b))*/  
//@ :JavaScript assumes a semicolon after return. That’ll work the same as:.
/*return;
 (some + long + expression + or + whatever * f(a) + f(b))*/ 
 

//*Functions that are used very often sometimes have ultrashort names.For example, the jQuery framework defines a function with $. The Lodash library has its core function named _.  