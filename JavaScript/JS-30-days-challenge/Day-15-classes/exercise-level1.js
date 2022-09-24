/*1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
2. Create a Dog and Cat child class from the Animal Class. */

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    getName() {
        const aniName = this.name;
        return aniName;
    }
}
const Dog = new Animal('Jayden', 2, 'grey', 4);
const Cat = new Animal('Blues', 11, 'Silver');
console.log(Dog, Cat, Dog.getName());