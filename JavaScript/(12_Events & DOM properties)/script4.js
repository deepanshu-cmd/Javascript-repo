let first = document.querySelector("#first");
console.log(first);
first.insertAdjacentHTML('beforebegin', '<div class="test">Deepanshu Yadav.</div>'); //% insert Deepanshu yadav at start of before #first.

first.insertAdjacentHTML('beforeend', '<div class="test">Deepanshu Yadav.</div>'); //% insert Deepanshu yadav at end of before #first.

first.insertAdjacentHTML('afterbegin', '<div class="test">Deepanshu Yadav.</div>');//% insert Deepanshu yadav at start of after #first.

first.insertAdjacentHTML('afterend', '<div class="test">Deepanshu Yadav.</div>');//% insert Deepanshu yadav at end of after #first.

//* Removing Element Node from DOM.
// first.remove(); //% Remove whole #first div from html. 