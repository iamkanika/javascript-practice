// callback functions 
function myFunc2(){
    console.log("inside my function2");
}
function myFunc(a){
    console.log(a);
    a();    
    console.log("hello world");
}
// myFunc(2);
// myFunc("abc");
myFunc(myFunc2);
