//challenge 14
//return statement.
//stops the execution of a function and returns a value from that function

var A = mathFunction(56, 5); // Function called, return value ends up in A
function mathFunction(a, b) {
  return a + b;   // returns the product of a and b
}  
document.getElementById("mathReturn").innerHTML = A;

function helloFunction(name) {
    return "Hello " + name;
  }
document.getElementById("Hello").innerHTML = helloFunction("Moderator");

