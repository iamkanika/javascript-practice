//2015 es6 me classes ka concept aaya
// classes are fake
//class kewword
class CreateUser{
    constructor(firstName, lastNAme,age,email){
        console.log("Constructor called");
    this.firstName = firstName;
    this.lastNAme= lastNAme;
    this.age= age;
    this.email= email;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age>=18;
    }
}
const user1= new CreateUser("aksh" , "garg" ,23, "akshgupta@gmail.com");
console.log(user1.firstName);
console.log(Object.getPrototypeOf(user1));