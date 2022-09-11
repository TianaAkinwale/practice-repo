let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let answer = document.getElementById('answer');
let button = document.getElementById('button');
let output = document.getElementById('output');
let sign = document.getElementById('sign');
let score = document.getElementById('score');
score.innerHTML = 0;

function addNums(num1, num2) {
    let result = num1 + num2;
    return result;
}
function subNums(num1, num2) {
        let result = num1 - num2;
    return result;
}
function divNums(num1, num2) {
    let result = num1 / num2;
    return result.toFixed(2);
}
function mulNums(num1, num2) {
    let result = num1 * num2;
    return result;
}
function random() {
    return Math.floor(Math.random() * 21);
}
v1 = random()
    v2 = random()
    num1.innerHTML = v1
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));

button.addEventListener('click', () => {
    let v3;
    if (sign.innerHTML == '+'){
        v3 = addNums(v1, v2);
    }
    if (sign.innerHTML == '-'){
        v3 = subNums(v1, v2);
    }
    if (sign.innerHTML == '/'){
        v3 = divNums(v1, v2);
    }
    if (sign.innerHTML == '*'){
        v3 = mulNums(v1, v2);
    }

    if (v3 == answer.value) {
        output.innerHTML = 'Correct';
        score.innerHTML++;
    }
    else {
        output.innerHTML = `${v3} wrong`;
    }
    answer.value = ""

    v1 = random()
    v2 = random()
    num1.innerHTML = v1
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));
});