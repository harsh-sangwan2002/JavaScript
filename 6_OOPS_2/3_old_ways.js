// 1. function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    console.log(`My name is ${this.name} & I am ${this.age} years old.`);
}

const Tim = new Person("Tim", 21);
console.log(Tim);

function SuperHuman(name, age, power) {

    Person.call(this,name,age);
    this.power = power;
}

SuperHuman.prototype.executePower = function () {
    console.log("Superhuman used his power");
}

SuperHuman.prototype.__proto__ = Person.prototype;
const Jarvis = new SuperHuman("Jarvis", 22, "Electrogun");

Jarvis.sayHi();
Jarvis.executePower();