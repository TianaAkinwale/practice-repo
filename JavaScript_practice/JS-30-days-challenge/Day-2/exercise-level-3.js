let help = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(help.match('love'))

let string = "You cannot end a sentence with because because because is a conjunction"
console.log(string.match('because'))
let word = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
console.log(word.match(/\d+/g))

const now = new Date()
console.log(now.getHours()) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
