let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part); // Output: Banana, Kiwi
// The slice() method extracts a part of a string and returns the extracted part in a new string.
// The slice() method can take two parameters: the start position and the end position (not included).
// If the end position is not specified, the slice() method extracts to the end of the string.
// If the start position is negative, it is treated as strLength + start, where strLength is the length of the string.
// If the end position is negative, it is treated as strLength + end, where strLength is the length of the string.
// Syntax: string.slice(start, end)
// Parameters:
// start - The position where to start the extraction (the first character is at index 0).
// end - Optional. The position where to end the extraction (not included). If omitted,
// the slice() method extracts to the end of the string.
// Return value: A string, representing the extracted part of the string.
// Example:
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// console.log(part); // Output: Banana, Kiwi