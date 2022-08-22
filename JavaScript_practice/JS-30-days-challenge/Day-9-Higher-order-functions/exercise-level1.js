const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*1. Explain the difference between **_forEach, map, filter, and
 reduce_**.
forEach is a loop method that takes callbacks and is only used for arrays,
but doesn't return an array.
```
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)```
map is a another loop method that iterates and modifies array elements, takes
callback functions with index, elementand array parameter and returns
a new array.
```
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
``
filter method filters out items that fufill conditions and returns an array
```//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)```
reduce takes accumulator and current parameters with initial value and returns
a single value.
```const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)```
*/
/*2. Define a callback function before you use it in forEach, map, filter or
 reduce.
 A function that can be passed as a parameter to other functions.
 */
/*3. Use **_forEach_** to console.log each country in the countries array.*/
countries.forEach(country => {
    console.log(country);
});
/*4. Use **_forEach_** to console.log each name in the names array.*/
names.forEach(name => {
    console.log(name);
});
/*5. Use **_forEach_** to console.log each number in the numbers array.*/
numbers.forEach(number => {
    console.log(number);
});

/*6. Use **_map_** to create a new array by changing each country to 
uppercase in the countries array.*/
const newAr = countries.map(country => country.toUpperCase());
console.log(newAr);

/*7. Use **_map_** to create an array of countries length from countries
 array.*/
const countryLength = countries.map(country => country.length);
console.log(countryLength);
/*8. Use **_map_** to create a new array by changing each number to square
 in the numbers array*/
 const numSqr = numbers.map(number => number * number);
 console.log(numSqr);
/*9. Use **_map_** to change to each name to uppercase in the names array*/
const namesUpp = names.map(name => name.toUpperCase());
console.log(namesUpp);
/*10. Use **_map_** to map the products array to its corresponding prices.*/
const proPrice = products.map(product => product.product + '=' + product.price)
console.log(proPrice)
/*11. Use **_filter_** to filter out countries containing **_land_**.*/
const containsLand = newAr.filter((country) => 
    country.includes('LAND'));
console.log(containsLand);
/*12. Use **_filter_** to filter out countries having six character.*/
const sixChars = countries.filter(country => country.length === 6);
console.log(sixChars);
/*13. Use **_filter_** to filter out countries containing six letters 
and more in the country array.*/
const sixOrMoreChars = countries.filter(country => country.length >= 6);
console.log(sixOrMoreChars);
/*14. Use **_filter_** to filter out country start with 'E';*/
const startE = countries.filter(country =>
     country.substring(0, 1).includes('E'));
console.log(startE);
/*15. Use **_filter_** to filter out only prices with values.*/
const pric = products.filter(cost => cost.price)
console.log(pric)
/*16. Declare a function called getStringLists which takes an array as
 a parameter and then returns an array only with string items.*/
 //function getStringLists(array) {
   // return array.split(' ');
// }
 //console.log(getStringLists(countries))
/*17. Use **_reduce_** to sum all the numbers in the numbers array.*/
/*18. Use **_reduce_** to concatenate all the countries and to produce 
this sentence: **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand
 are north European countries_***/
/*19. Explain the difference between **_some_** and **_every_**
Every checks if the elements are similar in an aspect. It returns boolean
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')
console.log(areAllStr)

some checks if the element are similar in some aspect. Also returns boolean.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
*/
/*20. Use **_some_** to check if some names' length greater than seven 
in names array*/
const lenGreater = names.some((name) => name.length > 7)
console.log(lenGreater)
/*21. Use **_every_** to check if all the countries contain the word land*/
const contLand = countries.every((country) => country.includes('land'))
console.log(contLand)
/*22. Explain the difference between **_find_** and **_findIndex_**.
Find returns the first element which satisfies the condition
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

FindIndex returns position of the first element which satisfies the condition
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
*/

/*23. Use **_find_** to find the first country containing only six 
letters in the countries array*/
const contSix = countries.find(country => country.length === 6)
console.log(contSix)
/*24. Use **_findIndex_** to find the position of the first country 
containing only six letters in the countries array*/
const posContSix = countries.findIndex(country => country.length === 6)
console.log(posContSix)
/*25. Use **_findIndex_** to find the position of **_Norway_** if it 
doesn't exist in the array you will get -1.*/
const posNorway = countries.findIndex(country => country.includes('Norway'))
console.log(posNorway)
/*26. Use _findIndex_ to find the position of _Russia_ if it doesn't
 exist in the array you will get -1.*/
 const posRussia = countries.findIndex(country => country.includes('Russia'))
console.log(posRussia)