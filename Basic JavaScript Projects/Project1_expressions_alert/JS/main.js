//previous assignment 2 Write the alert() method deleted as per assignment 4

window.alert("Still, Hello Worlds!"); //cause an alert window to pop up

//Assignment 6 assigning a variable to a string value, and using document.write method to display the variable.
var A = "Var, Hello Worlds. this is a string";

//Assignment 5 
document.write(A); //display text using JavaScript

//Assignment 7 Assign a string value to a variable window.alert() method to display
var B = "Many attempts later.";

window.alert(B); //window.alert() method displays var B

//Assignment 8  write a string that contains an apostrophe and/or quotations marks
var C = "<br>just a copy.<br> Lisa Told Bart\"Knock it off, Bart!\"<br>";

document.write(C); 
//Assignment 8  just practicing two different ways of using \

document.write("\"Eat my Shorts!\" Bart Responded.<br> Copy ended<br>");

//Assignment 9 Concatenate 
document.write("trying to concentrate."
+ " But can\'t."
+ " But trying anyways.");

//challenge 1
var D = "<br> using var" + " to create a concatenated"
+" sentence"; //must remember to put in space before or after new line of sentance else grammtically wrong
document.write(D)

//Assignment 10 mulitple variables
var Family="<br>Atomic", Dad="<br>Alex", Mum="<br>Redacted", Son="<br>Toby", Cousin="<br>Orson";
document.write(Mum) //displays one of the variables

//Assignment 11 assign colors 
// var Family=family.fontcolor("yellow"); var Dad=Dad.fontcolor("purple"); var Mum=Mum.fontcolor("navy"); var Cousin=Cousin.fontcolor("maroon");
//can't seem to write multpe var for other other var and colour, won't display
var Son=Son.fontcolor("blue");

document.write(Son);

//assignment 12 Expressions
document.write(2+8); //shows 10

//challenge 2
//oncluck button
function displayDate (){
    document.getElementById("timeTest").innerHTML=Date()
}

//dbl click test
function dblClick(){
    document.getElementById("double").innerHTML = "I was double-clicked!";
}

//onchange test
function myPastry() {
    var x = document.getElementById("pastries").value;
    document.getElementById("pastry").innerHTML = "You selected: " + x;
  }