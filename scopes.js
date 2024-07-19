//block scope Vs function scope
// let and const are block scope
//var is function scope
{
    let firstName = "Kanika";
    console.log(firstName);
}
const  firstName = "Kani";
console.log(firstName);
{
    var firstName1 = "Kanak";
}
console.log(firstName1);
function myApp() {
    if(true){
        let first ="Kani";
        console.log(first);
    }
    //console.log(first); it gives error in case of let and const
}
myApp();
