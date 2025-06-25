let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part); // Output: Banana
// The substring() method extracts characters from a string between two specified indices and returns the new substring.
// The substring() method can take two parameters: the start index and the end index (not included).
// If the end index is not specified, the substring() method extracts to the end of the string.
// If the start index is greater than the end index, the substring() method swaps the two indices.
// If the start index is negative, it is treated as 0. If the end index is negative, it is treated as 0.
// Syntax: string.substring(start, end)
// Parameters:
// start - The index where to start the extraction (the first character is at index 0).
// end - Optional. The index where to end the extraction (not included). If omitted,
// the substring() method extracts to the end of the string.
// Return value: A string, representing the extracted substring.
// Example:
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// console.log(part); // Output: Banana
// Note: The substring() method is similar to the slice() method, but it does not support negative indices.
// The substring() method is also different from the substr() method, which extracts a substring based on a starting index and a length.
// The substr() method is deprecated and should not be used in new code.
// Example of substr() method (not recommended):
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6); // Extracts 6 characters starting from index 7
// console.log(part); // Output: Banana
// Note: The substr() method is deprecated and should not be used in new code. Use substring() or slice() instead.
// Example of using negative indices with substring() (not recommended):
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-7, -1); // Treated as substring(0, 0)
// console.log(part); // Output: "" (empty string)