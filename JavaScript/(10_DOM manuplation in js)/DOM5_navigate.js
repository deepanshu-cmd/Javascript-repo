//? Certain DOM elements provide additional properties specific to their type for convenience.

let t = document.body.firstElementChild.firstElementChild;
console.log(t);

//* To get all rows of table as an html collection:
console.log(t.rows);

//* To access caption of table:
console.log(t.caption);

//* To access head of table:
console.log(t.tHead);
console.log(t.tHead.firstElementChild);

//* To access footer of table:
console.log(t.tFoot);

//* To access Bodies and rows of table:
console.log(t.tBodies);



