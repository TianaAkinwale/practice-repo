/*1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
2. Print the string on the browser console using console.log()
3. Print the length of the string on the browser console using console.log()
4. Change all the string characters to capital letters using toUpperCase() method
5. Change all the string characters to lowercase letters using toLowerCase() method
6. Cut (slice) out the first word of the string using substr() or substring() method
7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
8. Check if the string contains a word Script using includes() method
9. Split the string into an array using split() method
10. Split the string 30 Days Of JavaScript at the space using split() method */

let challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, 21))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))


/*11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt() */

let names = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(names.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(names.charAt(15))
console.log(names.charCodeAt('J'))

/*15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction' */
let example = "You cannot end a sentence with because because because is a conjunction"
console.log(challenge.indexOf('a')) 
console.log(challenge.lastIndexOf('a'))
console.log(example.search('because'))

/*20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true */
console.log(challenge.trim(' '))
console.log(challenge.startsWith("30 Days Of JavaScript"))
console.log(challenge.endsWith("30 Days Of JavaScript"))
console.log(challenge.match('a'))

/*23. Use match() method to find all the a’s in 30 Days Of JavaScript
24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
25. Use repeat() method to print 30 Days Of JavaScript 2 times. */
let word = '30'
console.log(word.concat("Days ", "Of ", "JavaScript "))
console.log(challenge.repeat(2))