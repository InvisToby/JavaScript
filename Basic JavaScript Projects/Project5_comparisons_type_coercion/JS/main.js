//assignment 26
//This operator gives the data type of a variable
document.write(typeof"Test"); //outout = string 
document.write(typeof 7 ); //output = number

//challenge 6
function not_a_Number(){
    document.getElementById("testNaN").innerHTML = 0/0; //browser wil display NaN as 0/0 is not a number.
    document.getElementById("testNaNString").innerHTML =isNaN("several tests"); //Using isNaN() function browser wil display “true” as "several tests is not a number".
    document.getElementById("testNaNNo").innerHTML =isNaN('542'); //Using isNaN() function browser wil display  “false” as "542 is a number".
}

//assignment 27
// “Infinity” “-Infinity”
document.write(4E310); //  displays “Infinity”
document.write(-1E310);// display “-Infinity”

//assignment 28
//
document.write(67>3); //true becase 67 is bigger then 3
document.write(86<4); // false because 4 is not bigger then 86

//assignment 29
