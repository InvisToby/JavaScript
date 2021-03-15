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
    var Section = Sentence.slice(43, 101);
    document.getElementById("toSlice").innerHTML = Section;
}
