const key1 = "objkey1";
const key2 = "objkey2";
const value1 = "myval1";
const value2 = "myval2";
// const obj = {
//     objkey1: myval1 ,
//     objkey2: myval2
// }
// const obj = {
//     key1 : value1,
//     key2 : value2
// }
// computed properties..
const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj);
//second method
const obj1 ={};
obj1[key1]= value1;
obj1[key2] = value2;
console.log(obj1);