//in case of array 
const arr1=[1,2,3];
const arr2 = [4,5,6];
const newarr = [...arr1 , arr2];
console.log(newarr);
const newarr1 = [...arr1 , ...arr2];
console.log(newarr1);
const arr3 = [..."1212344578"];
console.log(arr3);
// in case of  objects
const obj1= {
    key1:"anika",
    key2:"kanika",
    key1:"aaru",
}
console.log(obj1);
const obj2= {
    key3:"anika",
    key4:"kanika",
}
console.log(obj2);
const newObj = {...obj1,...obj2};
console.log(newObj);

