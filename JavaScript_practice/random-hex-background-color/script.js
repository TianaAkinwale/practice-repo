let body = document.body.style;
let button = document.querySelector('button');
let hexValue = document.getElementById('hexValue');


button.addEventListener('click', () => {
    const hex = '#';
    let num = Math.floor((Math.random() * 0xfffff * 1000000)).toString(16);
    hex += num.slice(0, 6);
    body.backgroundColor = hex;
    hexValue.textContent = hex;
    
});