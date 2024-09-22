// alert("Babita")
// console.log("Bitoo")
// document.write("Advantages of using seprate script files : " + '\n' + "1. Seperation of concern." + '\n' + "2. Browser caching.")

//? Console functions.
console.log(console) //% Go in browser console.

/*
f=console
assert: ƒ assert()

clear: ƒ clear()

context: ƒ context()

count: ƒ count()

countReset: ƒ countReset()

createTask: ƒ createTask()

debug: ƒ debug()

dir: ƒ dir()

dirxml: ƒ dirxml()

error: ƒ error()

group: ƒ group()

groupCollapsed: ƒ groupCollapsed()

groupEnd: ƒ groupEnd()

info: ƒ info()

log: ƒ log()

memory: MemoryInfo { totalJSHeapSize: 23100000, usedJSHeapSize: 19300000, jsHeapSizeLimit: 3760000000 }

profile: ƒ profile()

profileEnd: ƒ profileEnd()

table: ƒ table()

time:ƒ time()

timeEnd: ƒ timeEnd()

timeLog: ƒ timeLog()

timeStamp: ƒ timeStamp()

trace: ƒ trace()

warn: ƒ warn()

Symbol(Symbol.toStringTag): "console"

[[Prototype]]: Object
*/


//! console.log()
console.log("Bits")
//% Return value of console.log is undefined. Now from here try every function in browser console.
const birth = {
    Babita: 26,
    Deepanshu: 20,
    Angad: 15,
    Akshit: 20
}
console.table(birth)
console.error("Error")
console.warn("Hey look!")
console.assert(2 > 20) //* Go in error in browser console.
console.time("Forloop")
for (let i = 0; i <= 5; i++) {
    console.log(i)
}
console.timeEnd("Forloop")

console.time("Whileloop")
let i=0
while(i<=5){
    console.log(i)
    i++
}
console.timeEnd("Whileloop")