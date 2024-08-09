//? Consumers: .then & .catch 
// //* The consuming code can recive the final result of a promise through then and catch. 

// //* Promises executes parallely. 
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending!");
    setTimeout(function () {
        console.log("Babita Thakur!!");
    }, 5000);
    resolve(true);
})
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending!");
    setTimeout(function () {
        // console.log("Babita Thakur!!");
    }, 2000);
    reject(new Error("This is an custom error!!"));
})
// console.log(p1);
// console.log(p2); //% Run code in browser console.


//^ we pass two fucntions here ,we can handle resolved code and errors using 'then' only. 
p1.then((value) => {
    console.log(value);
})

//^ Error can be handelled by using catch. 
p2.catch((error) => {
    console.log("Some error got catched!! in p2");
})

let promise = new Promise(resolve => {
    setTimeout(function () {
        resolve("done");
    }, 3000)
})
promise.then(alert);