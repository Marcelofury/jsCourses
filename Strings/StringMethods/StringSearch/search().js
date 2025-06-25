let text = "Please locate where 'locate' occurs!";
text.search("locate");
console.log(text.search("locate")); // Output: 7
// The search() method executes a search for a match between a regular expression and this String object
// and returns the index of the first match.
// If no match is found, it returns -1.
// Syntax: string.search(regexp)
// Parameters: regexp - A regular expression object.
// Return value: A number, representing the index of the first match, or -1 if no match is found.
// Example:
// let text = "Please locate where 'locate' occurs!";
// console.log(text.search("locate")); // Output: 7
// Note: The search() method is similar to indexOf(), but it allows for more complex searches using regular expressions.
// It does not support the start parameter like indexOf() does, as it always searches from the beginning of the string.
// If you need to search for a substring without regular expressions,
// you can use indexOf() instead, which is more straightforward for simple substring searches.