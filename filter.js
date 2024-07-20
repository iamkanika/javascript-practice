//filter method
const numbers =[1,3,,5,7,8,2,4];
const isEven = function(number){
    return number%2===0;
}
let EvenNumbers = numbers.filter(isEven);
console.log(EvenNumbers);
//similarly for Odd numbers..