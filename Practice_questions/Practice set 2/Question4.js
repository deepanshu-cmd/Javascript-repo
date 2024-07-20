// ? Use ternary operator with a simple example.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );