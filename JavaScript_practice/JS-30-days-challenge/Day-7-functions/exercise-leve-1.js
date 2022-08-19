/*1. Declare a function _fullName_ and it print out your full name.*/
function _fullName_ () {
    console.log('Tiana Akinwale')
}
console.log(_fullName_());

/*2. Declare a function _fullName_ and now it takes firstName, lastName as a
 parameter and it returns your full - name.*/
function _fullName_ (firstName, lastName) {
    let name = `Your full name name is ${firstName} ${lastName}`;
    return name;
}
console.log(_fullName_('Tiana', 'Akinwale'));
/*3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.*/
function _addNumbers_ (a, b) {
    return a + b;
}
console.log(_addNumbers_(5, 20))

/*4. An area of a rectangle is calculated as follows: _area = length x width_. 
Write a function which calculates _areaOfRectangle_.*/
function _area0fRectangle_ (length, width) {
    let _area = length * width;
    return _area;
}
console.log(_area0fRectangle_(2, 15));

/*5. A perimeter of a rectangle is calculated as follows: 
_perimeter= 2x(length + width)_. Write a function which 
calculates _perimeterOfRectangle_.*/
function _perimeterOfRectangle_ (length, width) {
    let _perimeter = 2 * (length + width);
    return _perimeter;
}
console.log(_perimeterOfRectangle_(4, 5))
/*6. A volume of a rectangular prism is calculated as follows:
 _volume = length x width x height_. Write a function which
  calculates _volumeOfRectPrism_.*/
  function _volume0fRectPrism (length, width, height) {
    let _volume = (length * width * height);
    return _volume;
}
console.log(_volume0fRectPrism(3, 4, 5))

/*7. Area of a circle is calculated as follows: _area = π x r x r_. 
Write a function which calculates _areaOfCircle_*/
function _areaOfCircle_ (r) {
    const PI = 3.142
    let _perimeter =  PI * (r * r);
    return _perimeter;
}
console.log(_areaOfCircle_(4))

/*8. Circumference of a circle is calculated as follows:
 _circumference = 2πr_. Write a function which calculates _circumOfCircle_*/
 function _circumOfCircle_ (r) {
    const PI = 3.142
    let _circumference =  (2 * PI * r);
    return _circumference;
}
console.log(_areaOfCircle_(4))

/*9. Density of a substance is calculated as follows: _density = mass/volume_. 
Write a function which calculates _density_.*/
function _density_(mass, volume){
   let _density = mass / volume;
   return _density;
}

/*10. Speed is calculated by dividing the total distance covered by a moving 
object divided by the total amount of time taken. Write a function which 
calculates a speed of a moving object, _speed_.*/

function _speed_(distance, time){
    let speed = distance / time;
    return speed;
}

/*11. Weight of a substance is calculated as follows: _weight = mass x gravity_.
 Write a function which calculates _weight_.*/
 function _weight_(mass, gravity){
    let weight = mass * gravity;
    return weight;
 }
/*12. Temperature in oC can be converted to oF using this formula: 
_oF = (oC x 9/5) + 32_. Write a function which 
convert oC to oF _convertCelsiusToFahrenheit_.*/
function _convertCelsiusToFahrenheit_(oC){
    let _oF = (oC * (9 / 5) + 32);
    return oF;
}

/*13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) 
in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different
 weight groups in adults 20 years old or older.Check if a person is _underweight, normal, 
 overweight_ or _obese_ based the information given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more*/
function Bmi(weight, height)

{
    return (weight / (Math.pow(height, 2)));

    let Bmi = (weight / (Math.pow(height, 2)));
    if(Bmi < 18.5){
        console.log("Your BMI says you are Underweight");    
    }else if((Bmi > 18.5) && (BMI < 24.9)){
        console.log("Your BMI says your weight is in the normal range");
    }else if((Bmi > 25) && (BMI < 29.9 )){
        console.log("Your BMI says you are overweight");
    }else{
        console.log("Your BMI says you are obese");
    }
}

/*14. Write a function called _checkSeason_, it takes a month parameter and returns the
 season:Autumn, Winter, Spring or Summer.*/
/*15. Math.max returns its largest argument. Write a function findMax that takes three
 arguments and returns their maximum with out using Math.max method.

    ```js
    console.log(findMax(0, 10, 5))
    10
    console.log(findMax(0, -10, -2))
    0
    ```*/
function _checkSeason_(num1, num2, num3) {
    if (num1 > num2 && num3){
        return num1;
    }
    else if (num2 > num1 && num3){
        return num2;
    }
    else {
        return num3;
    }
}