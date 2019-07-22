var noon = 12;
var evening = 18;


var showCurrentTime = function () {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian ="AM";
    
    if (hours >= noon ) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours =hours -12;
    }
    
    var clockTime = hours + ':' + minutes;
    
    document.getElementById('clock').innerText = clockTime;
}

 function showGreet () {
    var time = new Date().getHours();
    var greetings;
    var name = "Roland";

    if (time < noon) {
        greetings = "Good Morning";
    }

    if (time>=evening) {
        greetings = "Good Evening";
    } else {
        greetings = "Good Afternoon"
    }

    document.getElementById('greeting').innerHTML = greetings + ', ' +  name + '!';
 }

 showGreet();
var oneSecond =1000;
setInterval(showCurrentTime, oneSecond);

showCurrentTime();