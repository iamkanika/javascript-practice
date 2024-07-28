// all about global execution context
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Kanika";
console.log(firstName);
myFunction();
function myFunction(){
    console.log("this is my function");
}
console.log(myFunc);// undefined because it is variable in this case (function expression)
// myFunc(); it gives error because myFunc is not a function.
// function expresiion
var myFunc = function(){
    console.log("this is my function");
}
myFunc();
console.log("Let's discuss let case");
//  console.log(lastName);// creates error cannot use variable without initialization
let lastName = "Garg";
console.log(lastName);
// behavior of let and const is same as hoisting. 
// console.log(var1);
let var1; 
console.log(var1);
// const var1;
// we cannot do this in case of const
// console.log(typeof var2); gives error
let var2 = "Kani";
console.log(typeof var3);

