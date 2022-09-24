/*1. Create a closure which has one inner function */
function outerFunction() {
    let closure = 0;
    function innerFunction() {
        closure++
        return closure
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())