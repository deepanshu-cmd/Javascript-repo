//? Navigating only elements like child,sibling ... etc.
let b = document.body;
console.log("First child of body = ", b.firstChild);
console.log("First child of body = ", b.firstElementChild);

//% document.previousElementSibling ---> previous sibling which is an element.
//% document.nextElementSibling ---> next sibling which is an element.
//% document.firstElementChild ---> first child which is an element.
//% document.lastElementChild ---> last child which is an element.

//* Manuplating css through js. 
const changebgcolor = () => {
    document.body.firstElementChild.style.background = "red";
}
//^ changebgcolor();

//* Use $0.ChildNode in browser console for all child node list.
//* Use $0.Children in browser console for all child elements list. 