//? In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
//? JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
//? JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
//? JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
//? JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

let marks_class_12 = [91, 95, 83, 78, "Absent", null]
console.log(marks_class_12)
console.log("Length of array(Number of elements in arrays.) : ", marks_class_12.length)
console.log(typeof marks_class_12)

//% Displaying elements of array using loop statement. 
for (let i = 0; i < marks_class_12.length; i++) {
    console.log("The element of array(marks_class_12) at index : ", i, " is ", marks_class_12[i]);
}

//% Arrays are mutable in js(We can change elements of an array). 
marks_class_12[2] = 78
console.log("After changing the element at index 2 : ", marks_class_12)