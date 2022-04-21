//Functions Part 1
console.log("FUNCTIONS")
function myFunc() {
  this.myVar = 0;
  var that = this; // that = this trick
  setTimeout(
    function() { // A new *this* is created in this function scope
      that.myVar++;
      console.log(that.myVar) // 1

      console.log(this.myVar) // undefined -- see function declaration above
    },
    0
  );
}
myFunc()

//Function Default Parameter
console.log("//Function Default Parameter...")

function myFunc2(x = 10) {
  return x;
}
console.log(myFunc2()) // 10 -- no value is provided so x default value 10 is assigned to x in myFunc
console.log(myFunc2(5)) // 5 -- a value is provided so x is equal to 5 in myFunc

console.log(myFunc2(undefined)) // 10 -- undefined value is provided so default value is assigned to x
console.log(myFunc2(null)) // null -- a value (null) is provided, so default parameter wont be applied