// ** LOGICAL OPERATORS. ** //

const logical_operators = {
    "&&": "Logican AND operator = All condition must be TRUE for TRUE output if any condition is FALSE than output will be FALSE.Also if 1st condition is FALSE than program won't execute further.",

    "||": "Logican OR operator = All conditon must be FALSE for FALSE output if any conditon is TRUE than output will be TRUE.Also if 1st condition is TRUE than program won't execute further.",

    "!": "Logical NOT operator = INVERT the result (TRUE--->FALSE and FALSE--->TRUE)."
}

console.log(logical_operators)

let a = 26
let b = 20
console.log("a>b && a!=b : ", a > b && a != b)
console.log("a<b&&a!=b : ", a < b && a != b) //! Both conditions must be true for true output
console.log("a>b || a!=b : ", a > b || a != b)
console.log("a<b&&a!=b : ", a < b || a != b) //! Atleat one conditon is true for true output
console.log("a<b&&a!=b : ", a < b || a == b)
//^ Precedence of AND (&&) is higher than OR (||)

//^ A double NOT !! is sometimes used for converting a value to boolean type,That is, the first NOT(!) converts the value to boolean and returns the inverse, and the second NOT(!) inverses it again. In the end, we have a plain value-to-boolean conversion.
console.log(!!"non-empty string"); //% true
console.log(!!null); //% false 

//@ Go at js tutorial web page and read logical operators docs. 