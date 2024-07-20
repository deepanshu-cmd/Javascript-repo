//? Program to tell wheather the entered year is a leap year or not.
/*    
1 year=365 days 6hr
leap year=366 days 24hr.
A leap comes  once in a every 4year
So the years which are completely divisble by(1) 4 ,100 and 400 is a leap year
                                             (2) 4 only is a leap year
                                             (3) **100 and 4 only is not a leap year.
*/

const prompt = require('prompt-sync')(); //! exclude this to use below code on browser.

let year = prompt("Enter year : ")
year = parseInt(year)
//* Divisible by 400,100 & 4. ----> Leap year.
if (year % 400 == 0 && year % 100 == 0 && year % 4 == 0) {
    console.log("Given year", year, "is a leap year.")
}
//* Divisible by 4 only. ----> Leap year.
else if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
    console.log("Given year", year, "is a leap year.")
}
//* Divisible by 100 & 4 ----> Not a leap year. 
else if (year % 400 != 0 && year % 100 == 0 && year % 4 == 0) {
    console.log("Given year", year, "is not a leap year.")
}
//* Not divisible by 400,100 & 4 -----> Not a leap year. 
else if (year % 400 != 0 && year % 100 != 0 && year % 4 != 0) {
    console.log("Given year", year, "is not a leap year.")
}

