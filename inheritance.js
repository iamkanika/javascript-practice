class Animal{
    constructor(name, age){
        this.name= name;
        this.age=age;
    }
    eat(){
        console.log(`${this.name} is eating `);
    }
    isCute(){
        return true;
    }
}
const animal1 = new Animal("daisy" , 2);
console.log(animal1);
console.log(animal1.isCute());
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed =speed;
    }
    run(){
        return `${this.name} is running at ${this.age} kmph.`
    }
}
const Dog1 = new Dog("tommy", 2, 45);
console.log(Dog1);
console.log(Dog1.eat());
console.log(Dog1.run());