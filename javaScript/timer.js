var countDownDate = new Date("Feb 10, 2018 00:00:00").getTime();

var day=document.getElementById('day');
var hour=document.getElementById('hour');
var min=document.getElementById('min');
var sec=document.getElementById('sec');

var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML=days+"<br>days ";
    hour.innerHTML=hours+"<br>hrs";
    min.innerHTML=minutes+"<br>min";
    sec.innerHTML=seconds+"<br>sec";

    if (distance < 0) {
        clearInterval(x);
        day.innerHTML="00";
        hour.innerHTML="00";
        min.innerHTML="00";
        sec.innerHTML="00";
    }
}, 1000);