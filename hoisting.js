console.log(hello);
hello(); // this behavior is called hoisting
function hello(){
    console.log("hello js");
}
// but we can not do this in case of function expressions and arrow functions..
console.log(hell); // gives undefined but doesn't give error.
var hell = "hello world"; 
console.log(hell);
// but it gives error in case of let and const




