// getter and setter
class Person{
    constructor(firstName, lastName , age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
     get fullName(){
        return `${this,this.firstName} ${this.lastName}`;
    }
    setName(firstName, lastName){
        this.firstName = firstName;
        this.lastName =lastName;
    }
    set fullName(fullName){
        const [firstName,lastNAme]= fullName.split(" ");
        this.firstName = firstName;
        this.lastName = this.lastName;
    }
}
const person1= new Person("kanika", "garg",18);
console.log(person1);
// console.log(person1.fullName());// we use it as a property
console.log(person1.firstName); //ese
//console.log(person1.fullName);// get lgake 
person1.setName("Kanak", "Gupta");
console.log(person1);
person1.firstName="Kani"; 
console.log(person1);
person1.fullName ="Aksh Garg";
console.log(person1);