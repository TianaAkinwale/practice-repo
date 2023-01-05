let word = document.getElementById('word');
let button = document.getElementById('button');
let p = document.getElementById('output');

button.addEventListener('click', () => {
    abc = word.value;
    //use regex
    const num = /\d+/g;
    const wrd = ' ';
    let numerr = abc.match(num)
    let wrderr = abc.match(wrd)
    if (word.innerHTML = numerr) {
        numerrd()
    } else if (word.innerHTML = wrderr) {
        wrderrd()
    }
    else {
        p.innerHTML = abc.length;
    }

    //output when requirements are not met
    function numerrd() {
        p.innerHTML = 'only letters allowed!'
    }
    function wrderrd() {
        p.innerHTML = 'only a word is allowed!'
    }
})