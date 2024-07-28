// lexical scope and scope chain
const lastName="Garg";
const printName = function(){
    const firstName= "Kanika";
    console.log(firstName);
    console.log(lastName);
}
printName();
// agr koi variable ni milta h to lexical scope me check karte hh..