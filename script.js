let interval;
let endTime;
window.onload = () => {
    document.querySelector('.run-timer').addEventListener('click',()=>{
        calculate();
    });
    document.querySelector('.reset-timer').addEventListener('click',()=>{
        reset();
        endTime = new Date();
        UpdateInput();
        document.getElementsByClassName("timesup")[0].classList.remove("show");
    })
    UpdateInput();
}
function UpdateInput(){
    const currentDate = new Date();
    const currentDateFormatted = currentDate.toISOString().slice(0,10);
    console.log(currentDateFormatted);
    const currentTimeFormatted = currentDate.toTimeString().slice(0,8);
    document.querySelector(".date").value = currentDateFormatted;
    document.querySelector(".time").value = currentTimeFormatted;
}
function calculate () {
    const date = document.querySelector(".date").value;
    const time = document.querySelector(".time").value;
    endTime = new Date(date + " " + time);
    // console.log(endTime);    
    interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;
        console.log(timeLeft);
        let daysCalc = Math.floor(timeLeft / (24 * 60 * 60));
        let hoursCalc = Math.floor((timeLeft / (60 * 60)) % 24);
        let minCalc = Math.floor((timeLeft / 60) % 60);
        let secCalc =  Math.floor(timeLeft % 60);
        days.innerText = String(daysCalc).padStart(2, '0');
        hours.innerText = String(hoursCalc).padStart(2, '0');
        minutes.innerText = String(minCalc).padStart(2, '0');
        seconds.innerText = String(secCalc).padStart(2, '0');
    } 
    else {
        console.log("Ring");
        clearInterval(interval);
        days.innerText = "00"
        hours.innerText = "00"
        minutes.innerText = "00"
        seconds.innerText = "00"
        document.getElementsByClassName("timesup")[0].classList.add('show');
        
    }
}

function reset() {
    clearInterval(interval);
    document.querySelector('#countdown-days').innerText = "00";
    document.querySelector('#countdown-hours').innerText = "00";
    document.querySelector('#countdown-minutes').innerText = "00";
    document.querySelector('#countdown-seconds').innerText = "00";
}