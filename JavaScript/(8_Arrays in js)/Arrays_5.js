//? Array Method-3 (Higher order array methods)
//! Map() 
//% Creats a new array by performing some operation on each array element.
//% Takes three arguments ---> value or element, index, array. (just like for each loop)
//% Gives a new array after performing operation(or without perfroming any operation) with the elements of original array. 
//** We use map when we want a new array whearase we use for_each loop when we want to perform operation on an array element.It is a loop which calls function,once for each array element.
let arr_1 = [24, 12, 36, 48, 64, 72]
let new_arr_1 = arr_1.map((value) => {
    return value + 12
})
/* let new_arr_1 = arr_1.map((value,index,array) => {
     console.log(value,index,array)
     return value + index
//  return value + array
 }) */
console.log("arr_1 = ", arr_1)
console.log("new_arr_1 = ", new_arr_1)
console.log("\n")

//! Filter()
//% Filters an array with values or elements which passes a test.
//% Creats a new array. 
let arr_2 = [18, 21, 15, 33, 3, 9, 6,]
let new_arr_2 = arr_2.filter((a) => {
    return a < 10 //* Going to return elements from arr_2 which are less than 10 in new_arr_2.
})
console.log("arr_2 = ", arr_2)
console.log("new_arr_2 = ", new_arr_2)
console.log("\n")

//!****! Reduce() ---> IMPORTANT
//% Takes values  based on the passed argument in reduce function and return a single value. 
let arr_3 = [10, 20, 20, 30, 50, 60, 60]
let a = arr_3.reduce((b, d) => {
    return b + d //* Going to return a single value(sum of each array element)
})
console.log("arr_3 = ", arr_3, "\n", "Sum of elements of arr_3 = ", a)

//^ Another way of writing above code.
/* const reduce_func = (b, d) => {
    return b + d
}
let a = arr_3.reduce(reduce_func)  */