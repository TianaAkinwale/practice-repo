let time = document.getElementById('time');
setInterval(() => {
    let localTime = new Date();
    time.innerHTML = localTime.toLocaleTimeString();
}, 1000)