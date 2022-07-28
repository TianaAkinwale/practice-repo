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
/*3. In above countries array, check if there is  a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    ```sh
    ['Albania', 'Bolivia','Ethiopia']
    ```*/

/*4. Using the above countries array, find the country containing the biggest number of characters.

      ```sh
      Ethiopia
      ```*/

/*5. Using the above countries array, find the country containing only 5 characters.

    ```sh
    ['Japan', 'Kenya']
    ```*/

/*6. Find the longest word in the webTechs array*/
/*7. Use the webTechs array to create the following array of arrays:

    ```sh
    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
    ```*/

/*8. An application created using MongoDB, Express, React and Node is called a MERN stack 
app. Create the acronym MERN by using the array mernStack*/
/*9. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node",
 "Express", "MongoDB"] using a for loop or for of loop and print out the items.*/
/*10. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the
 order using loop without using a reverse method.*/
/*11. Print all the elements of array as shown below.

    ```js
      const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
      ]
    ````

    ```sh
      HTML
      CSS
      JS
      REACT
      NODE
      EXPRESS
      MONGODB
    ```*/