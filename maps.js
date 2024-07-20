//maps
//maps is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
//object literals  sari keys string or symbol ki form me hoti h
const person={
    firstName:"Kanika",
    age:21,
    1:"one",
}
console.log(person.firstName);
console.log(person["firstName"]);
for(let key in person){
    console.log(typeof key);
}
const person1 = new Map();
person1.set('firstName','Kanika');
person1.set('age','21');
person1.set(1,'one');// yha 1 number hh....
console.log(person1);
//how to access key value pairs
console.log(person1.get(1));
console.log(person1.get('age'));
console.log("printing keys");
for (let key of person1.keys()){
    console.log(key, typeof key);
}
for(let key of person1){
    console.log(key);
}