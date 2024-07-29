// real life application of closure
function func(){
    let counter =0;
    
    return function(){
        if(counter<1){
            console.log("Hiii, You called me!!!");
        }
        else{
            console.log("Mai already call ho chuka hu!!!");
        }
        return counter++;
    }
    
}
const myFunction= func();
myFunction();
myFunction();
myFunction();
const myFunction2= func();
myFunction2();
myFunction2();