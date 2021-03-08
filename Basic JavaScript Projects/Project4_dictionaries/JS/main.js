function original_Character() {
    var Original = {
        Name:"Toby",
        DOB: "10/10/1997",
        Age: "23",
        Pronouns: "He They Toby",
        Height: "6ft",
        Eye_Colour: "Light Blue",
        Quote:"Please take care of yourselves",
        Quote:"What are you doing" //challenge 5 writes out this quote isntead of the one before
    };
    document.getElementById("Characters").innerHTML = Original.Quote;
}