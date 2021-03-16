function countdown(){
    var seconds = document.getElementById("seconds").value; //get value from input "seconds"

    function tick(){
        seconds = seconds - 1; //take 1 off the value of 'second'
        timer.innerHTML = seconds;
        setTimeout (tick, 1000); //pausing for 1,000 milliseconds (i.e., 1 second).
    if(seconds == -1){
        alert("Time's up");
    }
        }
    tick(); //calls subprogram/function tick
}

//manual
var slideIndex = 1;
    showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
