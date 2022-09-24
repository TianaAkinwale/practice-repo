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

const timesOutput = document.querySelectorAll('.times h4');
let expired = document.getElementById('expired-text');
let userYear = document.getElementById('userYear');
let userMonth = document.getElementById('userMonth');
let userDate = document.getElementById('userDate');
let userHour = document.getElementById('userHour');
let userMin = document.getElementById('userMin');
const userDeadlineOutput = document.getElementById('userDeadline');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

let countDate;

start.addEventListener('click', (rest) => {
  rest.preventDefault()
  let uYear = userYear.value
  let uDate = userDate.value;
  let uMon = userMonth.value;
  let uHour = userHour.value;
  let uMin = userMin.value;

  countDate = new Date(
    uYear, uMon - 1, uDate, uHour, uMin, 0
  );
  
  let year = countDate.getFullYear();
  let month = countDate.getMonth();
  month = months[month];
  let weekDay = countDate.getDay();
  weekDay = weekdays[weekDay];
  let date = countDate.getDate();
  let hour = countDate.getHours();
  let min = countDate.getMinutes();

  userDeadlineOutput.innerHTML= `${weekDay}, ${date} 
  ${month} ${year} ${hour} : ${min}`;


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
    //clearInterval(countdown);
    userDeadlineOutput.textContent = 'REFRESH PAGE'
    timesOutput.forEach((time) => {
      time.textContent = `00`;
     });
    expired.textContent = `This timer has expired.`;
  }; 
}

 //countdown
 setInterval(getTimeLeft, 1000);
 getTimeLeft();
}).preventDefault();

/*reset.addEventListener('click', () => {
  userDeadlineOutput.innerHTML = ''
  timesOutput.forEach((time) => {
    time.innerHTML = '';
  });
  expired.innerHTML = '';
})*/