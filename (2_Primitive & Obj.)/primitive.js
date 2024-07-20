//? DATA_TYPE ---> What type of a data a variable is going to hold and how much space should allocate to that variable in memory is known by its data_type.
// ** There are two  types of Data_Types in JS:
// ** 1.Primitive        2.Non-primitive(Object)
// ** In JS there are 7 Primitive data_types:-
// ** Null, Number, Boolean, BigInt, Symbol, String, Undefined.

let a = null; //% In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.It’s just a special value which represents “nothing”, “empty” or “value unknown”.

let b = 26; //% Number ---> Range[(2^53-1), -(2^53-1)]
let B = 1 / 0;
let B_2 = "not a number" / 2;

let c = true; //% boolean value(True or False)

let d = BigInt("2026");

let e = Symbol("BABITA THAKUR IS SO BEAUTIFULL.");
//% The Symbol type is used to create unique identifiers for objects. 

let f = "Deepanshu Yadav";

let g
// ^ or let g = undefined.The meaning of undefined is “value is not assigned”.If we just declare a variable and not assign any vlaue to it then we will get undefined. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.

console.log(a, b, c, d, e, f, g);
console.log(B, B_2)

// ^ Using typeof operator to identify data_type of a variable.
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

