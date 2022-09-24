/*1. Create an empty object called dog*/
const dog = {};
/*1. Print the the dog object on the console*/
console.log(dog);
/*1. Add name, legs, color, age and bark properties for the dog object.
 The bark property is a method which return _woof woof_*/
 dog.name = 'Jayden';
 dog.legs = 4;
 dog.color = 'ash';
 dog.age = 1;
 dog.bark = function() {
    return 'woof woof';
 }
/*1. Get name, legs, color, age and bark value from the dog object*/
console.log(dog)
 console.log(dog.bark())
/*1. Set new properties the dog object: breed, getDogInfo*/
dog.breed = 'caucasian shepherd';
dog.getDogInfo = function(){
    let ret = `${this.name} is a ${this.breed} with ${this.legs}. He is 
${this.age}, ${this.color} and loves to bark like ${this.bark}`;
return ret;
}
console.log(dog.getDogInfo())