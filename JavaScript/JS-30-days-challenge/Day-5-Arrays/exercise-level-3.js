/*1. The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use _abs()_ method*/

/*2.Slice the first ten countries from the 
[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)*/

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
  ]
const sli = countries.slice(0, 10)
console.log(sli)

/*3. Find the middle country(ies) in the 
[countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)*/
const mid = countries.slice(5, 6)
console.log(mid)

/*4. Divide the countries array into two equal arrays if it is even.  If 
countries array is not even, one more country for the first half.*/
const arr1 = countries.slice(0, 6)
const arr2 = countries.slice(6, 11)
console.log(arr1, arr2)