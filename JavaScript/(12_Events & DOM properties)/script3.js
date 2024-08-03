let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + '<h4>Her voice is soo good.</h4>';

//% creating an element. 
let div = document.createElement('div');
console.log(div);
div.innerHTML = '<h1 style="margin: 0px;">Deepanshu Yadav</h1>';
a.appendChild(div);
//^ document.body.appendChild(div);

//% Using append,prepend ,after & before.
// a.append(div); //* Put  'Deepanshu Yadav' at end of .container.(default)
// a.prepend(div) //* Put  'Deepanshu Yadav' at start of .container.
// a.before(div); //* Put  'Deepanshu Yadav' outside of  .container and inside of <body> at start.
// a.after(div); //* Put  'Deepanshu Yadav' outside of  .container and inside of <body> at end.

//% Using replaceWith() to replace .container with div
a.replaceWith(div); //* .container got replaced with div(<h1 style="margin: 0px;">Deepanshu Yadav</h1>) 