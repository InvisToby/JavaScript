class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
} //visual code suggestion
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1972, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


