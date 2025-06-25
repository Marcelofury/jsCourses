let x = 123;
x.toString(); // Converts the number to a string
x.toExponential(2); // Converts the number to exponential notation with 2 decimal places
x.toFixed(2); // Converts the number to a string with 2 decimal places
x.toPrecision(4); // Converts the number to a string with 4 significant digits
x.valueOf(); // Returns the primitive value of the number
console.log(x.toString()); // Output: "123"
console.log(x.toExponential(2)); // Output: "1.23e+2"
console.log(x.toFixed(2)); // Output: "123.00"
console.log(x.toPrecision(4)); // Output: "123.0"
console.log(x.valueOf()); // Output: 123