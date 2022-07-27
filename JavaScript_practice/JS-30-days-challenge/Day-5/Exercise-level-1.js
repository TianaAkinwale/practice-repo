/*1. Declare an _empty_ array;*/
const arr = Array()
let ar = new Array()

/*2. Declare an array with more than 5 number of elements*/
const ele = [1, '45', 'letters', 'big', 0.77, 299, 'infant']

/*3. Find the length of your array*/
console.log(ele.length)

/*4. Get the first item, the middle item and the last item of the array*/
console.log(ele[0], ele[3], ele[ele.length - 1])

/*5. Declare an array called _mixedDataTypes_, put different data types in
 the array and find the length of the array. The array size should  be greater than 5*/
const _mixedDataTypes_ = [1, '45', 'letters', 'big', 0.77, 299, 'infant']
console.log(_mixedDataTypes_.length)

/*6. Declare an array variable name itCompanies and assign initial values
 Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon*/
 const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

/*7. Print the array using _console.log()_*/
console.log(itCompanies)

/*8. Print the number of companies in the array*/
console.log(itCompanies.length)

/*9. Print the first company, middle and last company*/
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1])

/*10. Print out each company*/
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3],
     itCompanies[4], itCompanies[5], itCompanies[itCompanies.length - 1])

/*11. Change each company name  to uppercase one by one and print them out*/
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), 
    itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), 
    itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), 
    itCompanies[itCompanies.length - 1].toUpperCase())

/*12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
 IBM,Oracle and Amazon are big IT companies.*/
 console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, 
${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]},
${itCompanies[itCompanies.length - 1]} are big IT companies.`)

/*13. Check if a certain company exists in the itCompanies array. If it exist 
return the company else return a company is _not found_*/
let company = itCompanies.indexOf('IBM')
if(company === -1){
   console.log('A company is _not found_')  
} else {
    console.log('IBM')
}

/*14. Filter out companies which have more than one 'o' without the filter method*/
//let check = itCompanies.find()

/*15. Sort the array using _sort()_ method*/
console.log(itCompanies.sort())

/*16. Reverse the array using _reverse()_ method*/
console.log(itCompanies.reverse())

/*17. Slice out the first 3 companies from the array*/
console.log(itCompanies.slice(0, 2))

/*18. Slice out the last 3 companies from the array*/
console.log(itCompanies.slice(4, 7))

/*19. Slice out the middle IT company or companies from the array*/
console.log(itCompanies.slice(3, 4))

/*20. Remove the first IT company from the array*/
console.log(itCompanies.shift())

/*21. Remove the middle IT company or companies from the array*/
itCompanies.splice(3,1)

/*22. Remove the last IT company from the array*/
console.log(itCompanies.pop())
/*23. Remove all IT companies*/
itCompanies.splice()
