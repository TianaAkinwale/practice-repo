/*1. Create a human readable time format using the Date time object.
The hour and the minute should be all the time two 
digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05*/

const dateFormat = new Date();
dateYear = dateFormat.getFullYear();
dateMonth = dateFormat.getMonth()
dateDay = dateFormat.getDay()
dateHour = dateFormat.getHours()
dateMin = dateFormat.getMinutes()
console.log(`${dateYear}-${dateMonth}-${dateDay} ${dateHour}-0${dateMin}`)