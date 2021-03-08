//assignment 26
//This operator gives the data type of a variable
document.write(typeof"Test"); //outout = string 
document.write(typeof 7 ); //output = number

//challenge 6
function not_a_Number(){
    document.getElementById("testNaN").innerHTML = 0/0;
    document.getElementById("testNaNString").innerHTML =isNaN("several tests");
    document.getElementById("testNaNNo").innerHTML =isNaN('542');
}

//assignment 27
document.write(4E310);
document.write(-1E310);
