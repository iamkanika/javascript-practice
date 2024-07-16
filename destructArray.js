//array destructing 
const myArray = ["item1","item2"];
let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log(myvar1);
console.log(myvar2); 
//destructing 
let [myvar3 , myvar4] = myArray;
console.log(myvar3);
console.log(myvar4); 
myvar3 = "item5";
console.log(myvar3);
// if items are more then simple first index values are assigned
//if one item is assigned then simple other values are undefined
const arr = ["Kanika","Kanak","Gudda","Aalu","chalu"];
let [val1 , , val2 , ...myNewarr] =arr;
console.log(val1);
console.log(val2);
//baki values..
console.log(myNewarr);

