let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
console.log(index); // Output: 7
// The indexOf() method returns the index of the first occurrence of a specified value in a string.
// If the value is not found, -1 is returned.
// The indexOf() method is case sensitive.
// Syntax: string.indexOf(searchValue, start)
// Parameters:
// searchValue - The value to search for.
// start - Optional. The position to start the search. Default is 0.
// Return value: A number, representing the index of the first occurrence of the specified value in the string, or -1 if not found.
// Example:
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index); // Output: 7