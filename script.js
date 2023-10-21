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
}
setInterval(currentTime, 1000);


// console.log(date.getFullYear());

/* switch (numberMonth) {
    case 0:
        numberMonth = 'January';
        break;
    case 1:
        numberMonth = 'February';
        break;
    case 2:
        numberMonth = 'March';
        break;
    case 3:
        numberMonth = 'April';
        break;
    case 4:
        numberMonth = 'May';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
    case 0:
        numberMonth = 'January';
        break;
}       */