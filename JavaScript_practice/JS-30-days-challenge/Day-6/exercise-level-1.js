/*```js
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

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```*/

/*1. Iterate 0 to 10 using for loop, do the same using while and do while loop*/
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let i = 0
do {
  console.log(i)
  i++
} while (i <= 10)

/*2. Iterate 10 to 0 using for loop, do the same using while and do while loop*/
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let b = 10
do {
  console.log(b)
  b--
} while (b >= 0)

/*3. Iterate 0 to n using for loop*/
let n = 3//prompt('Enter a number')
for (let c = 0; c <= n; c++) {
    console.log(c)
}

/*4. Write a loop that makes the following pattern using console.log():/*

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```*/

//for (let rows = 0; rows <= 7; rows++) {
 //   for (let columns = '#'; columns <= 7; columns--) {
   //     console.log(columns)
    //}
//}


/*5. Use loop to print the following pattern:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```*/

//for (let i = 0; )

/*6. Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```*/

/*7. Use for loop to iterate from 0 to 100 and print only even numbers*/
/*8. Use for loop to iterate from 0 to 100 and print only odd numbers*/
/*9. Use for loop to iterate from 0 to 100 and print only prime numbers*/
/*10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```*/

/*11. Use for loop to iterate from 0 to 100 and print the 
sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the 
    sum of all odds from 0 to 100 is 2500.
    ```*/

/*12. Use for loop to iterate from 0 to 100 and print the sum of all evens
 and the sum of all odds. Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
    ```*/

/*13. Develop a small script which generate array of 5 random numbers*/
/*14. Develop a small script which generate array of 5 random numbers 
and the numbers must be unique*/
/*15. Develop a small script which generate a six characters random id:

    ```sh
    5j2khz
    ```*/