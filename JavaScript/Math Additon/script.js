

//declaring variables and getting elements by their html id attribute value 
//and assigning them to variables
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let answer = document.getElementById('answer');
const button = document.getElementById('button');
const reset = document.getElementById('reset');
let correct = document.getElementById('correct');
correct.innerHTML = 0; //assigning an initial value for the variable
correct.style.color = 'green'; //setting the text color of this variable

let wrong = document.getElementById('wrong');
wrong.innerHTML = 0; //assigning an initial value for the variable
wrong.style.color = 'red'; //setting the text color of this variable

let statement = document.getElementById('statement');
statement.innerHTML = '';
statement.style.fontSize = '30px';  //setting the font size of this variable

let sign = document.getElementById('sign');
sign.style.fontSize = '40px';

let gameScore = document.getElementById('gameScore');
gameScore.innerHTML = 0;

v1 = (Math.floor(Math.random() * 37))  //assigning random values to a varible
v2 = (Math.floor(Math.random() * 28))
num1.innerHTML = v1  //assigning the variable to an html input
num2.innerHTML = v2;
let calc = '+-/*'; //declaring and intializing our calculation signs
//using methods to let the signs be random and assigning to the sign innerhtml
sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length)); 


//function for check button
function check() {
    let v3; //variable to store result
    /*switch (sign.innerHTML) {
        case value:'+';
        v3 = addNums(v1, v2);
            break;
        case value:'-';
        v3 = subNums(v1, v2);
            break;
        case value:'/';
        v3 = divNums(v1, v2);
            break;
            case value:'*';
        v3 = mulNums(v1, v2);
            break;
        default:
            break;
    }*/

    //conditions that tells function what to do when each sign is displayed
    if (sign.innerHTML == '+'){
        /*calling basic calculation functions and using 
        variables previously declared as arguments*/
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

    //conditions that tells function what to do with the answer input
    if (answer.value == "") {
        statement.innerHTML = 'Input an answer'; //when user enters nothing
    }
    else if (v3 == answer.value) {
        statement.innerHTML = 'CORRECT!';
        statement.style.color = 'green'; //setting color of statement to green
        statement.style.fontSize = 'larger' //setting font size of statement
        correct.innerHTML++;  //incrementing correct count by 1
    } 
    else {
        //outputing the correct answer when user is wrong
        statement.innerHTML = `WRONG! ANS = ${v3}`; 
        statement.style.color = 'red';//setting color of statement to red
        statement.style.fontSize = 'larger';//setting font size of statement
        wrong.innerHTML++;//decrementing correct count by 1
    }

    //setting answer input to empty after previous lines of codes have been run
    answer.value = "" 

    //disabling input if user is incorrect 3 times
    if (wrong.innerHTML == 3) {
       statement.innerHTML = '!!!GAME OVER!!!';
       setGameOver(); //calling game over function
       //setting game score to correct variable value
        gameScore.innerHTML = correct.innerHTML;
    }

    //allowing random values to continue to be generated.
    v1 = (Math.floor(Math.random() * 68))
    v2 = (Math.floor(Math.random() * 57))
    num1.innerHTML = v1
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));
}

//adding event listener to check button
button.addEventListener('click', (check));

//function sets game to be over when requirements are met
function setGameOver() {
    answer.disabled = true; //disabling answer input
    //allow game to be reset when game is over
    reset.addEventListener('click', restart);
}

//adding event listener to reset button with a restart function that resets the game.
reset.addEventListener('click', restart);

//restart function, resetting all variables to initial state.
function restart() {
    wrong.innerHTML = 0;
    correct.innerHTML = 0;
    v1 = (Math.floor(Math.random() * 78));
    v2 = (Math.floor(Math.random() * 67));
    num1.innerHTML = v1;
    num2.innerHTML = v2;
    let calc = '+-/*';
    sign.innerHTML = calc.charAt(Math.floor(Math.random() * calc.length));
    answer.disabled = false;//enabling answer input
    statement.innerHTML = '';
}

//calculation functions
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
    return parseInt(result, 10);
    //return parseInt(result, 10);//remind to put decimal answer to one decimal
}
function mulNums(num1, num2) {
    let result = num1 * num2;
    return result;
}


i will never fail another exam.
-it is possible to move from glory to glory without breaks
-those who say i won't reach my goal will come and bow down to me
+1those who feel destiny hasn't been kind to them, 
(rev 7:4-8) it is the end that matters.
+i will inspire you. job 32:8
I will ask to pay for the congress and refer to the new wave of glory message and say
God gave me a new inspiration.
*i will never again be referred to as an ex-champion. i will be a reigning champ
gen 48:8-20
+2 Esau Gen 32:6-7
a new wave of glory in the spiritual, eg peter
against all odds, irrespective of the enemies against me, i will excel

refuse to annoy God. gen 39:1-9

1. praise God for the convention
2. Father, please restore my withered hand
3.