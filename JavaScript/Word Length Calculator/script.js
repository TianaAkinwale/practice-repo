let text = document.getElementById('text');
let button = document.getElementById('button');
let p = document.getElementById('output');

button.addEventListener('click', () => {
    abc = text.value;
    p.innerHTML = abc.split(' ');
    
})