/*1. Create a closure which has three inner functions */
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