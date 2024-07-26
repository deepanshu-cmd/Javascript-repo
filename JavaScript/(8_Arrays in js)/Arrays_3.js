//? Arrays Method-2.
//! delete() 
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
delete num[0] //% It is an operator not function.
console.log(num)
console.log(num.length) //^ 'delete' is an operator which do not affect the length of array.

//! concat()
let arr_1 = [11, 12, 13, 14, 15]
let arr_2 = [16, 17, 18, 19, 20]
let arr_3 = arr_1.concat(arr_2) //% Adds two or more than two arrays and create a new array.We can put more than one arugment in concate(a,b,c...).It does not change the existing array
console.log("arr_1 = ", arr_1)
console.log("arr_2 = ", arr_2)
console.log("arr_3 = ", arr_3, " \n arr_3 length : ", arr_3.length)

//! sort() 
let arr_4 = [115, 68, 26, 334, 487, 52]
arr_4.sort() //% It arrange the array elements in ALPHABATICAL order.It modifies the original array.
console.log("arr_4 = ", arr_4)
//^ sort() takes an optional compare function.If this function is provide as the first argument,the sort function will consider these values(the values returned from the compare function.) as the basis of sorting.
let compare = (a, b) => {
    return a - b
}
arr_4.sort(compare) //% Now the given array  gets sorted in decending order.For ascending ----> b-a.
console.log("arr_4 = ", arr_4)

//! reverse() 
let arr_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr_5.reverse() //% Modifies the orginal array by reversing the sorting of array elements.
console.log("arr_5 = ", arr_5)

//! splice() and slice()
//% splice(start, deleteCount, item1, item2, /* …, */ itemN)
//^ start ---> (index value).
//^ deleteCount ----> (number of element to be deleted).
//^ itemN ----> (elemnt inserted on the place of deleted elements).
// ^ Modifies the original array.
let arr_6 = [26, 20, 31, 15, 11, 16, 34, 78, 89]
let deleted_elements = arr_6.splice(2, 3, 1, 2, 3, 4, 5)
console.log("arr_6 = ", arr_6)
console.log("delete_elements = ", deleted_elements)

//% slice(start, end)
//^ Start ---> index value from where the array gets printed(included).
//^ end ---> index value to which it should stop(excluded).
//^ This function creats a new array from the original array.It stores and prints the element from index(start) to index(end) where index(end) is excluded.
let arr_7 = [26, 20, 15, 11, 6, 31]
let new_arr_7 = arr_7.slice(1, 4)
console.log("arr_7", arr_7)
console.log("new_arr_7", new_arr_7)
