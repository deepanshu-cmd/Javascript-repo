const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
//? Creat a user defined array.(inserting elements in an array through user input.)
let inputArray = [];
let size = 5; //% Maximum Array size

for (let i = 0; i < size; i++) {

	//% Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i + 1) + " : ");
}

//% Print the array in the console.
console.log(inputArray);
console.log(typeof inputArray)