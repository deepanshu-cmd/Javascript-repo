//* alert("Babita Thakur");
console.log(console);

//* f log() -->return value undefined.
console.log("Babita Thakur❤️");

//* f alert() -->return value undefined.
console.error("Hey this is an error!");

//* f assert() -->checks conditon if true then return value undefined and if false -->shows error msg in red alert on borwser + return value undefined.
console.assert(20 > 26);

//* f clear() --> clears the console and return value undefined.
//^ console.clear(); run this code in browser console. as in vs it clear the console.

//* f table() --> shows object key value pairs in tabular form & return value undefined. 
let marks = {
    "Maths": 56,
    "Science": 78,
    "English": 34,
    "Hindi": 90,
    "SST": 70
}
console.table(marks);

//* f warn() --> Gives warning msg in yellow alert in browser console & return value undefined. 
console.warn("Don't smoke here!");

//* f info() --> similar to log just shows info section of inspect & return value undefined.
console.info("Bittoo");
// console.info(console); //% Shows log in info section of inspect.

//* f time() & timeEnd() --> tell the amount taken by block of code & return value undefined. 
console.time("time taken by for loop ")
for (let i = 1; i <= 5; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
        star = star + "*";
    }
    console.log(star);
}
console.timeEnd("time taken by for loop ");