// ** Creat an object in JS.Can you change it to hold a number later(Answere-->NO).
// ** Try to add a new key to the const object outside of its block(Answer-->Yes).

const a = {
    name: "Babita",
    Nickname: "Bits"
}
console.log("Name-->", a["name"])
console.log("Nickname-->", a["Nickname"])

a['age'] = "32"
a['Nickname'] = "Bittoo"
console.log("age-->", a["age"])
console.log("Nickname2-->", a["Nickname"])
// !! Object is also known as key_value_pair.In object, property--->key and its paired with a value.'a' is a refrence to object {},we can add new key or modify its value too.

// a = 26;
// console.log(a)
// !!! It will give error coz we can't change object type (Non-primitive to primitive).If we try to print both then we get only 26 (number)