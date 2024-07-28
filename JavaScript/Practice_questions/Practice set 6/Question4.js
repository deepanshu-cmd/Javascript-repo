//? Create a snake,water,gun game by uisng javascript.
const prompt = require('prompt-sync')(); //! exclude this to use below code on browser. 
let words = ["snake", "water", "gun"];
let input;
let points = 0;
let chances = 0;
while (true) {
    let computer = words[Math.floor(Math.random() * words.length)];
    input = prompt("enter a word : ");
    if (input == computer) {
        console.log("draw");
        chances++;
    }
    else if (input == "snake" && computer == "water") {
        console.log("you win");
        points++;
        chances++;
    }
    else if (input == "water" && computer == "snake") {
        console.log("oops there is a snake try agan");
        chances++;
    }
    else if (input == "water" && computer == "gun") {
        console.log("you win")
        points++;
        chances++;
    }
    else if (input == "gun" && computer == "water") {
        console.log("oops lose! there is water try again")
        chances++;
    }
    else if (input == "gun" && computer == "snake") {
        console.log("you win");
        points++;
        chances++;
    }
    else if (input == "snake" && computer == "gun") {
        console.log("oops lose! there is gun  try again");
        chances++;
    }
    else {
        console.log("wrong input");
        chances++;
    }

    if (chances == 5) {
        break;
    }
};
console.log("your points are " + points);
console.log("chances used in game " + chances);