/*1. Linear equation is calculated as follows: _ax + by + c = 0_. Write a function
 which calculates value of a linear equation, _solveLinEquation_.*/
/*1. Quadratic equation is calculated as follows: _ax2 + bx + c = 0_. Write a 
function which calculates value or values of a quadratic equation, _solveQuadEquation_.

    ```js
    console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}
    ```*/

/*1. Declare a function name _printArray_. It takes array as a parameter and 
it prints out each value of the array.*/

function _printArray_ (array) {
 for (const eachValue of array) {
  console.log(eachValue)
}
}
const anc = [54, 34, 5]
console.log(_printArray_(anc))

/*1. Write a function name _showDateTime_ which shows time in this format:
 08/01/2020 04:08 using the Date object.

    ```sh
    showDateTime()
    08/01/2020 04:08
    ```*/
function showDateTime(params) {
    const dateFormat = new Date();
    let dateYear = dateFormat.getFullYear();
    let dateMonth = dateFormat.getMonth()
    let dateDay = dateFormat.getDay()
    let dateHour = dateFormat.getHours()
    let dateMin = dateFormat.getMinutes()

    console.log(`${dateDay}/${dateMonth}/${dateYear} ${dateHour}:${dateMin}`)
}
showDateTime()

/*1. Declare a function name _swapValues_. This function swaps value of x to y.

    ```js
    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
    ```*/

/*1. Declare a function name _reverseArray_. It takes array as a parameter and 
it returns the reverse of the array (don't use method).

    ```js
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
    ```*/

/*1. Declare a function name _capitalizeArray_. It takes array as a parameter
 and it returns the - capitalizedarray.*/
 function _capitalizeArray_(array) {
    let uppcase = []
  array.forEach(element => {
    uppcase.push(element.toUpperCase());
  });
  console.log(uppcase)
 }
 const man = ['fire', 'hent']
 _capitalizeArray_(man)

/*1. Declare a function name _addItem_. It takes an item parameter and it 
returns an array after adding the item*/
function _addItem_(item) {
    let arr = [];
    arr.push(item)
    return arr;
}
console.log(_addItem_(55));
/*1. Declare a function name _removeItem_. It takes an index parameter and 
it returns an array after removing an item*/
/*function _removeItem_(index) {
    
}
/*1. Declare a function name _sumOfNumbers_. It takes a number parameter and 
it adds all the numbers in that range.*/
function _sumOfNumbers_(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(_sumOfNumbers_(15))

/*1. Declare a function name _sumOfOdds_. It takes a number parameter and
 it adds all the odd numbers in that - range.*/

function _sumOfOdds_(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(_sumOfOdds_(5))

/*1. Declare a function name _sumOfEven_. It takes a number parameter and 
it adds all the even numbers in that - range.*/
function _sumOfEven_(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(_sumOfEven_(5))

/*1. Declare a function name evensAndOdds . It takes a positive integer as
 parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```*/
/*function evensAndOdds(pinteger) {
    let numOdds = 0;
    let numEvens = 0;
    for (let i = 1; i < pinteger; i++) {
        if (i % 2 != 0) {
            numOdds = i;
        }
    }
    return sum;
}
console.log(_sumOfOdds_(5))
/*1. Write a function which takes any number of arguments and return the 
sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```*/

/*1. Writ a function which generates a _randomUserIp_.*/
/*1. Write a function which generates a _randomMacAddress_*/
/*1. Declare a function name _randomHexaNumberGenerator_. When this function is called it
 generates a random hexadecimal number. The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```*/
function randomHexaNumberGenerator() {
    let num = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + num.slice(0, 6);
}
console.log(randomHexaNumberGenerator());

/*1. Declare a function name _userIdGenerator_. When this function is called it 
generates seven character id. The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```*/
function userIdGenerator() {
    let userId = '';
    let num = 7 //prompt('Enter number of random characters to be generated')
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
    userId += characters.charAt(Math.floor(Math.random() * charactersLength));
}
  return userId;
}
console.log(userIdGenerator());