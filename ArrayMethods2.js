const students = [
  { name: "Nick", grade: 10 },
  { name: "John", grade: 15 },
  { name: "Julia", grade: 19 },
  { name: "Nathalie", grade: 9 },
];

const aboveTenSum = students
  .map(student => student.grade) // we map the students array to an array of their grades
  
  .filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
  
  .reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one

console.log(aboveTenSum) 

//PART 2
console.log("//PART 2//")

const numbers=[0,1,2,3,4,5,6];
const doubledNumbers = numbers.map(n=>n * 2)
//Also can be written as
//const doubledNumbers = numbers.map(function(n) {
//   return n * 2;
// });
console.log(doubledNumbers); 

//PART 3
console.log("//PART 3//")
const sum = numbers.reduce(
  function(acc, n) {
    return acc + n;
  },
  0 // accumulator variable value at first iteration step
);
console.log(sum)

//PART 4
console.log("//PART 4//")
//Also can be written as
const sum1 = numbers.reduce((acc, n) => acc + n, 0);
 
console.log(sum1) 

//PART 5
console.log("//PART 5//")
const greaterThanZero = numbers.find(n=> n > 0)  // return number just greater than 0 if present

console.log(greaterThanZero); 
