function hello(){
    console.log("hello world");
}
// javascript ke functions ==> functions + object
console.log(hello.name);
// you can add your own properties
hello.myOwnProperty = "very unique element";
console.log(hello.myOwnProperty);
// name property == tells function name;
// function provudes useful properties
console.log(hello.prototype); // only functions provide prototype property
// function k sath free ki space jisme hum key value pair add kar skte h
if (hello.prototype){
    console.log("prototype is present");
}
else {
    console.log("prototype is not present");
}
hello.prototype.abc ="abc";
hello.prototype.xyz ="xyz";
console.log(hello.prototype);
hello.prototype.sing = function(){
    return "lalalala";
}
console.log(hello.prototype.sing());
console.log("Lets analyse some code");
let numbers =[1,2,3]; 
// let numbers = new Array(1,2,3);
console.log(Array.prototype);
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

