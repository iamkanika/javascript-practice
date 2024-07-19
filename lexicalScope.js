const myVar = "value56";
function myApp(){
    // const myVar = "value1";
    function myFunc(){
        // const myVar = "value2";
        console.log("inside myfuncytion", myVar);
    }
    const myFunc2 = function(){}
    const myFunc3 = () => {}
    console.log(myVar);
    myFunc();
}
myApp();