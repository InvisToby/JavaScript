//Assignment 44
//concat() method 

function concat_Sentence() {
    var start = "The moon shone bright to the east,  ";
    var middle = "nearly full ";
    var end = "as it cast a soft glowing halo around it,  ";
    var extra = "and the sky held the slightest tinge of purple tonight.  ";
    var whole_Sentence = start.concat(middle, end, extra);
    document.getElementById("Concatenate").innerHTML = whole_Sentence;
}

//Assignment 45
//slice() method 

function slice_Method() {
    var Sentence = "The night sky appeared as it was meant to. Everywhere one looked, stars twinkled and flickered back, illuminating the hill better than any flashlight could ever hope to."; 
    var Section = Sentence.slice(43, 101); //will be cut out and display string between 43 and 101 stars twinkled and flickered back,
    document.getElementById("toSlice").innerHTML = Section;
}

//challenge 10

//toUpperCase() method.
function upper_Case() {
    var text = document.getElementById("toSlice").innerHTML;
    document.getElementById("toSlice").innerHTML = text.toUpperCase(); //converts the string found in to slice "Everywhere one looked, stars twinkled and flickered back" to upper case
  }
//search() method.
function search_Method(){
    var str = "The 'moon' shone bright to the east.";
    var pos = str.search("moon"); //returns the the position of the first occurrence of a specified text eg moon
    document.getElementById("find").innerHTML = pos;
}

//Assignment 46
//number method

function num_String(){
    var X =742;
    document.getElementById("No_to_String").innerHTML = X.toString();
}

//Assignment 46
//toPrecision() Method
function precision_Method(){
    var X =72826564.874365;
    document.getElementById("Precise").innerHTML = X.toPrecision(5);
}

//challenge 11
//toFixed() method.
function fixed_Method() {
    var num = 668.5218;
    var n = num.toFixed(2); //rounding the number to keep only two decimals:
    document.getElementById("fix").innerHTML = n;
  }

//valueOf() method.
//return the primitive value of the string object
function myValue_Method() {
    var str = "Ahoy hoy";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
  }
