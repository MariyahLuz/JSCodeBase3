const person = {
  firstName1: "Nick",
  lastName: "Anderson",
  age1: 35,
  sex: "M"
}

//Without destructuring
console.log("//Without Destructuring//")

const first = person.firstName1;
const age = person.age1;
const city = person.city1 || "Paris";

console.log(age)
console.log(first)
// console.log(firstName1)
console.log(city)

//With destructuring
console.log("//With Destructuring//")

const {firstName1: first1, age1, city1 ="Paris"} = person;

console.log(age1)
console.log(first1)
// console.log(firstName1)
console.log(city1)

//the bracketes "{}" after the const are the destructuring syntax