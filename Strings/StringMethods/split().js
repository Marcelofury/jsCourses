let text = "a,b,c,d,e,f";
const myArray = text.split(",");
console.log(myArray); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// The split() method splits a string into an array of substrings, using a specified separator.
// If the separator is not found in the string, the entire string is returned as a single-element array.
// If the separator is an empty string, the string is split into individual characters.
// Syntax: string.split(separator, limit)
// Parameters:
// - separator: A string or regular expression that defines the points at which the string is split.
// - limit: An integer that specifies a limit on the number of splits to be found.
// Return value: An array of substrings.
// Example:
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// console.log(myArray); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// If the separator is not found, the entire string is returned as a single-element array.
// let text = "Hello World";
// const myArray = text.split(",");
// console.log(myArray); // Output: [ 'Hello World' ]
// If the separator is an empty string, the string is split into individual characters.
// let text = "Hello";
// const myArray = text.split("");
// console.log(myArray); // Output: [ 'H', 'e', 'l', 'l', 'o' ]
// If the limit is specified, the array will contain at most that many elements.
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",", 3);
// console.log(myArray); // Output: [ 'a', 'b', 'c' ]
// If the limit is greater than the number of splits, all substrings will be included in the array.
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",", 10);
// console.log(myArray); // Output: [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// If the limit is 0, an empty array is returned.
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",", 0);
// console.log(myArray); // Output: []