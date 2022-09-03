let weightPD = document.getElementById('weightPD');
let weightKG = document.getElementById('weightKG');
let button = document.getElementById('btn');
const kg = 0.453592;
let letters = 'abcdefghijklmnopqrstuvwxyz'

function PoundToKG(pound) {
    const KG = pound * kg;
    return KG;
}

weightPD.addEventListener('input', () => {
    let ans = PoundToKG(weightPD.value);
    weightKG.innerHTML = `Your weight in KG IS: ${ans}`;
    if (weightPD.value <= 0) {
        weightKG.innerHTML = 'Input a valid weight value'
    }
});