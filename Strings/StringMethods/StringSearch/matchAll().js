 //function matchAll()

 //{
 // The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
 // It is useful for finding all matches in a string, especially when using regular expressions with capturing groups.
 // Syntax: string.matchAll(regexp)
 // Parameters: regexp - A regular expression object or a string to search for.
 // Return value: An iterator of all matches, including capturing groups.
 // Example:
 let text = "The rain in SPAIN stays mainly in the plain";
 let matches = text.matchAll(/ain/g);
 for (const match of matches) {
     console.log(match);
 }
 // Output:
 // [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 14, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 22, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 36, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // Note: The matchAll() method is particularly useful when you need to find all occurrences
 // of a pattern in a string and want to access the capturing groups for each match.
 // It returns an iterator, which you can loop through to access each match and its details.
 // If you only need the first match, you can use the match() method instead.
 // Example with capturing groups:
 let textWithGroups = "The rain in SPAIN stays mainly in the plain";
 let matchesWithGroups = textWithGroups.matchAll(/(ain)/g);
 for (const match of matchesWithGroups) {
     console.log(match);
 }
 // Output:
 // [ 'ain', index: 5, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 14, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 22, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // [ 'ain', index: 36, input: 'The rain in SPAIN stays mainly in the plain', groups: undefined ]
 // Note: The matchAll() method is available in modern JavaScript environments (ES2020 and later).
 // If you need to support older environments, you may need to use a polyfill or alternative methods to achieve similar functionality.
 // Example of using matchAll with capturing groups:
 let textWithCapturingGroups = "The rain in SPAIN stays mainly in the plain";
 let matchesWithCapturing = textWithCapturingGroups.matchAll(/(ain)/g);
 for (const match of matchesWithCapturing) {
     console.log(`Match: ${match[0]}, Index: ${match.index}`);
 }
 // Output:
 // Match: ain, Index: 5
 // Match: ain, Index: 14
 // Match: ain, Index: 22
 // Match: ain, Index: 36
 // Note: The matchAll() method is particularly useful when you need to find all occurrences
 // of a pattern in a string and want to access the capturing groups for each match.
 // It returns an iterator, which you can loop through to access each match and its details.
 // If you only need the first match, you can use the match() method instead.
 // Example with match():
 let firstMatch = textWithCapturingGroups.match(/(ain)/);
 console.log(`First Match: ${firstMatch[0]}, Index: ${firstMatch.index}`);
 // Output: First Match: ain, Index: 5
 // Note: The match() method returns an array containing the first match and its details,
 // including the index of the match in the original string.
 //}