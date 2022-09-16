let cost = document.getElementById("cost");
let percent = document.getElementById("percent");
let tipStatement = document.getElementById("tip-statement");
let button = document.getElementById('button');

function tip(cost, percent)
{
    ans = (percent / 100) * cost;
    return Math.ceil(ans);
}

button.addEventListener('click', (hhh) => {
    hhh.preventDefault();

    let c = tip(cost.value, percent.value);
    tipStatement.style.fontSize = '30px';
    tipStatement.innerHTML = `Tip to be given is ${c}`;

    if(percent.value > 25){
        tipStatement.innerHTML = `You are giving too much tip`;
    }
    else if (percent.value === ''){
        tipStatement.innerHTML = `Please enter a value`;
    }
    else if(percent.value < 7){
        tipStatement.innerHTML = `You are giving too litle tip`;
    }
}).preventDefault();