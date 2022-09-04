let body = document.body;
let color = document.getElementById('color');

color.addEventListener('click', () => {
    body.style.backgroundColor = color;
})