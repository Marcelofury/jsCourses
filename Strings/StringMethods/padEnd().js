let text = "5";
let padded = text.padEnd(4, "0");
console.log(padded); // Output: 5000
// The padEnd() method pads the current string with another string (the second argument) until
// the resulting string reaches a given length (the first argument).
// The padding is applied from the end of the string.
// If the current string is already longer than the specified length, the padEnd()
// method does not change the string.
// Syntax: string.padEnd(targetLength, padString)
// Parameters:
// targetLength - The length of the resulting string once the current string has been padded.
// padString - Optional. The string to pad the current string with. If this parameter is
// not provided, the padEnd() method uses a space character as the padding string.
// If the padString is too long, it is truncated from the end.
// Return value: A string, representing the padded string.
// Example:
// let text = "5";
// let padded = text.padEnd(4, "0");
// console.log(padded); // Output: 5000