/*1. Get user input using prompt(“Enter your age:”). If user is 18 or older,
give feedback:'You are old enough to drive' but if not 18 give another 
feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/

let userAge = prompt('Enter your age')
let cond3 = (18 - userAge)
if (userAge >= 18) 
{
    console.log(`You are old enough to drive`)
} else 
{
    console.log(`You are left with ${cond3} years to drive.`)
}

/*2. Compare the values of myAge and yourAge using if … else. Based on the 
comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.*/

let YourAge = prompt("Enter your age")
const MyAge = 19
let older = YourAge - MyAge
let younger = MyAge - YourAge
if (MyAge < YourAge) 
{
  console.log(`You are ${older} years older than me`)
} else if (MyAge > YourAge)
{
  console.log(`You are ${younger} years younger than I am`)
} else
{
  console.log('We are of same age')
}

/*3. If a is greater than b return 'a is greater than b' else 'a is 
less than b'. Try to implement it in two ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3*/

const a = 4;
const b = 3;
if (a > b)
{
  return `${a} is greater than ${b}`;
} else 
{
  return `${b} is greater than ${a}`;
}

//using tenary operator

/*4. Even numbers are divisible by 2 and the remainder is zero. How do you 
check, if a number is even or not using JavaScript?
Enter a number: 2
2 is an even number
Enter a number: 9
9 is is an odd number.*/
let num11 = prompt('Enter a number: ')
let num0 = num11 % 2
if (num0 = 0) {
  console.log(`${num11} is an even number`)
} else {
  console.log(`${num11} is an odd number`)
}