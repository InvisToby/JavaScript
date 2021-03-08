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
//console.log() method
console.log(5+87); //can be used to display data in the console within the browser F12 > console to see answer 

//assignment 30
//Type Coercion
document.write("67"+ 8); //should tack 8 on to string 67 to = 678

//Challenge 7
console.log(65>85); //displays false in console

//assignment 31
//dbl equal check for equality
document.write(80 == 80);
document.write(67 == 8);

//assignment 32
//triple equal check the data on the left is = to data on right, and is same type of data as on right
A = 5;
B = 5;
document.write(A===B);
//Return true as the data type and value match 
C = 10;
D = "9";
document.write(C===D);
//Return false as the data type and value are different 

X = "10";
Y = "ten";
document.write(X===Y);
//Return false despite the data type match but values are different

E = 8;
F = 4;
document.write(E===F);
//Return false despite the values type match but data is different

c = "something";
d = "something";
document.write(c===d);
//Return true as the data type and value match 

//assignment 33
document.write(7>8 && 4>9);
document.write(3<4||2<5);

//assignment 34


//assignment 35
