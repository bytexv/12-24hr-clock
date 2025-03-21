function clock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

}
updateClock();
setInterval(updateClock, 1000);
let clock = document.getElementById('clock');
clock.innerHTML = hours + ":" + minutes + ":" + seconds;
function tclock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    let tclock = document.getElementById('tclock');
    tclock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + ampm;

}
updateClock();
setInterval(updateClock, 1000);
