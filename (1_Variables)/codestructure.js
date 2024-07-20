console.log("babita")
console.log("thakur")
//% Here, JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.  

console.log("Hello")
[1, 2].forEach(console.log);
//% If we run this above code, only the first Hello shows (and there’s an error, you may need to open the console to see it if you are using alert()). There are no numbers any more.That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement ----> [console.log("Hello")[1, 2].forEach(console.log);]

//@ Learn about "use strict" in js. 

