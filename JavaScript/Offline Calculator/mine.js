//abeg document

const clearBtn = document.querySelector('.clearBtn')
const nums = document.querySelectorAll('.nums')
const operations = document.querySelectorAll('.operations')
const delBtn = document.querySelector('.delBtn')
const equalBtn = document.querySelector('.equalBtn')
const displayPara = document.querySelector('.displayPara')
const controls = document.querySelector('.controls').children
const allSymbols = ['+', '-', '*', '/', '%', 'C', '=']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result = ''

//clear button function
clear = () => {
    if (displayPara.innerHTML !== '') {
        displayPara.innerHTML = ''
    }
    else if (displayPara.innerHTML === '')
    {
        displayPara.innerHTML = 'Display is empty.'
    }
}
//adding event listener to clear button
clearBtn.addEventListener('click', (clear))

for (let button of controls) {
    button.addEventListener('click', () => {
        displayPara.innerText += button.innerText

        if ('+') {
            add()
        }
    })
}

//operation functions
subtract = (num1, num2) => {
    return num1 - num2
}
multiply = (num1, num2) => {
    return num1 * num2
}
add = (num1, num2) => {
    return num1 + num2
}
divide = (num1, num2) => {
    return num1 / num2
}
modulo = (num1, num2) => {
    return num1 % num2
}
/*dlete = () => {
    displayPara -= 1;
}
delBtn.addEventListener('click', (dlete))*/