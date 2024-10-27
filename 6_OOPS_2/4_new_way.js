// 2. Classes
class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`My name is ${this.name} & I am ${this.age} years old.`);
    }
}

class SuperHuman extends Person{

    constructor(name,age,power){
        super(name,age);
        this.power = power;
    }

    executePower(){
        console.log("Superhuman used his power.");
    }
}

const p1 = new Person("Tim",23);
const p2 = new SuperHuman("Jarvis",22,"Electrogun");

p1.sayHi();
p2.sayHi();
p2.executePower();