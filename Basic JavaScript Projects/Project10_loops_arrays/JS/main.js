//submission 10

//assignment 50
//while Loop
//will execute a block of code as long as a specified condition is true 
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) { //while x is less then 11 perform continue loop
        Digit += "<br>" + X; //digit will = x on a new line becase of = <br> 
        X++; //add 1
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//challenge 13
//The length property returns the length of a string (number of characters).

function find_length(){
    var str = "find";
    var n = str.length; //gets length of string 'find'
    document.getElementById("found").innerHTML = n;
}

//assignment 51
//for Loop
//for when you know exactly how many times you want to loop through a block of code
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //sets a variable Instruments, and an array?
var Content = ""; //sets a variable
var Y; //sets a variable
function For_Loop(){ //will loop till all are done
    for (Y = 0; Y < Instruments.length; Y++) { //1st statement start var init Y = 0, 2nd statement (condition for the loop to run) if Y lenth is less the Insruments array, 3rs statement, increases value (++) each time the code in the loop has been executed
    //Id returns true, the loop will start over again, if it returns false, the loop will end.
    Content += Instruments[Y] + "<br>"; //Content = Instruments what ever [Y] is at time, repeats   
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//assignment 52
//Array

function array_Function(){
    var Oc_Profile = []; // Oc_Profile is the Object
    Oc_Profile[0] = "red haired"; //[0] = indexes
    Oc_Profile[1] = "blue eyes"; //'blue eyes' = properties of the object
    Oc_Profile[2] = "an artist";
    Oc_Profile[3] = "hard working";
    document.getElementById("Array").innerHTML = "They are " + Oc_Profile[3] + "."; //gets ocprofile[3] will display They are Hard working.
}

//assignment 53
//const
//cannot be reassigned It does NOT define a constant value. It defines a constant reference to a value.
function constant_function(){ 
    const Profile = {name:"Cipher", race:"Alien", hair:"Red Hair", strength:"Super resistant to practically everything"};
    //the const 'Profile' cannot be reassigned
    Profile.hair = "Blue hair"; //can change the value
    Profile.eyes = "Blue eyes"; //can add a value
    document.getElementById("Constant").innerHTML = "" + Profile.name + " has " + Profile.eyes + " and " + Profile.hair + ". and is " + Profile.strength;
}

//assignment 54
//let
var L = 22;
//L=22
document.write(L);
{
    let L = 87;
    document.write ("<br>" + L)
    //L = 87
}
// L can NOT be used here
//L=22
document.write ("<br>" + L)


//assignment 55
//objects
let car = { //object 
    make: "Dodge ", //properties = 'makel, 'model'
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() { //is the method
        return "this car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();
//method = this car is a 2021 red dodge viper.

//assignment 55a
let ocProfile = {
    name: "Cipher ",
    race: "Alien ",
    hair: "Blue ",
    eye_color: "Blue ",
    description : function() {
        return "An Old Oc is " + this.name + this.race + this.hair + this.eye_color;
    }
};
document.getElementById("oc_profile").innerHTML = ocProfile.description();