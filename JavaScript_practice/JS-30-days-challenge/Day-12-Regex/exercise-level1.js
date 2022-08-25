/*1. Calculate the total annual income of the person from the following text.
 ‘.’*/
  const pattern = /\d+/g;
  const text = "He earns 4000 euro from salary per month, 10000 euro annual\
   bonus, 5500 euro online courses per month"
   let matches = text.match(pattern)
   console.log(matches)
   let sum = 0;
   for (let match of matches) {
    match = parseInt(match, 10)
    sum += match;
   }
   console.log(`The total income is ${sum}`)
/*1. The position of some particles on the horizontal x-axis -12, -4, -3 and
 -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.
  Extract these numbers and find the distance between the two furthest particles.*/

/*1. Write a pattern which identify if a string is a valid JavaScript variable

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
    ```*/