//function declaration
function singHappyBirthday(){
    console.log("Happy birthday to you.....");
}
singHappyBirthday();
singHappyBirthday();
function sumTwoNumbers(number1,number2){
    console.log(number1+number2);
}
sumTwoNumbers(3,5);
function sumThreeNumbers(number1,number2,number3){
    console.log(number1+number2 +number3);
}
sumThreeNumbers(1,3,3);
function arrayFind( arr , target){
    for(let i=0; i<arr.length; i++){
        if(arr[i]=== target){
            return i;
        }
    }
    return false;
}
const myArr = [1,4,5,6,78,];
console.log(arrayFind(myArr,78));
//function expressions
const singHappyBirthday1 = function(){
    console.log("Happy birthday to mee....");
}
singHappyBirthday1();