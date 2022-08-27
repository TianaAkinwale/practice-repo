/*1. Change skills array to JSON using JSON.stringify()
1. Stringify the age variable
1. Stringify the isMarried variable
1. Stringify the student object*/

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


const text = JSON.stringify(skills, undefined, 5)
console.log(text);
console.log(skills);

const text2 = JSON.stringify(age, undefined, undefined)
console.log(text2);
console.log(age);

const text3 = JSON.stringify(isMarried, undefined, undefined)
console.log(text3);
console.log(isMarried);

const text4 = JSON.stringify(student, undefined, 5)
console.log(text4);
console.log(student);
