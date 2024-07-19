//parameter destructing
//object 
//react
const person = {
    firstName : "Kanika",
    gender : "female",
}
function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}
// another method
function printDetails({firstName,gender ,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);