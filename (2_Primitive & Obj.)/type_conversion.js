//*String Conversion 
console.log("String Conversion :-");
let value = false;
console.log("value = " + value);
console.log(typeof value);
//^ String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.
value = String(value);
console.log("value = " + value);
console.log(typeof value);

console.log('\n')
//* Numeric Conversion.
console.log("Numeric Conversion :-");
// let value_2 = "2620";
// let value_2 = null;
// let value_2 = undefined;
let value_2 = "2620z";
console.log("value_2 = " + value_2);
console.log("value_2 type before conversion = " + typeof value_2);
value_2 = Number(value_2);
console.log("value_2 = " + value_2);
console.log("After type conversion : " + typeof (value_2));
//^ If the string is not a valid number, the result of such a conversion is NaN(type of NaN is number).

console.log('\n')
//* Boolean Coversion.
console.log("Boolean Coversion :-")
let value_3 = "Babita"; //^ Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
console.log("value_3 = " + value_3);
console.log("value_3 type before conversion = " + typeof value_3);
value_3 = Boolean(value_3);
console.log("value_3 = " + value_3);
console.log("value_3 type after conversion = " + typeof value_3); 
