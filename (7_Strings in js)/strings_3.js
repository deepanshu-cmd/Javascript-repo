// ? String manuplation Functions.
let Name = "Babita";
console.log(Name);
console.log(Name.length); //* Going to print length of string.

console.log(Name.toUpperCase()); //* Going to capitalize every character of string.

console.log(Name.toLowerCase()); //* Going to lower every character of string.

console.log(Name.slice(2, 4)); //* Going to print character from index a(2) to b(4)[Excluding b]

console.log(Name.slice(2)); //* Going to print character from index a(2)

console.log(Name.replace("Babita", "Bittoo")); //* Going to replace whole string or characters of string with a string or characters of stirng.

let Name2 = " Thakur";
console.log(Name.concat(Name2, " is beatifull")); //* Going to add another stirng or character with previous string.

let Name3 = "   Bittoo   ";
console.log(Name3);
console.log(Name3.trim()); //* Going to remove white space.

//@ Note: Strings are immutable(we can't change them,above in all methods a new string was created and the previous string remains the same.)

let Name4 = "Deepanshu";
console.log(Name4);
Name4[1] = "E";
console.log(Name4);

// ! Search more string method on Google.