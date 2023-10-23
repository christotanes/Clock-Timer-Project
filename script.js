let alarm = [];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date    = document.querySelector('.date');
const hours   = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const bodySelector = document.querySelector('body');

// User sets alarm
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    
    // user sets hour and minutes
    let alarmHour = Number(document.getElementById('alarm-hours').value);
    let alarmMinute = Number(document.getElementById('alarm-minutes').value);
    let alarmSeconds= 0;

    document.querySelector('.alarm-shown').style.display = "none";
    document.querySelector('.set-alarm').style.display = "none";
    document.querySelector('.countdown').style.display = "flex";

    alarm.push(alarmHour, alarmMinute, alarmSeconds);
});

function currentTime() {
    const currentDate = new Date();
    // console.log(currentDate.getTime());
    // Make months have names
    let namedMonth = monthArray[currentDate.getMonth()];
    let namedDay = dayArray[currentDate.getDay()];
    let hour = currentDate.getHours();

    const correctFullDate = `${namedDay}, ${namedMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`

    let notMilitaryHour = (Math.round(hour % 12) || 12 );
    
    let ampm = hour >= 12 ? "PM" : "AM";
    
    date.textContent = correctFullDate; 
    hours.textContent = addZero(notMilitaryHour);
    minutes.textContent = addZero(currentDate.getMinutes());
    seconds.textContent = addZero(currentDate.getSeconds());
    document.querySelector('.ampm').textContent = ampm;

    // Add zero to single digits
    function addZero(time) {
        time = time.toString();
        return time < 2 ? "0" + time : time;        
    };

// Background will change upon certain times of day.
    if (hour >= 5 && hour <= 9 ) {
        bodySelector.style.backgroundImage = "url('./images/sunrise.jpg')";
        bodySelector.style.color = "black";
    } else if (hour >= 10 && hour <= 14 ) {
        bodySelector.style.backgroundImage = "url('./images/noon.jpg')";
        bodySelector.style.color = "brown";
    } else if (hour >= 15 && hour <= 18) {
        bodySelector.style.backgroundImage = "url('./images/sunset.jpg')";
        bodySelector.style.color = "#17B5E6";
    } else if (hour >= 19 && hour <= 23 ) {
        bodySelector.style.backgroundImage = "url('./images/nightsky.jpg')";
        bodySelector.style.color = "white";
    } else {
        bodySelector.style.backgroundImage = "url('./images/auroranight.jpg')";
        bodySelector.style.color = "white";
    };

    // sets today's date.. later to be modifiable
    let nowDate = currentDate.toDateString();

    if (alarm[0] === 0){
        alarm.shift();
        alarm.unshift(Number(hour));
    };

    //concatenates the date + hour alarm
    const alarmDate = `${nowDate} ${alarm[0]}:${alarm[1]}:${alarm[2]}`
    const alarmTime = new Date(alarmDate).getTime(); // alarm now in computer terms
    const nowTime = currentDate.getTime(); // computer terms
    // alarmTime > nowTime or NOW so subtract
    const countdownTime = (alarmTime - nowTime);

    function alarmCountdown(countdownTime) {
        let countdownHours = Math.floor((countdownTime % (1000*60*60*24)) / (1000*60*60));
        let countdownMinutes = Math.floor((countdownTime % (1000*60*60)) / (1000*60));
        let countdownSeconds = Math.floor((countdownTime % (1000*60)) / 1000) + 1;

        // Set values to html
        document.querySelector('.cdHours').textContent = countdownHours;
        document.querySelector('.cdMinutes').textContent = countdownMinutes;
        document.querySelector('.cdSeconds').textContent = countdownSeconds;  
    };

    if (countdownTime > 0) {
        alarmCountdown(countdownTime);
    } else if (countdownTime < 0) {
        // clearInterval(myInterval);
        audio = new Audio("./sounds/alarmbuzzer.wav");
        audio.play();
        document.querySelector('.alarm-shown').style.display = "flex";
        document.querySelector('.countdown').style.display = "none";
        alarm = [];
    };
};

setInterval(currentTime, 1000);

document.querySelector('.clock-animate').addEventListener('click', function(){
    document.querySelector('.set-alarm').style.display = "flex";  
});