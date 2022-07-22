let challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, 21))
console.log(challenge.split())
console.log(challenge.split(' '))

let names = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(names.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(names.charAt(15))
console.log(names.charCodeAt('J'))

let example = "You cannot end a sentence with because because because is a conjunction"

console.log(example.indexOf('because')) 
console.log(example.lastIndexOf('because'))
console.log(example.search('because'))
console.log(challenge.trim(' '))
console.log(challenge.startsWith("30 Days Of JavaScript"))
console.log(challenge.endsWith("30 Days Of JavaScript"))
console.log(challenge.match('a'))

let word = '30'

console.log(word.concat("Days ", "Of ", "JavaScript "))
console.log(challenge.repeat(2)) 