/*1. Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and 
lifting people up.' by John Holmes teaches us to help one another. */
console.log(`The quote \'There is no exercise better for the heart 
than reaching down and lifting people up.\' 
by John Holmes teaches us to help one another.`)

/*2. Using console.log() print out the following quote by Mother Teresa:

"Love is not patronizing and charity isn't about pity, it is about love. 
Charity and love are the same -- with charity you give love, so don't just give
 money but reach out your hand instead." */
console.log(`\"Love is not patronizing and charity isn't about pity, it is 
about love. Charity and love are the same -- with charity you give love, so 
don't just give money but reach out your hand instead.\"`)

/*3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.*/
console.log(typeof parseInt('10') === typeof 10)

/*4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. */
console.log(typeof Math.ceil(parseInt('9.8')) === typeof 10)

/*5. Check if 'on' is found in both python and jargon */
let check = 'python jargon'
console.log(check.search('on'))

/*6. I hope this course is not full of jargon. Check if jargon is in the sentence. */
let check2 = "I hope this course is not full of jargon"
console.log(check2.search('jargon'))

/*7. Generate a random number between 0 and 100 inclusively. */
let num = Math.floor(Math.random () * 101) // creates random number between 0 and 100
console.log(num)

/*8. Generate a random number between 50 and 100 inclusively. */
let num2 = Math.floor(Math.random () * 256) // creates random number between 0 and 255
console.log(num2)

/*9. Generate a random number between 0 and 255 inclusively. */
//var number = Math.floor(Math.random() * (max - min) + min);
let num3 = Math.floor(Math.random () * (100 - 50) + 50)
console.log(num3)


console.log(`1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125`)

/**12. Use substr to slice out the phrase because because because from the following 
 * sentence:'You cannot end a sentence with because because because is a conjunction' */
let word = "You cannot end a sentence with because because because is a conjunction"
console.log(word.substr(31, 23))