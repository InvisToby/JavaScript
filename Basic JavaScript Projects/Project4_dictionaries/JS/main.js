//assignment 25
function original_Character() {
    var Original = {
        Name:"Toby",
        DOB: "10/10/1997",
        Age: "23",
        Pronouns: "He They Toby",
        Height: "6ft",
        Eye_Colour: "Light Blue",
        Quote:"Please take care of yourselves"
    };
    document.getElementById("Characters").innerHTML = Original.Quote;
}
//Orginal character KVP for ''Toby showing 'quote on main Html page

//assignment 25
function del_Original_Character() {
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
    delete Original.Quote;
    document.getElementById("delCharacters").innerHTML = Original.Quote;
}
//will show undefined on main Html page for 'quote' as the value is no longer there