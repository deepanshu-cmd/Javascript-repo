//* DOM navigation properties are helpful when they are close to eachother.If they are not close to each other then we have some more methods to search the DOM.

//? Changing card title from js using getElementsByClassName.
let c = document.getElementsByClassName("card-title")[0];
// c.style.color = "red";

//? Changing the card background color from js using getElementById.
let b = document.getElementById("firstcard-title");
// b.style.background = "yellow";

//? querySelectorAll.
let q = document.querySelectorAll(".card-title"); //% Writting '.' & '#' for class and id selector is must.
console.log(q);
q[0].style.background = "yellow";
q[0].style.color = "green";

q[1].style.background = "blue";
q[1].style.color = "yellow";

q[2].style.background = "green";
q[2].style.color = "skyblue";

//? Want to select a single class ,using querySelector.
let Q = document.querySelector(".this");
Q.style.color = "yellow";

//? getElementsByTagName.
let t = document.getElementsByTagName("a");
let T = document.body.getElementsByTagName("a");
let T2 = document.querySelector(".container").getElementsByTagName("a");
console.log(t);
console.log(T);
console.log(T2);

//? getElementsByName.
let N = document.getElementsByName("search");
console.log(N); 