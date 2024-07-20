//function returning function
function myFunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;
}
const ans = myFunc();
ans();
// if we pass input a function or returning a function or we do both then these are called higher Order functions.