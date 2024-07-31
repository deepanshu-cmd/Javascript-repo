//? matches,closest & contains.  

//* matches() 
let id1 = document.getElementById("id1");
console.log(id1);
let m = id1.matches(".deepanshu");
// let m = id1.matches(".box");
console.log(m); //% Returns false as there is not any class name deepanshu. Return true if given argument in matches() matched to class which is present in DOM.

//* closest() ---> To look for the nearest ancestor that matches the given css-selector.The element itslef is also checked.
console.log(sp1.closest("#sp1"));

//* contains() ---> Returns true if elementB is inside of elementA or elemB == elemA.
console.log(id1.contains(sp1));
console.log(id1.contains(id1));
console.log(sp1.contains(id1));

