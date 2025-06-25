const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

fruits.reverse();

fruits.shift();
fruits.unshift("Kiwi");

console.log(fruits.sort()); // Output: [ 'Kiwi', 'Mango', 'Orange', 'Apple' ]
console.log(fruits.reverse()); // Output: [ 'Apple', 'Orange', 'Mango', 'Kiwi' ]
console.log(fruits.shift()); // Output: 'Apple'
console.log(fruits.unshift("Kiwi")); // Output: 4 (new length of the array)
console.log(fruits); // Output: [ 'Kiwi', 'Orange', 'Mango', 'Kiwi' ]