// call apply bind
function hello (){
    console.log("hello javavscript");
}
hello();
hello.call();
function info(branch , course){
    console.log(this.firstName, this.age , branch, course);
}
const user1 ={
    firstName : "Kanika",
    age : 21,
    about : function(hobby , favmusician){
        console.log(this.firstName , this.age, hobby, favmusician);
    }
};
user1.about();
const user2 ={
    firstName : "Kankiiii",
    age : 22,
};
user1.about.call(); // gives undefined
user1.about.call(user1," guitar" , "neha");
user1.about.call(user2);
console.log("call method");
info.call(user1, "guitar" ,"kani");
info.call(user2);
console.log("apply method"); 
info.apply(user1 , ["guitar", "neha"]); // other arguments pass as an array
info.apply(user2 , ["sleeping"]);
console.log("Bind Method");
const func = info.bind(user1, "eating" , "lata");
func();