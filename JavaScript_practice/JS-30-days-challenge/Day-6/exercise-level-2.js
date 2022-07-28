/*1. Develop a small script which generate any number of characters random id:

    ```sh
      fe3jo1gl124g
    ```

    ```sh
      xkqci4utda1lmbelpkm03rba
    ```*/

let result           = '';
let num = 7//prompt('Enter number of random characters to be generated')
let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;
for ( let y = 0; y < num; y++ ) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
  console.log(result);

/*1. Write a script which generates a random hexadecimal number.

    ```sh
    '#ee33df'
    ```*/
//#Source https://bit.ly/2neWfJ2
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

/*1. Write a script which generates a random rgb color number.

    ```sh
    rgb(240,180,80)
    ```*/
/*function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

for (var i = 0; i < 10; i++) {
  console.log(getRandomRgb());
}*/

/*1. Using the above countries array, create the following new array.
    ```sh
    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
    ```*/
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
  //1first way to solve:
  let uppcase = []
  countries.forEach(element => {
    uppcase.push(element.toUpperCase());
  });
  console.log(uppcase)

//second way to solve this:
const up = countries.map(countries => countries.toUpperCase())
console.log(up)

/*1. Using the above countries array, create an array for countries length'.

    ```sh
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
    ```*/

const arre = [countries[0].length, countries[1].length, countries[2].length,
countries[3].length, countries[4].length, countries[5].length, countries[6].length, 
countries[7].length, countries[8].length, countries[9].length, countries[10].length]
console.log(arre)

//using loop
const arlength = []
for (i = 0; i < countries.length; i++)
{
  arlength.push(countries[i].length)
}
console.log(arlength)
/*1. Use the countries array to create the following array of arrays:

    ```sh
      [
      ['Albania', 'ALB', 7],
      ['Bolivia', 'BOL', 7],
      ['Canada', 'CAN', 6],
      ['Denmark', 'DEN', 7],
      ['Ethiopia', 'ETH', 8],
      ['Finland', 'FIN', 7],
      ['Germany', 'GER', 7],
      ['Hungary', 'HUN', 7],
      ['Ireland', 'IRE', 7],
      ['Iceland', 'ICE', 7],
      ['Japan', 'JAP', 5],
      ['Kenya', 'KEN', 5]
    ]
    ```*/

/*2. In above countries array, check if there is a country or countries containing 
the word 'land'. If there are countries containing 'land', print it as array.
 If there is no country containing the word 'land', print 'All these countries are without land'.

    ```sh
    ['Finland','Ireland', 'Iceland']
    ```*/
const countryWith = []
for (let i = 0; i < countries.length; i++)
{
  if (countries[i].includes('land') === true) 
  {
    countryWith.push(countries[i]);
  }
}
console.log(countryWith)
/*3. In above countries array, check if a country or countries end with a substring 'ia'. 
If there are countries that end with, print it as array. If there is no country containing the word 'ai',
 print 'These are countries ends without ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```*/
const ia = []
for (let i = 0; i < countries.length; i++)
{
  if (countries[i].endsWith('ia') == true)
  {
    ia.push(countries[i])
  }
}
console.log(ia)

/*4. Using the above countries array, find the country containing the biggest number of characters.

      ```sh
      Ethiopia
      ```*/
let long = 0, length
for (let i = 0; i < countries.length; i++)
{
  if (countries[i].length > long)
  {
    long = countries[i].length
    length = countries[i]
  }
}
console.log(length)
/*5. Using the above countries array, find the country containing only 5 characters.

    ```sh
    ['Japan', 'Kenya']
    ```*/
  let contain = []
for (let i = 0; i < countries.length; i++)
{
  if (countries[i].length <= 5)
  contain.push(countries[i])
}
console.log(contain)

/*6. Find the longest word in the webTechs array*/
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let weblent = 0, lenh
for (let i = 0; i < webTechs.length; i++)
{
  if (webTechs[i].length > weblent)
  {
    weblent = webTechs[i].length
    lenh = webTechs[i]
  }
}
console.log(lenh)

/*7. Use the webTechs array to create the following array of arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```*/

/*8. An application created using MongoDB, Express, React and Node is called a MERN stack 
app. Create the acronym MERN by using the array mernStack*/
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

let acronym = ''
for (let i = 0; i < mernStack.length; i++)
{
  acronym += mernStack[i].substring(0,1)
}
console.log(acronym)

for (const tech of mernStack) {
  console.log(tech[0])
}
/*9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
 "Express", "MongoDB"] using a for loop or for of loop and print out the items.*/

const newArr = ["HTML", "CSS", "JS", "React", "Redux", "Node",
"Express", "MongoDB"]
 for (const tech of newArr) {
  console.log(tech)
}

/*10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the
 order using loop without using a reverse method.*/
/*const fruit = ['banana', 'orange', 'mango', 'lemon']
for (let i = fruit.length; i > 0; i++)
{
  console.log(fruit)
}
/*11. Print all the elements of array as shown below.
    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ```
    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```*/
/*const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for (const tech of fullStack) {
      console.log(tech[0].toUpperCase())
    } can use loop to print through all as it only prints HTML, NODE*/