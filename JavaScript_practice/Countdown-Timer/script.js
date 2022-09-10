let clock = document.getElementById('clock');
setInterval(() => {
    
    let localTime = new Date();
    let dateSec = localTime.getSeconds();
    //for (let i = 0; i < dateSec; i++) {
        clock.innerHTML = (dateSec);
   // clock.innerHTML = localTime.toLocaleTimeString();
}, 1000)