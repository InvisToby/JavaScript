//assignment 35
//Ternary Operators to assign a value to a variable based on a condition. 
function  Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;//gets input from html page id "height" value
    Can_ride = (Height<52)?"you are too short":"You are tall enough"; //  if left is smaller then 52 =you are too short, 52 = you are tall enough
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}      

//challenge 8

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age<18)?"You are not old enough":"You are old enough ";
    document.getElementById("Vote").innerHTML= Can_vote + " to vote.";
}

//assignment 36
//Keywords and Contructors

function Vehicle(Make, Model, Year, Color) { //is the object constructor.
    this.Vehicle_Make=Make; //“this” keyword indicates the object that is the owner of the code
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // “new” keyword, used to create new objects.
var Emily = new Vehicle("Jeep", "Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1972, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//challenge 9

function character(first, race, age, eye) {
    this.firstName = first;
    this.raceName = race;
    this.age = age;
    this.eyeColor = eye;
  }
  var abstract = new character("Cipher", "Alien", 122, "blue"); //abstrack is a reserved Keyword, so this comes up with 'undefined'
  function myCharacter() {
  document.getElementById("error").innerHTML = "The New character is " + abstract.first + "."; 
  }

  function count_Function(){
    document.getElementById("Nested_Function").innerHTML = Count(); 
    function Count() { //Function Count
        var Strating_point = 9 //create starting point
        function Plus_one() {Strating_point += 1;} //Function to add 1
        Plus_one(); // Call Plus_one()
        return Strating_point; //stops the execution of a function and returns the value from that function.
    }
  }
