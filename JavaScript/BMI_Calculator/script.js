function Bmi(weight, height)
{
    return (weight / (Math.pow(height, 2)));
}

let heightInput = document.querySelector(".height");
let weightInput = document.querySelector(".weight");
let calculateButton = document.querySelector(".button");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");
let BMI, height, weight;

button.addEventListener("click", (calculateButton) => {
    calculateButton.preventDefault()
    height = heightInput.value;
    weight = weightInput.value;
    BMI = Bmi(weight, height); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Your BMI says you are Underweight";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Your BMI says your weight is in the normal range";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Your BMI says you are overweight";
    }else{
        statement.innerText = "Your BMI says you are obese";
    }
});
