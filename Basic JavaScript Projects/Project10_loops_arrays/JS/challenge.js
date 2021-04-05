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

//Challenge 15
//The break statement "jumps out"  of a loop.
var text = "";
var i;
for (i = 1; i < 10; i++) {
  if (i === 5) { break; }
  text += "You will be player " + i + "<br>";
}
document.getElementById("break_Test").innerHTML = text;

//The continue statement "jumps over", skips, one iteration in the loop.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 4) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue_Test").innerHTML = text;