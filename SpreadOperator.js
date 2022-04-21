//PART 1
console.log("//Part 1")

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"];

console.log(arr1)
console.log(arr2)

//PART 2
console.log("//Part 2")

function myFunc(x, y, ...params) {
  console.log(x);
  console.log(y);
  console.log(params)
}

myFunc("a", "b", "c", "d", "e", "f")

//PART 3
console.log("//Part 3")

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); 
console.log(y); 
console.log(z); 

const n = { x, y, ...z };
console.log(n); 

//Here is the difference
console.log("//The Difference")

const arr3 = ["a", "b", "c"];
const arr4 = [arr3, "d", "e", "f"]; 
console.log(arr4)