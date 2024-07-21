//methods
// function inside Objects
const person = {
    firstName : "kanika",
    age: 21,
    about : function(){
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
console.log(person.about);
person.about();