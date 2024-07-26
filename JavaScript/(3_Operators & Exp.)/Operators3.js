// ** COMPARISON/RELATIONAL OPERATORS. ** //

const comparison_operators = {
    "==": "Equal to operator",
    "!=": "Not equal to operator",
    "===": "Equal to and type operator",
    "!==": "Not equal to or not type operator",
    ">": "Greater than operator",
    "<": "Less than operator",
    ">=": "Grater than equal to operator",
    "<=": "Less than equal to operator",
}

console.log(comparison_operators)

let a = 26
let b = 20
console.log("a==b", a == b)
console.log("a!=b", a != b)
console.log("a>b", a > b)
console.log("a<b", a < b)
console.log("a>=b", a >= b)
console.log("a=<b", a <= b)

let x = 26 //! data_type ---> Number
let y = "26" //! data_type ---> String
console.log("x==y", x == y) //! True
console.log("x===y", x === y) //! False(coz data_type is not same.)
console.log("x!=y", x != y) //! False
console.log("x!==y", x !== y) //! True(coz data_type is not same.)