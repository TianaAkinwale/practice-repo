const student = {
    firstName : 'Tiana',
    lastName : 'Akinwale',
    age : 19,
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'Python'],
    country : 'Nigeria'
}
const studentJSON = JSON.stringify(student, undefined, 4)
localStorage.setItem(student, studentJSON)
console.log(localStorage)