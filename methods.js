//methods
// function inside Objects
const person = {
    firstName : "kanika",
    age: 21,
    about : function(){
        // console.log(this); 
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
console.log(person.about);
person.about();
 
function personInfo (){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
personInfo();
const person1 = {
    firstName : "kanak",
    age: 18,
    about : personInfo,
} 
const person2 = {
    firstName : "kani",
    age: 19,
    about : personInfo,
} 
const person3 = {
    firstName : "kaniiiiii",
    age: 20,
    about : personInfo,
} 
person1.about();
person2.about();
person3.about();