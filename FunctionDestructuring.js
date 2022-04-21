const person = {
  firstName: "Mariyah",
  lastName: "Luzinda",
  age: 35,
  sex: "M"
}
//Without Destructuring
console.log("//Without Destructuring//")

function joinFirstLastName(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  return firstName + '-' + lastName;
}

console.log(joinFirstLastName(person)); 

//With Destructuring
console.log("//With Destructuring//")

function joinFirstLastName2({ firstName, lastName }) { // we create firstName and lastName variables by destructuring person parameter
  return firstName + '-' + lastName;
}

console.log(joinFirstLastName2(person)); 

//Destructuring With Arrow Functions
console.log("//Destructuring With Arrow Functions//")

const joinFirstLastName3 = ({ firstName, lastName }) => firstName + '-' + lastName;

console.log(joinFirstLastName3(person)); 