//assigntment 16 
function addition(){ 
    var add = 4 + 6; 
    document.getElementById("mathAdd").innerHTML = "4 + 6 =" + add;
} //will add 4+6

//assigntment 17
function subtraction(){
    var subtract = 65 - 6; 
    document.getElementById("mathSub").innerHTML = "65 - 6 =" + subtract;
}
//will subtract 65 -6

//assigntment 18 
function mulitplication(){
    var mulitply  = 9*6; 
    document.getElementById("mathMulti").innerHTML = "9 x 6 =" + mulitply;
}
//will muliply 9 x 6
function division(){
    var divide = 65 - 6; 
    document.getElementById("mathDiv").innerHTML = "65 / 2 =" + divide;
}
//Division

//assigntment 19
function multi_Math(){
    var multi_Op =(9+4) * 8 /3 -5;
    document.getElementById("mathMultiOp").innerHTML = "9+4, miltplied by 8, divided by 3 and the subtract 5 =" + multi_Op;
}
//multiply operations 9+4, miltplied by 8, divided by 3 and the subtract 5

//assigntment 20 Modulus Operator
function Remainder(){
    var remain =28%5;
    document.getElementById("mathRemain").innerHTML = "when dividing 28 by 5 you have a remainder of:" + remain;
}
//finding the Remainder of 23 divided by 5 

//assigntment 21 Unary operator
function negation_op(){
    var neg =5;
    document.getElementById("mathNegOp").innerHTML = -neg;
}
//an operation that only contains a single operand, eg 5. 
//this is a negation operator

//assigntment 22
var X = 6;
X++;
document.write(X);

var y = 10;
y--;
document.write(y);
//Increment and decrements operators

//assigntment 22
window.alert(Math.random());
//will pop up with a random number 0-1
window.alert(Math.random()*100);
//has the window pop up with a random number 0-100

//challenge 4

window.alert(Math.round(5.7));