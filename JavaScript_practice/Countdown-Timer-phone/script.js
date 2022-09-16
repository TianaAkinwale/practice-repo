let timesOutput = document.querySelectorAll('.times h4');
let expired = document.getElementById('countdown-time');
let userDeadline = document.getElementById('user-deadline');
let userDeadlineOutput = document.getElementById('userDeadline');

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

let time = new Date();
let timeYear = time.getFullYear();
let timeMonth = time.getMonth();
let timeDay = time.getDay();
let timeDate = time.getDate();
//let timeHour = time.getHours();
//let timeMin = time.getMinutes();

//add if statement, if countdown ends in a day let output be tomorrow...
//let laz = userDeadline.value
//userDeadlineOutput.innerHTML= `Countdown ends ${laz} ok`;


const countDate = new Date(timeYear, timeMonth, timeDate + 3, 6, 8, 0);

let year = countDate.getFullYear();
let month = countDate.getMonth();
month = months[month];
let weekDay = countDate.getDay();
weekDay = weekdays[weekDay];
let date = countDate.getDate();
let hour = countDate.getHours();
let min = countDate.getMinutes(); 

//userDeadlineOutput.innerHTML= `Countdown ends ${weekDay}, ${date} ${month} ${year} ${hour}:${min} AM`;

let futureTime = countDate.getTime();
//function

function getTimeLeft() {
  let today = new Date().getTime();
  let t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24h
  
  // values in miliseconds
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;

  //Calculate values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let mins = Math.floor((t % oneHour) / oneMin);
  let secs = Math.floor((t % oneMin) / 1000);

  //store the time values in an array
  const values = [days, hours, mins, secs];
 
  //function to get the correct format
  function format(time){
    if (time < 10){
      return (time = `0${time}`);
    }
    return time;
  };

  //loop through the array
  timesOutput.forEach((time, index) => {
   time.innerHTML = format(values[index]);
  });

  //when countdown ends
  if (t < 0) {
    clearInterval(countdown);
    expired.innerHTML = `This timer has expired`;
  };
}

 //countdown
 let countdown = setInterval(getTimeLeft, 1000);
 getTimeLeft();