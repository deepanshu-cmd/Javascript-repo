let userName = 'Deepanshu';

function showMessage() {
  userName = "Babita"; //% (1) changed the outer variable

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log(userName); //% Deepanshu before the function call

showMessage();

console.log(userName); //% Babita, the value was modified by the function