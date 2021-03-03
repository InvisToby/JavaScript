function addition(){
    var add = 4 + 6; 
    document.getElementById("mathAdd").innerHTML = "4 + 6 =" + add;
}

function subtraction(){
    var subtract = 65 - 6; 
    document.getElementById("mathSub").innerHTML = "65 - 6 =" + subtract;
}

function mulitplication(){
    var mulitply  = 4 + 6; 
    document.getElementById("mathMulti").innerHTML = "9 x 6 =" + mulitply;
}

function division(){
    var divide = 65 - 6; 
    document.getElementById("mathDiv").innerHTML = "65 / 2 =" + divide;
}

function multi_Math(){
    var multi_Op =(9+4) * 8 /3 -5;
    document.getElementById("mathMultiOp").innerHTML = "9+4, miltplied by 8, divided by 3 and the subtract 5 =" + multi_Op;
}

function Remainder(){
    var remain =28%5;
    document.getElementById("mathRemain").innerHTML = "when dividing 28 by 5 you have a remainder of:" + remain;
}

function negation_op(){
    var neg =5;
    document.getElementById("mathNegOp").innerHTML = -neg;
}

var X = 6;
X++;
document.write(X);

var y = 10;
y--;
document.write(y);

window.alert(Math.random());

window.alert(Math.random()*100);

//challenge