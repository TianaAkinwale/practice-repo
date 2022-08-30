//use .style and random it. i don't even know what im saying
function randomHexaNumberGenerator() {
    let num = (Math.random() * 0xfffff * 1000000).toString(16);
    let rand = '#' + num.slice(0, 6);
    return rand;
}//console.log(randomHexaNumberGenerator())

let body = document.querySelector('body');
let buttton = document.querySelector('buttton');
let bmi;

buttton.addEventListener('click', () => {
    body.style.backgroundColor = randomHexaNumberGenerator();

});