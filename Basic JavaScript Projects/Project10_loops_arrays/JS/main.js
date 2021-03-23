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
    var n = str.length;
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
