class Person{
    constructor(firstName, lastName , age){
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
    }
    //staticmethod
     static personInfo(){
        return `this is person information`;
    }
    // static properties
    static desc = "static property";
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
    eat(){
        console.log(`${this.firstName} is eating `);
    }
    isCute(){
        return true;
    }
}
const person1 =new Person("KAnika","Garg",18);
console.log(person1);
console.log(person1.eat());
console.log(Person.personInfo());// cannot access by object name
console.log(person1.desc);// gives undefined
console.log(Person.desc);