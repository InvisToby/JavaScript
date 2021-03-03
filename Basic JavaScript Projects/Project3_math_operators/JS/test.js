function addition(){
    var add = 4 + 6; 
    document.getElementById("math").innerHTML = "4 + 6 =" + add;
}
function subtraction(){
    var subtract = 65 - 6; 
    document.getElementById("math").innerHTML = "65 - 6 =" + subtract;
}

function mulitplication(){
    var mulitply  = 4 + 6; 
    document.getElementById("math").innerHTML = "9 x 6 =" + mulitply;
}

function division(){
    var divide = 65 - 6; 
    document.getElementById("math").innerHTML = "65 / 2 =" + divide;
}

var name = window.prompt("Enter your name: ");
alert("Your name is " + name);