let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2); // Output: "Hello World!"
// The trim() method removes whitespace from both ends of a string.
// Syntax: string.trim()
// Parameters: None
// Return value: A string, representing the trimmed string without leading or trailing whitespace.
// Example:
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2); // Output: "Hello World!"
// Note: The trim() method does not change the original string, it returns a new string.
// Example:
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text1); // Output: "      Hello World!      "
// console.log(text2); // Output: "Hello World!"
// The original string remains unchanged, while the trimmed string is stored in text2.
// This is because strings in JavaScript are immutable, meaning they cannot be changed after they are created.
// The trim() method creates a new string with the whitespace removed, leaving the original string intact