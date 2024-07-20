console.log(typeof undefined) // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo")// "string"

console.log(typeof Symbol("id"))// "symbol"

//% Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object. 
console.log(typeof Math)// "object"  (1)

//% The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here. 
console.log(typeof null) // "object"  (2)

//% The result of typeof alert is "function", because alert is a function.Functions belong to the object type. But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
console.log(typeof alert) // "function"  (3)