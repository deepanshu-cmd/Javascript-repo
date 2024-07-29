//? $0 was added by the element inspector. $0 means it's the most recent selected DOM node index. with $1 being 2nd most recent and so on.
//? DOM collections are read only,they are live and they itrable using for of loops.
//? Sibling are nodes that are children of same parent. For ex: <head> & <body> are sibling as their parent (<html>) is same.
//* parent is availabel in parentNode.
console.log(document.documentElement.parentNode); //% #document 
console.log(document.documentElement.parentElement); //%Null

console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode); //% Returns document. 
console.log(a.parentElement); //% Returns element only ,anything other than element will return NULL.
console.log(a.firstChild.nextSibling); //% Returns the comment instead of <p> tag.
//@ NOTE: we need to compress html code in order to get desired child,siblings ...etc 