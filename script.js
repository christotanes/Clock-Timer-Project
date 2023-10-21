console.log("Hello World!");

function currentTime() {
    const currentDate = new Date();

    // Make months have names
    const numberMonth = currentDate.getMonth();
    monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const namedMonth = monthArray[numberMonth];

    const correctFullDate = `${namedMonth} ${currentDate.getDate()}, ${currentDate.getFullYear()}`

    let date    = document.querySelector('.date');
    let hours   = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    
    date.innerHTML = correctFullDate; 
    hours.innerHTML = currentDate.getHours();
    minutes.innerHTML = currentDate.getMinutes();
    seconds.innerHTML = currentDate.getSeconds();

// Background will change upon certain times of day.
    const hour = currentDate.getHours();
    const bodySelector = document.querySelector('body');

    if (hour === 5 || hour === 6 || hour === 7 || hour === 8 || hour === 9 ) {
        bodySelector.style.backgroundImage = "url('./images/sunrise.jpg')";
        bodySelector.style.color = "black";
    }
    else if (hour === 10 || hour === 11 || hour === 12 || hour === 13 || hour === 14 ) {
        bodySelector.style.backgroundImage = "url('./images/noon.jpg')";
        bodySelector.style.color = "brown";
    } else if (hour === 15 || hour === 16 || hour === 17 || hour === 18 || hour === 19) {
        bodySelector.style.backgroundImage = "url('./images/sunset.jpg')";
        bodySelector.style.color = "#17B5E6";
    } else {
        bodySelector.style.backgroundImage = "url('./images/nightsky.jpg')";
        bodySelector.style.color = "white";
    }
    
    console.log(currentDate.getTime());
}

setInterval(currentTime, 1000);

document.querySelector('.clock-animate').addEventListener('click', function(){
    document.querySelector('.set-alarm').style.display = "flex";  
});



// function setAlarm(hour, minute) {
//     let alarmHour = hour
//     let alarmMinute = minute

//     const timeMinute = 1000 * 60;
//     const timeHour = minute * 60;
//     document.querySelector('.alarm-shown').style.display = "none";
//     document.querySelector('.set-alarm').style.display = "none";
//     document.querySelector('.countdown').style.display = "flex";
// }
