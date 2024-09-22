// ? Arrays Methods.
let num = [26, 20, 11, 15, 6]
console.log("Original array(num) : ", num)

//! toString()
let b = num.toString() //% Going to change type of array from object to string
console.log("After modifying og. array by using .tostring() : ", b, "type of b : ", typeof b)
//^ After using .tostring() func. array elements got printed without [].

//! join() 
let c = num.join("--->") //% Going to Join all the array elements by using a seperator(it can also be an white space.).We passes arguments here.
console.log(c) //^ After using .join() array elements got seperated by "--->".

//! pop() 
let d = num.pop() //% Removes the last element from an array.d returns the poped value.
console.log("modified array(num) : ", num, "poped value : ", d) //^ Updates the orignal array and returns the poped value.

//! push() 
let e = num.push(31, 45) //% Adds a new element at the end of the array.We passes arguments here.
console.log("modified array(num) : ", num, " new array length : ", e) //^ Updates the orignal array and returns the new array length.

//! shift() 
let f = num.shift() //% Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log("modified array(num) : ", num, " Removed element : ", f, " modified array length : ", num.length)

//! unshift() 
let g = num.unshift(22) //% Elements to insert at the start of the array.Inserts new elements at the start of an array, and returns the new length of the array.
console.log("modified array(num) : ", num, " modified array length : ", g)
