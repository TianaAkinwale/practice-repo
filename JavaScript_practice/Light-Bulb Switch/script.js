let img = document.getElementById('img');

img.addEventListener('click', () => {
    img.style.backgroundColor = 'yellow'
});
img.addEventListener('dbclick', () => {
    img.style.backgroundColor = ''
});

.canvas{
    width: 600px;
    height: 500px;
    margin: 50px auto;
    text-align: center;
    box-sizing: border-box;
}

.bulb-off{
    width: 265px;
    height: 400px;
    background: url('lightoff.png') no-repeat;
    margin: auto;
}

.bulb-on{
    width: 265px;
    height: 400px;
    background: url('lighton.png') no-repeat;;
    margin: auto;
}

const light = document.querySelector('#bulb');

light.addEventListener('click', function(e){

    e.target.classList.toggle('bulb-on');

})