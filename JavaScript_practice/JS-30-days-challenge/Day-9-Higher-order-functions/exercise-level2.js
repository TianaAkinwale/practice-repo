//project inspo!
//this is a project inspo that lets user search for words in a given array
  // and return an array that includes the words the user wants
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
/*1. Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback))*/
const total = products.map(price => price.price).reduce((acc, cur) => acc + cur)
console.log(total)
//const sum = numbers.reduce((acc, cur) => acc + cur, 0)

/*1. Find the sum of price of products using only reduce reduce(callback))*/
//const sumRed = products.reduce((acc, cur) => acc + cur)
//console.log(sumRed) //chain reduce with another iterator to get result.
/*1. Declare a function called **_categorizeCountries_** which returns an array
 of countries which have some common pattern(you find the countries 
array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] //this is a project inspo that lets user search for words in a given array
  // and return an array that includes the words the user wants
function categorizeCountries(text) {
    const catCont = countries.filter(country => country.includes(text));
    return catCont;
}
console.log(categorizeCountries('ia'))
/*1. Create a function which return an array of objects, which is the letter 
and the number of times the letter is used to start the name of a country.*/
function howManyTimes() {
    //let sub = 0;
    const howMany = countries.filter((country) =>
    country.substring(0, 1).includes('E'))//.forEach(country =>
        //sub = sub + country.substring(0, 1).includes('E'));
        //console.log(sub)
    return howMany;
}
/*const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts) useful*/ 
console.log(howManyTimes())
/*1. Declare a **_getFirstTenCountries_** function and return an array of ten 
countries. Use different functional programming to work on the countries.
js array*/
/*1. Declare a **_getLastTenCountries_** function which which returns the 
last ten countries in the countries array.*/
/*1. Find out which _letter_ is used many _times_ as initial for a country 
name from the countries array (eg. Finland, Fiji, France etc)*/