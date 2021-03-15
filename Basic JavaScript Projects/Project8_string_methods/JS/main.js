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