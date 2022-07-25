/*1. Declare firstName, lastName, country, city, age, isMarried, year variable
 and assign value to it and use the typeof operator to check different data types.*/

let firstName = 'Tiana'
let lastName = 'Norway'
let country = 'Nigeria'
let city = 'Ogun'
let age = 19
let isMarried = false
let year = 2005

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

/*2. Check if type of '10' is equal to 10*/
console.log(typeof '10' === typeof 10)

/*3. Check if parseInt('9.8') is equal to 10*/
console.log(typeof '9.8' === typeof 10)

/*4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.*/

let ball = 'round'
let leg = true
let fish = 'swim'

let chair = ''
let sofa = 0
let arm = false

/*5. Figure out the result of the following comparison expression first
 without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.*/

let var1 = 'python'
let var2 = 'jargon'

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(var1.length)
console.log(var2.length)
console.log(var1 === var2)

/*6. Figure out the result of the following expressions first without using 
console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python*/

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(var1.search('on'))
console.log(var2.search('on'))

/*7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

const time = new Date()
console.log(time.getFullYear())
console.log(time.getMonth())
console.log(time.getDate())
console.log(time.getDay())
console.log(time.getHours())
console.log(time.getMinutes())
console.log(time.getMilliseconds())