let text = "HELLO WORLD";
let char = text.charCodeAt(0);
console.log(char); // Output: 72
// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
// The index of the first character is 0, the second character is 1, and so on.
// If the index is out of range, NaN is returned.
// Syntax: string.charCodeAt(index)
// Parameters: index - The position of the character to return.
// Return value: A number, representing the Unicode of the character at the specified index in the string.
// Example:
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char); // Output: 72