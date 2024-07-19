// default parameters
// function addTwo ( num1 ,num2){
//     if (typeof num2 === "undefined"){
//         num2 =0;
//     }
//     return num1 + num2;

// }
// another method
function addTwo(num1,num2=0){
    return num1+num2;
}
console.log(addTwo(4));
console.log(addTwo(4,4));
//rest parameters
function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`); 
    console.log(`c is ${c}`);
}
myFunc(3,4,5,6,7,8,9);
function addaAll(...numbers){
    let total =0;
    for(let number of numbers){
        total = total+number;
    }
    return total;
}
let ans = addaAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);