//* DOM navigation properties are helpful when they are close to eachother.If they are not close to each other then we have some more methods to search the DOM.

//? Changing card title from js using getElementsByClassName.
let c = document.getElementsByClassName("card-title")[0];
// c.style.color = "red";

//? Changing the card background color from js using getElementById.
let b = document.getElementById("firstcard-title");
// b.style.background = "yellow";

//? querySelectorAll.
let q = document.querySelectorAll(".card-title"); //* Writting '.' & '#' for class and id selector is must.
console.log(q); //% NodeList(3) [h5#firstcard-title.card-title, h5#firstcard-title.card-title, h5#firstcard-title.card-title]
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
console.log(t); //% HTMLCollection(11) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.nav-link.disabled, a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

console.log(T); //% HTMLCollection(11) [a.navbar-brand, a.nav-link.active, a.nav-link, a.nav-link.dropdown-toggle, a.dropdown-item, a.dropdown-item, a.dropdown-item, a.nav-link.disabled, a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

console.log(T2); //% HTMLCollection(3) [a.btn.btn-primary.this, a.btn.btn-primary, a.btn.btn-primary]

//? getElementsByName.
let N = document.getElementsByName("search");
console.log(N); //% NodeList [input.form-control.me-2]