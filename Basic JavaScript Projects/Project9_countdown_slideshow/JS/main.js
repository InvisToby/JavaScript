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