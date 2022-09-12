let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let answer = document.getElementById('answer');
let button = document.getElementById('button');
let reset = document.getElementById('reset');
let correct = document.getElementById('correct');
correct.innerHTML = 0;
correct.style.color = 'green';
let wrong = document.getElementById('wrong');
wrong.innerHTML = 0;
wrong.style.color = 'red';
let statement = document.getElementById('statement');
statement.innerHTML = '';
statement.style.fontSize = '30px'
let sign = document.getElementById('sign');
sign.style.fontSize = '40px';
let gameScore = document.getElementById('gameScore');
gameScore.innerHTML = 0;

v1 = (Math.floor(Math.random() * 27))
v2 = (Math.floor(Math.random() * 18))
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

    if (answer.value == "") {
        statement.innerHTML = 'Input an answer!'
    }
    else if (v3 == answer.value) {
        statement.innerHTML = 'CORRECT!';
        statement.style.color = 'green';
        statement.style.fontSize = 'larger'
        correct.innerHTML++;
    } 
    else {
        statement.innerHTML = 'WRONG!';
        statement.style.color = 'red';
        statement.style.fontSize = 'larger';
        wrong.innerHTML++;
    }
    answer.value = ""

    if (wrong.innerHTML == 3) {
       statement.innerHTML = '!!!GAME OVER!!!';
       setGameOver();
        gameScore.innerHTML = correct.innerHTML;
    }

    v1 = (Math.floor(Math.random() * 8))
    v2 = (Math.floor(Math.random() * 7))
    num1.innerHTML = v1
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));
});

function setGameOver() {
    answer.disabled = true;
    reset.addEventListener('click', restart);
}

reset.addEventListener('click', restart);

function restart() {
    wrong.innerHTML = 0;
    v1 = (Math.floor(Math.random() * 8))
    v2 = (Math.floor(Math.random() * 7))
    num1.innerHTML = v1
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));
    correct.innerHTML = 0;
    answer.disabled = false;
    statement.innerHTML = ''
}

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
    return result.toFixed(1);//remind to put decimal answer to one decimal
}
function mulNums(num1, num2) {
    let result = num1 * num2;
    return result;
}