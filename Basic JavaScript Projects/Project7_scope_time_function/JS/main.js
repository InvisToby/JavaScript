//assignment 39
//global
var X = 323;
function something_Something_1(){
    document.write(2 + X + "<br>");
}
function something_Something_2(){
    document.write(X + 4 + "<br>");
}
something_Something_1();
something_Something_2();

//local
function something_Something_3(){
    var Y = 55; 
    document.write(6 + Y + "<br>");
}
function something_Error(){
    console.log(Y + 42)
}
something_Something_3();
something_Error();


//assignment 40
//if statements

//minor test 
if(4<7) {
    document.write ("the left number is smaller than the number on the right." + "<br>")
}

//get date
function get_Date(){
    if (new Date().getHours() <18) {
        document.getElementById("Greetings").innerHTML="how are you today?";
    }
}


function Get_UnBirthday(){
    if (new Date().getDate() <12)
    if (new Date().getMonth()< 10) {
        document.getElementById("UnBirthday").innerHTML="Happy UnBirthday to you";
    }
}
