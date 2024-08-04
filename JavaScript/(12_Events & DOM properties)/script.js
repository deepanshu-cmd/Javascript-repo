console.log(document.body.firstElementChild.data);
console.log(document.body.firstElementChild.nodeValue);

//? consol.log() shows the element DOM tree. console.dir() shows element as an object with its properties.
console.log(document.getElementsByTagName('span')[0]);
console.dir(document.getElementsByTagName('span')[0]);

//? tagName --> only exist for element nodes wherase nodeName --> defined for any node(text,comment element etc.).
let n = document.body.firstChild.nodeName;
let n2 = document.body.firstElementChild.nodeName;
console.log(n); //% #text  
console.log(n2); //% SPAN

//* innerHTMl.---> It allows to get HTML inside an element as a string,valid for element nodes only.For other node type we can use Node value or data.
let i = first.innerHTML;
console.log(i); //% <b> You are beautifull </b>Babita Thakur.

// first.innerHTML = "<i>Bittoo eyes are so gorgeous</i>" //% On browser display text b/w <i> got displayed.(see in inspect)

//* outerHTML contains full HTML(innerHTML + the element itself).
let o = first.outerHTML;
console.log(o); //% <span id="first"><i>Bittoo eyes are so gorgeous</i></span>
// first.outerHTML = "<div>Bittoo</div>"  //% whole span tag got replace by <div> by outerHTML property.(see in inspect)

//* text content  --> Provides access to text inside the element, only text minus all tags.
console.log(document.body.textContent);

//* hidden
// let h = box.hidden = false; //% Works with id.
// console.log(h);