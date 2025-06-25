let text = "5";
let padded = text.padStart(4, "0");
console.log(padded); // Output: 0005
// The padStart() method pads the current string with another string (the second argument) until the resulting string reaches a given length (the first argument).
// The padding is applied from the start of the string.
// If the current str   ing is already longer than the specified length, the padStart()
// method does not change the string.
// Syntax: string.padStart(targetLength, padString)
// Parameters:
// targetLength - The length of the resulting string once the current string has been padded.
// padString - Optional. The string to pad the current string with. If this parameter is
// not provided, the padStart() method uses a space character as the padding string.
// If the padString is too long, it is truncated from the end