let message = document.getElementById('message');
const submit = document.getElementById('submit');
const messagePassed = document.getElementById('messagePassed');

submit.addEventListener('click', (returnMessage) => {
    returnMessage.preventDefault();
    messagePassed.innerHTML = message.value;
});

function random() {
    return Math.floor(Math.random() * (256));
  }
  
  submit.addEventListener('click', () => {
    const rndCol = `rgb(${random()}, ${random()}, ${random()})`;
    document.body.style.backgroundColor = rndCol;
  });
  