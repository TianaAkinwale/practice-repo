//abeg document your code

const clearBtn = document.querySelector('.clearBtn')
//const nums = document.querySelectorAll('.nums')
const operations = document.querySelectorAll('.operations')
const delBtn = document.querySelector('.delBtn')
const equalBtn = document.querySelector('.equalBtn')
const controls = document.querySelector('.controls').children
const allSymbols = ['+', '-', '*', '/', '%', 'C', '=']
let symbol = document.getElementById('symbol')
const displayOpe = document.querySelector('.displayOpe')
const displaySol = document.querySelector('.displaySol')

//symbol = allSymbols

//clear button function
clear = () => {
    if (displayOpe.innerHTML !== '') {
        displayOpe.innerHTML = ''
    }
    else if (displayOpe.innerHTML === '')
    {
        displayOpe.innerHTML = 'Display is empty!'
    }
}
//adding event listener to clear button
//clearBtn.addEventListener('click', (clear))

for (let button of controls) {
    button.addEventListener('click', () => {
        displayOpe.innerHTML += button.innerHTML
    })
}

const evaluate = () => {
    let answer = displayOpe.innerHTML
    if (displayOpe.innerHTML.includes('+')){
        displaySol.innerHTML = 'ttttt'
    }
  };

  equalBtn.addEventListener('click', (evaluate));
  
//operation functions
subtract = (num1, num2) => {
    return num1 - num2
}
multiply = (num1, num2) => {
    return num1 * num2
}
add = () => {
    return eval(display.innerHTML)
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