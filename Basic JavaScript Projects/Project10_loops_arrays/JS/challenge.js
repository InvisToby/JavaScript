//submission 10

//challenge 14
//return statement.
//stops the execution of a function and returns a value from that function

var A = mathFunction(56, 5); // Function called, return value ends up in A
function mathFunction(a, b) {
  return a + b;   // returns the product of a + b
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
  if (i === 5) { break; } //if i = 5, will 'jump out' of loop obly going up to 4, even tho it can go up to 10
  text += "You will be player " + i + "<br>";
}
document.getElementById("break_Test").innerHTML = text;
//should print "You will be player 1"  up to until "You will be player 4"

//The continue statement "jumps over", skips, one iteration in the loop.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 4) { continue; } //if i = 4 skips jumps over 4
  text += "The number is " + i + "<br>";
}
document.getElementById("continue_Test").innerHTML = text;
//should display 'The number is 0 -3' then skips The 'number is 4 before' continuing 'The number is 5'