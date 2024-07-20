//fill method
//value,start,end
const myArray= new Array(10).fill(-1);
console.log(myArray);
const arr = [1,2,3,4,5,6,7,8,9];
arr.fill(0,3,8);
console.log(arr);
// splice method
// start , delete, insert
const myArr = ["item1","item2","item3"];
//delete
const deletedItem = myArr.splice(1,1);
console.log("deleted item is", deletedItem);
console.log(myArr);
//insert 
myArr.splice(1,0,"inserted item");
console.log(myArr);
//delete insert both
myArr.splice(1,2,"insert","updated");
console.log(myArr);

