let word = document.getElementById('word');
let button = document.getElementById('button');
let p = document.getElementById('output');

button.addEventListener('click', () => {
    abc = word.value;
    const q = p.innerHTML
    //use regex
    const pattern = /\d+/g;
    const pattern2 = ' '
    let matches2 = q.match(pattern2)
    let matches = q.match(pattern)
    if (word.innerHTML = matches || matches2) {
        errord();
    } else {
        p.innerHTML = abc.length;
    }

    //output when requirements are not met
    function errord() {
        p.innerHTML = 'only a word is allowed!'
    }
})
/*const numpattern = /\d+/g;
    const wrdpattern = ' '
    let worderr = q.match(wrdpattern)
    let numerr = q.match(numpattern)
    if (word.innerHTML = numerr) {
        errord1();
    } else {
        p.innerHTML = abc.length;
    }
    if (word.innerHTML = worderr) {
        errord2();
    } else {
        p.innerHTML = abc.length;
    }

    //output when requirements are not met
    function errord1() {
        q = 'Only letters allowed!'
    }
    function errord2() {
        q = 'Only a word allowed allowed!'
    }
})*