const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(n => n * 2); 
//Array.prototype.map() takes an array, does something on its elements and returns an array with the transformed elements.

const evenNumbers = numbers.filter(n => n % 2 === 0); 
//Array.prototype.filter() takes an array, decides element by element if it should keep it or not and returns an array with the kept elements only

const sum = numbers.reduce((prev, next) => prev + next, 0); 
//Array.prototype.reduce() takes an array and aggregates the elements into a single value (which is returned)
const greaterThanFour = numbers.find((n) => n>4); 
//Array.prototype.find() takes an array, and returns the first element that satisfies the provided condition.

console.log("//Map Method")
console.log(doubledNumbers)

console.log("Filter Method")
console.log(evenNumbers)

console.log("Reduce Method")
console.log(sum)

console.log("Find Method")
console.log(greaterThanFour)
