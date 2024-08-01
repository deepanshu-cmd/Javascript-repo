//? DOM tree refres to html page where all the nodes are object.Three main type of nodes:text node,element node & comment node.A text node is always a leaf of a tree.In html page <html> tag is at the root and <head> & <body> tags are its childern.
//? Auto correction: If there is an error in html page then in browser inspect element auto correction happens.
//% document.head --->return tag.
//% document.body --->return tag.
//% document.title --->return string.
//% typeof (document.title); --->String.
//% typeof (document.documentElement);---->Object.

//* See in browser console 
console.log(document.head);
console.log(typeof (document.head));
console.log(document.body);
console.log(typeof (document.body));
console.log(document.title);
console.log(typeof (document.title));
console.log(document.documentElement);
console.log(typeof (document.documentElement));

//@ NOTE: document.body can sometimes returns null if js is written before the <body>

//? Children of an element : Direct or deeply nested elements of an element are called its children. <body> & <head> are called child nodes as they are direct children of <html> whereas all nested elements,children,.... are called descendant.
//* Accessing elements:-
//^ document.element.firstchild  ---> First child.
//^ document.element.lastchild  ---> Last child.
//^ document.element.childNodes  ---> All child nodes
console.log(document.body.firstChild); //% If we put <div> besides <body> then in console instead of #text we will get div.
console.log(document.body.lastChild); //% last child is a script tag.
console.log(document.body.childNodes); //% Returns every child

//* elem.childNode[0] == elem.firstchild
//* elem.childNode[elem.childNode.length-1] == elem.lastchild
//^ There is also a methode "elem.haschildNode" to check wheather there are any child.Returns true if there are any child or else false.

//@ NOTE: childNode looks like an array but its a collection. We can use array.from(collection) to convert it in a array. 
let arr = Array.from(document.body.childNodes);
console.log(arr);

