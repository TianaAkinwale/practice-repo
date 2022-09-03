let weightPD = document.getElementById('weightPD');
let weightKG = document.getElementById('weightKG');
let button = document.getElementById('btn');
const kg = 0.453592;

function PoundToKG(pound) {
    const KG = pound * kg;
    return KG.toFixed(2);
}

weightPD.addEventListener('input', () => {
    let ans = PoundToKG(weightPD.value);
    weightKG.innerHTML = `Your weight in KG: ${ans}`;
    if (weightPD.value <= 0) {
        weightKG.innerHTML = 'Input a valid weight value'
    }
});