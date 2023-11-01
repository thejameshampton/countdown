const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const endTime = Date.parse('11/1/2023 15:49 EDT');
let difference;

let currentTime = Date.now();
let msDifference = endTime - currentTime;
let sDifference = Math.round(msDifference / 1000);
let seconds = sDifference % 60;
let minutes = Math.floor(sDifference/60);
if(Math.sign(minutes) === -1) {
    secondsElement.innerText = '00';
    minutesElement.innerText = 0;
} else {
    secondsElement.innerText = seconds;
    minutesElement.innerText = minutes;
}

function setTimer() {
    if(seconds > 0) seconds--;
    else {
        minutes--;
        seconds = 60;
    }
    if(minutes < 0 ||(minutes === 0 && seconds <= 0)) {
        secondsElement.innerText = '00';
        minutesElement.innerText = 0;
        clearInterval(countdownInterval);
    } else {
        if(seconds < 10) secondsElement.innerText = `0${seconds}`;
        else secondsElement.innerText = seconds;
        
        minutesElement.innerText = minutes;
    }
}

const countdownInterval = setInterval(setTimer, 1000);