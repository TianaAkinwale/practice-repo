/*1. 'Love is the best thing in this world.
 Some found their love and some are still looking for their love.' Count the number of word love in this sentence. */
let help = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(help.match('love'))

/*2. Use match() to count the number of all because in the following sentence:'You 
cannot end a sentence with because because because is a conjunction' */
let string = "You cannot end a sentence with because because because is a conjunction"
console.log(string.match('because'))

/*4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000
 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */
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
  console.log(sum)
