//Assignment 48 
function countdown(){
    var seconds = document.getElementById("seconds").value; //get value from input "seconds"

    function tick(){
        seconds = seconds - 1; //has it so seconds takes 1 off the value of 'second' (what ever the use input was)
        timer.innerHTML = seconds; //gets, sets or returns the time, countdown number from seconds?
        setTimeout (tick, 1000); //pausing for 1,000 milliseconds (i.e., 1 second).
    if(seconds == -1){ //if seconds = -1 time is up if not will do loop again taking off a second
        alert("Time's up");
    }
        }
    tick(); //calls subprogram/function 'tick' which takes 1 of each second
}

//manual
var slideIndex = 1; //sets the slideIndex to 1. the 1st picture in slideshow
    showSlides(slideIndex); //to display 1st image

// Next/previous controls
//'plusSlides' subtracts one or  adds one to the slideIndex.
function plusSlides(n) {  //When user clicks either prev or next buttons call 
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) { //When user clicks dot buttons call'currentSlide'
    showSlides(slideIndex = n); //will show image based on 
}

function showSlides(n) { //function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}  //If the slideIndex is higher than the number of elements (slides.length), the slideIndex is set to zero.  
    if (n < 1) {slideIndex = slides.length} //If the slideIndex is less than 1 it is set to number of elements (slides.length).
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";   //(display="none") all elements with the class name "mySlides" won't be shown
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  //displays (display="block") the element with the given slideIndex.
    dots[slideIndex-1].className += " active";
}








