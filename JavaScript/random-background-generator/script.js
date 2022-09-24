const btn = document.querySelector('button');

function random() {
  return Math.floor(Math.random() * (256));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random()}, ${random()}, ${random()})`;
  document.body.style.backgroundColor = rndCol;
});
