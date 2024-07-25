const obj1 ={
    key1: "value1",
    key2 : "value2",
}
const obj2={};
// there is one more way to create empty objects
const obj3 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj1);
console.log(obj2);
console.log(obj3);
obj3.key4= "value4";
console.log(obj3);
console.log(obj3.key4);
console.log(obj3.key2);
// __proto__ 
// official ecmascript documentation
// [[prtotype]]
// __proto__ ===[[prototype]] el hi bat h browser me kch bhi dikhe
console.log("prototypes");
console.log(obj3.__proto__);