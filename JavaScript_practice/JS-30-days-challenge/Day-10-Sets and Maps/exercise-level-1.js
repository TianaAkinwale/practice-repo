const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

/*1. create an empty set*/
let empSet = new Set();
/*2. Create a set containing 0 to 10 using loop*/
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of nums) {
    empSet.add(num);
}
console.log(empSet);
/*3. Remove an element from a set*/
console.log(empSet.delete(3));
console.log(empSet.size) //10
/*4. Clear a set*/
empSet.clear();
console.log(empSet);
/*5. Create a map of countries and number of characters of a country*/
let neMap = new Map();
neMap = countries;
console.log(neMap);
neMap.map(country => console.log(country.length))