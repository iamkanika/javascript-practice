// sets (it is iterable)
//store data
//set also have its own methods
// No index-based access
//Order is not guaranteed
// unique items only(no duplicate allowed)
const numbers = new Set([1,2,3]);
console.log(numbers);
numbers.add(5);
numbers.add(9);
console.log(numbers);
numbers.add(["item1","item2"]);
numbers.add(["item1","item2"]);// ab same element add ho jyenge bcoz inka memeory space alg h js me
console.log(numbers);
if(numbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}
for ( let number of numbers){
    console.log(number);
}
const myArray = [1,2,3,4,5,6,7,7,6,5,3,3,4,5,7];
const uniqueElements = new Set(myArray);
console.log(uniqueElements); // can't use .length property
let length =0;
for (let element of uniqueElements){
    length++;
}
console.log(length);