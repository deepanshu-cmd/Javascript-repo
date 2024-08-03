let first = document.getElementById("first");
console.log(first);

console.log(first.getAttribute("class")); //% script2.js:2 bits

console.log(first.hasAttribute("class")); //% true
console.log(first.hasAttribute("style")); //% false

let Second = document.getElementById("Second");
console.log(Second);
// console.log(Second.setAttribute("hidden", "true")); //% second div won't diplay on borwser screen.
console.log(Second.setAttribute("class", "bits bitstha")); //% go in inspect and see html code.

// console.log(first.removeAttribute("class")); //% both classes from first div got remove ,see in inspect.

console.log(first.attributes); //% NamedNodeMap {0: id, 1: class, 2: data-game, 3: data-player, id: id, class: class, data-game: data-game, data-player: data-player, length: 4}

console.log(first.dataset); //% DOMStringMap {game: 'subway', player: 'Babita'}
console.log(first.dataset.game); //% subway.
console.log(first.dataset.player); //% Babita.

