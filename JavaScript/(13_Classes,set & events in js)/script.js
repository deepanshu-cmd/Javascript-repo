//* changing class dynamically through js.
let first = document.getElementById("first");
console.log(first);
first.className = "text_dark red"; //% ---> color=black, bkacground=red,we have changed the classes from text_dark yellow to  text_dark red

//* removing classes from js.
let r = first.classList;
console.log(r); //% DOMTokenList(2) ['text_dark', 'red', value: 'text_dark red']
r.remove("red"); //% removing class="red" from #first div. background red got removed.

//* Adding classes through js.
let a = first.classList;
a.add("yellow") //% Added class="yellow" in #first div. background yellow added.

//* toggle() --> is used to add a class which is not present and removed the present class.
r.toggle("red"); //% class="red" was'nt present that's y it got added and the present class yellow got removed. 
r.toggle("red"); //% writing the upper statement again will remove the class="red" as its work of toggle to remove added class and add class which is not present.
// a.toggle("yellow"); //% class="yellow got removed."

//* checking wheather the given class is present or not by using classList.contains() ---> returns => true/false.
let y = first.classList.contains("yellow"); //% true.
console.log(y);
let t = first.classList.contains("text_dark"); //% true.
console.log(t);
let R = first.classList.contains("red"); //% false.
console.log(R);
let bg = first.classList.contains("bg_blue"); //% false.
console.log(bg);