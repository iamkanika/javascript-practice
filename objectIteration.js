const person = {
    name : "Kanika",
    age: 21,
    "person hobbies" : ["sleeping","eating","dancing", "aaruhilovesyash"]
}
//how to iterate objects..
// two methods
// for in loop and Object.keys 
for (let key in person){
    console.log(key);
}
for(let key in person){
    //  method 1.....console.log(`${key} : ${person[key]}`);
    console.log(key ,":" , person[key]);
}
 //object.keys method
 console.log(Object.keys(person));
 const val = Array.isArray(Object.keys(person));
 console.log(val);
  
 for (let key of Object.keys(person)){
    console.log(person[key]);
 }