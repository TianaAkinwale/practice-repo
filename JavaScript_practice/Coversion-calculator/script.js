let weightPD = document.getElementById('weightPD');
let weightKG = document.getElementById('weightKG');
let button = document.getElementById('btn');
const kg = 0.453592;
let letters = 'abcdefghijklmnopqrstuvwxyz'

function PoundToKG(pound) {
    const KG = pound * kg;
    return KG;
}

button.addEventListener('click', () => {
    weightKG.innerHTML = PoundToKG(weightPD.value);
    if (weightPD.value <= 0) {
        weightKG.innerHTML = 'Input a valid weight value'
    }
});