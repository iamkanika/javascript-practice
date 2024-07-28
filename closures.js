//closures
// function can return functions
function outerFunction(){
    function innerFunction(){
        console.log("This is some text");
    }
    return innerFunction;
}
const ans= outerFunction();
ans();

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}
const ans1= printFullName("Kanika", "garg");
ans1();
function para(x){
    x= arguments;
    let a = "Var1";
    let b= "Var2";
    return function(){
        console.log(x,a,b);
    }
}
const paragraph= para();
paragraph(0);