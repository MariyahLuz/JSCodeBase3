const myArray =["a", "b", "c"];

//Without Destructuring
console.log("//Without Destructuring//")

const x = myArray[0];
const y = myArray[1];
console.log(x);
console.log(y);

//With Destructuring
console.log("//With Destructuring//")

const [x1, y1, z] =myArray;
console.log(x1);
console.log(y1);
console.log(z);


