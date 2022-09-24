/*1. Create a student object. The student object will have first name,
last name, age, skills, country, enrolled keys and values for the keys. 
Store the student object in your browser localStorage. */
const student = {
    firstName : 'Tiana',
    lastName : 'Akinwale',
    age : 19,
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'Python'],
    country : 'Nigeria'
}
const studentJSON = JSON.stringify(student, undefined, 4)
const ls = localStorage.setItem('student', studentJSON)
console.log(ls)