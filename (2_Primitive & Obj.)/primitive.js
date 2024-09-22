//? DATA_TYPE ---> What type of a data a variable is going to hold and how much space should allocate to that variable in memory is known by its data_type.
// ** There are two  types of Data_Types in JS:
// ** 1.Primitive        2.Non-primitive(Object)
// ** In JS there are 7 Primitive data_types:-
// ** Null, Number, Boolean, BigInt, Symbol, String, Undefined.

let a = null
let b = 26 //% Number
let c = true //% boolean value(True or False)
let d = BigInt("2026")
let e = Symbol("BABIT THAKUR IS SO BEAUTIFULL.")
let f = "Deepanshu Yadav"
let g
// ^ or let g = undefined.

console.log(a, b, c, d, e, f, g)

// ^ Using typeof operator to identify data_type of a variable.
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)


