console.log(this); // print window object
console.log(window);
console.log(this===window);
function myFunc(){
    // console.log(this); 
    console.log("hello world");
}
myFunc();
window.myFunc();
//using strict mode
function myFunction(){
    "use strict"
    console.log(this);
}
myFunction();