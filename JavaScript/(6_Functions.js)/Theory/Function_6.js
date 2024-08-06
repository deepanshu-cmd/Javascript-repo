const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.
//? Callback Function.

function ask(question, yes, no) {
    let q = prompt(question);
    if (q == "yes") {
        yes();
        console.log(yes);
        //^ yes contains copy of showOk function ,so yes()==showOk.
    }

    else if (q == "no") {
        no();
        console.log(no);
        //^ yes contains copy of showCancel function ,so no()==showOk.
    }
}

function showOk() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You canceled the execution.");
}

//* usage: functions showOk, showCancel are passed as arguments to ask function.
ask("Do you agree?", showOk, showCancel);
//@ NOTE: The arguments showOk and showCancel of ask are called callback functions or just callbacks. 