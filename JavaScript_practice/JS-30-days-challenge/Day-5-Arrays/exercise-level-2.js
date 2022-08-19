//import * as chooseName from './countries'

//chooseName.countries; // You can now access the array

/*2. First remove all the punctuations and change the string to array and 
count the number of words in the array

    ```js
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ```

    ```sh
    ["I", "love", "teaching", "and", "empowering", "people", "I", 
    "teach", "HTML", "CSS", "JS", "React", "Python"]
  
    13
    ```*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text2 = (text.replace(/[,.]/g, ""))
console.log(text2.split(' '))

/*3. In the following shopping cart add, remove, edit items

    ```js
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    ```

   - add 'Meat' in the beginning of your shopping cart if it has not been 
   already added
   - add Sugar at the end of you shopping cart if it has not been already added
   - remove 'Honey' if you are allergic to honey
   - modify Tea to 'Green Tea'*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)

/*4. In countries array check if 'Ethiopia' exists in the array if it exists print
 'ETHIOPIA'. If it does not exist add to the countries list.*/

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
const Ethiopia = countries.includes('Ethiopia')
if (Ethiopia) {
    console.log(countries[4].toUpperCase())
} else {
    countries.unshift('Ethiopia')
    console.log(countries)
}

/*5. In the webTechs array check if Sass exists in the array  and if it exists print 
'Sass is a CSS preprocess'. If it does not exist add Sass to the array and 
print the array.*/

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
const Sass = webTechs.includes('Sass')
if (Sass) {
    console.log('Sass is a CSS preprocess')
} else {
    webTechs.unshift('Sass')
    console.log(webTechs)
}

/*6. Concatenate the following two variables and store it in a fullStack variable.

    ```js
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
  
    console.log(fullStack)
    ```

    ```sh
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    ```*/

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = (frontEnd.concat(backEnd))
console.log(fullStack)
