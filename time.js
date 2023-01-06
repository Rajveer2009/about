function digitalClock() {
    const timeHTML = document.getElementById('time-js');

    let d = new Date();
    let hours = d.getHours();
    hours = addZero(hours);
    let minutes = d.getMinutes();
    minutes = addZero(minutes);
    timeHTML.innerHTML = hours + ' : ' + minutes;

}

digitalClock()

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

setInterval(digitalClock, 60000);  
