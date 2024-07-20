// var a = 26
let a = 26
{
    let a = 20
    //** var a = 20
    //** a=15 ---> updation is allowed.
    //** var a = 31 ---> re-declaration is allowed.
    console.log("Inside of block variable a value:")
    console.log(a)
}
//% Out of block statement.
console.log("Outside of block variable 'a' value : ", a)


// ! var is a global scope variable if we change value of var in any block than it will change gloabally whereas let & const are block or local scope variable if we change value of let in a block than that modified value get assingn to let 'a' locally not globally.

// ! var can be updated & re-declared within its scope
/* example:
var a=34
a="26.20" ---> updation.
var a="babita" ---> re-declaration and updation.
above we won't get any error. */

// ! let can be updated but not re-declared 
/* example:
let a=26
a=20 --->updation
above we won't get any error.

but let a=26
    let a=20 --->re-declaration (This will give error.).
*/