const lowerCount = document.getElementById('lowerCount');
const addCount = document.getElementById('addCount');
const textNum = document.getElementById('textNum');
const text = document.getElementById('text');
text.style.color = 'black';
let count = 0;

addCount.addEventListener('click', () => {
    count++;
    text.innerText = count;
    if (count > 0) {
        text.style.color = 'green';
    }
});

lowerCount.addEventListener('click', () => {
    count--;
    text.innerHTML = count;
    if (count < 0) {
        text.style.color = 'red';
    }
});