let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let answer = document.getElementById('answer');
let button = document.getElementById('button');
let output =document.getElementById('output')

function addNums(num1, num2) {
    let result = num1 + num2;
    return result;
}

button.addEventListener('click', () => {
    let v1 = +(num1.value);
    let v2 = +(num2.value);
    let v3 = addNums(v1, v2);

    if (v3 == answer.value) {
        output.innerHTML = 'Correct';
    }
    else if (v1 == ''){
        output.innerHTML = 'Input numbers';
    }
    else {
        output.innerHTML = `${v3} wrong`;
    }
    
});