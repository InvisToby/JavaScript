//assignment 39
//global
var X = 323; //can be accessed by any function
function something_Something_1(){
    document.write(2 + X + "<br>");
}
function something_Something_2(){
    document.write(X + 4 + "<br>");
}
something_Something_1(); //=325
something_Something_2(); //=327

//local
function something_Something_3(){
    var Y = 55; //only accessed by the function it is assigned to.
    document.write(6 + Y + "<br>");
}
function something_Error(){
    console.log(Y + 42)
}
something_Something_3(); //= 61
something_Error(); //error result undefined, as it can't access thre var


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


function Get_Time(){
    if (new Date().getTime() != 3) { //if time not = to this then 
        document.getElementById("Time").innerHTML="Not Yet, Sorry."; //write this
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18 ) { //if 'age' = or greater then 18 
        Vote = "Youre are old enough to vote, congrats"; // if equal or greater then write this
    } else {
        Vote = "Not old enough to vote yet."; //if not equal or less then 18 write this instead
    }
    document.getElementById("HORU").innerHTML = Vote;
}

function Get_Birthday() {
    BDay = document.getElementById("BDay").value;
    if (new Date().getDate() == BDay) { // checks if today is = to day input, can't get it to work with day and month
        congrats = "Happy Birthday";
    } else {
        congrats = "Happy UnBirthday";
    }
    document.getElementById("Birthday").innerHTML = congrats;
}

function Time_Function(){
    var Time = new Date().getHours();
    var Reply;
    if  (Time < 12 > 0) { //if the time is less the 12 but greater then 0
        Reply = "Good Morning!"; //write this
    }
    else if (Time > 12 < 18){ //but if it is more the 12 but less the 18 (6 o'clock)
        Reply = "Good Afternoon!"; //write this
    }
    else {
        Reply = "Good Evening!"; //and if its none of the above
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}
