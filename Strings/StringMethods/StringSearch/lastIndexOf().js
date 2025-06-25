let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
console.log(index); // Output: 21
// The lastIndexOf() method returns the index of the last occurrence of a specified value in a string.
// If the value is not found, -1 is returned.
// The lastIndexOf() method is case sensitive.
// Syntax: string.lastIndexOf(searchValue, start)
// Parameters:
// searchValue - The value to search for.
// start - Optional. The position to start the search. Default is the end of the string.
// Return value: A number, representing the index of the last occurrence of the specified value in the string, or -1 if not found.
// Example:
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index); // Output: 21