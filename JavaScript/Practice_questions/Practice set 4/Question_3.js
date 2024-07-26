// ? Explore include,startwith and endwith function of string.

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes(word)) //* If word="fox" is found in the sentence then true otherwise false.

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} found in the sentence`,);
//* Expected output : "The word "fox" is in the sentence"
//^ The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

//% condition ? expression-1 : expression-2 (If cond. is true --->expression-1 otherwise expression-2)