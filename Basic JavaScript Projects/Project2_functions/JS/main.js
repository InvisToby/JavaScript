//assignment 13
function My_First_Function(){ //defining/create function by naming it
    var str = "A test of sorts"; //defining/create variable by giving it a string value
    var result =  str.fontcolor("blue"); //using the fontcolor method on var string 'str' 
    document.getElementById("aTest").innerHTML=result; //putting value of result into HTML element with 'aTest'
}

//assignment 14
function concatenate(){ //defining/create function by naming it 'concatenate'
    var sentence = "A concatenate test of sorts"; //defining/create variable by giving it a string value
    sentence += " to combine these two sentences"; //using the fontcolor method on var string 'str' 
    document.getElementById("concatenated").innerHTML=sentence; //putting value of result into HTML element with 'aTest'
}