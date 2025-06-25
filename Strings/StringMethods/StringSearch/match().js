let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");
console.log(text.match("ain")); // Output: [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
// The match() method searches a string for a specified value and returns the matches as an array.
// If no match is found, null is returned.
// The match() method is case sensitive.
// Syntax: string.match(regexp)
// Parameters: regexp - A regular expression object or a string to search for.
// Return value: An array containing the matches, or null if no match is found.
// Example:
// let text = "The rain in SPAIN stays mainly in the plain";
// text.match("ain");
// console.log(text.match("ain")); // Output: [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
// Note: The match() method can also be used with regular expressions to find more complex patterns in a string.
// For example, you can use it to find all occurrences of a pattern or to extract specific groups from a match.
// If you want to find all matches in a string, you can use the `g` (global) flag in the regular expression.
// Example with global flag:
// let text = "The rain in SPAIN stays mainly in the plain";
// let matches = text.match(/ain/g);
// console.log(matches); // Output: [ 'ain', 'ain', 'ain' ]