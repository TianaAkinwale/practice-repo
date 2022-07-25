/*1. Write a script that prompt the user to enter base and height of the 
triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```*/

let base = prompt('Enter base', 'base goes here')
let height = prompt('Enter height', 'height goes here')
const area = (0.5 * base * height)
console.log(area)

/*2. Write a script that prompt the user to enter side a, side b, and
 side c of the triangle and and calculate the perimeter of triangle
 (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```*/

let a = prompt('Enter Side A')
let b = prompt('Enter side B')
let c = prompt('Enter side C')
const perimeter = (a + b + c)
console.log(perimeter)

/*3. Get length and width using prompt and calculate an area of rectangle (area =
length x width and the perimeter of rectangle (perimeter = 2 x (length + width))*/

let length = prompt('Enter length')
let width = prompt('Enter width')
const perimeter2 = (2 * (length * width))
console.log(perimeter2)

/*4. Get radius using prompt and calculate the area of a circle (area = pi x r x r)
and circumference of a circle(c = 2 x pi x r) where pi = 3.14.*/

const PI = 3.14
let radius = prompt('Enter radius')
const areaOfC = (2 * (PI * radius))
console.log(areaOfC)

/*5. Calculate the slope, x-intercept and y-intercept of y = 2x -2*/
/*6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>).
Find the slope between point (2, 2) and point(6,10)*/
/*7. Compare the slope of above two questions.*/
/*8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different
x values and figure out at what x value y is 0.*/


/*9. Write a script that prompt a user to enter hours and rate per hour.
Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```*/

let hours = prompt('Enter hours')
let rate = prompt('Enter rate per hour')
const earning = (rate * hours)
console.log(earning)

/*10. If the length of your name is greater than 7 say, 
your name is long else say your name is short.*/

let names = prompt('Enter Name')
if (names > 7) 
{
    console.log('your name is long')
} else 
{
    console.log("your name is short")
}

/*11. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```*/

let myName = 'Tiana'
let mySurname = 'Norway'
if (myName > mySurname) 
{
    console.log(`Your first name, ${myName} is longer than your family name, ${mySurname}`)
} else 
{
    console.log(`Your first name, ${mySurname} is longer than your family name, ${myName}`)
}
    
/*12. Declare two variables _myAge_ and _yourAge_ and assign them initial 
values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```*/

let _myAge_ = 19
let _yourAge_ = 223
const ageDiff = (_yourAge_ - _myAge_)
console.log(`I am ${ageDiff} years older than you`)

/*13. Using prompt get the year the user was born and if the user is 18 or above 
allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```*/

let yearBorn = prompt('Enter year of birth', 'Example: 2001')
const time2 = new Date()
const time3 = time2.getFullYear()
let cond1 = (time3 - yearBorn)
let cond2 = (cond1 - 18)
if (cond1 >= 18) 
{
    console.log(`You are ${cond1}. You are old enough to drive`)
} else 
{
    console.log(`You are ${cond1}. You will be allowed to drive after ${cond2} years.`)
}

/*14. Write a script that prompt the user to enter number of years.
Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```*/

let numofYears = prompt('Enter number of years')
const numo = new Date()
let num = numo.getMilliseconds()

/*15. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm*/

const dateFormat = new Date();
dateYear = dateFormat.getFullYear();
dateMonth = dateFormat.getMonth()
dateDay = dateFormat.getDay()
dateHour = dateFormat.getHours()
dateMin = dateFormat.getMinutes()
console.log(`${dateYear}-${dateMonth}-${dateDay} ${dateHour}-${dateMin}`)