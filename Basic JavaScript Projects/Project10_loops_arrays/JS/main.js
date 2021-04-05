//assignment 50
//while Loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) { //while x is less then 11 perform continue loop
        Digit += "<br>" + X; //digit =+ x on a new line 
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

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop(){
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";    
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//assignment 52
//Array

function array_Function(){
    var Oc_Profile = [];
    Oc_Profile[0] = "red haired";
    Oc_Profile[1] = "blue eyes";
    Oc_Profile[2] = "an artist";
    Oc_Profile[3] = "hard working";
    document.getElementById("Array").innerHTML = "They are " + Oc_Profile[3] + ".";
}

//assignment 53
//const

function constant_function(){
    const Profile = {name:"Cipher", race:"Alien", hair:"Red Hair", strength:"Super resistant to practically everything"};
    Profile.hair = "red haired";
    Profile.eyes = "Blue eyes";
    document.getElementById("Constant").innerHTML = "" + Profile.name + " has " + Profile.eyes + ". and is " + Profile.strength;
}

//assignment 54
//let
var L = 22;
document.write(L);
{
    let L = 87;
    document.write ("<br>" + L)
}
document.write ("<br>" + L)

//assignment 55
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "this car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML = car.description();

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