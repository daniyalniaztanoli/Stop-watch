var hourHeading = document.getElementById("hour");
var mintHeading = document.getElementById("mint");
var secHeading = document.getElementById("sec");


var hour = 0;
var mint = 0;
var sec = 0;

var interval;

function timer(){
        sec++;
        secHeading.innerHTML = sec;
     if(sec >= 60){
        mint++;
        mintHeading.innerHTML = mint;
        sec = 0;
    }else if(mint >= 60){
        hour++;
        hourHeading.innerHTML = hour;
        mint = 0;
}
}
function start(){
    var start  = document.getElementById("startbtn");
    interval = setInterval(timer,1000);
    start.disabled = true;
}

function pause() {
    var start = document.getElementById("startbtn");
    clearInterval(interval);
    start.disabled = false;
  }

function reset(){
hour = 0;
mint = 0;
sec = 0;

hourHeading.innerHTML = "0 0";
mintHeading.innerHTML = "0 0";
secHeading.innerHTML = "0 0";

pause();

setInterval(interval);
}

