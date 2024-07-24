// clone using obj assign
const obj = {
    key1 :"value1",
    key2:"value2",
}
// const obj2 = {...obj}; //method1
const obj2 = Object.assign({}, obj); // method2 old method 
obj.key3="value3";
console.log(obj);
console.log(obj2);