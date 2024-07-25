function CreateUser(firstName , age){
    this.firstName= firstName;
    this.age= age;
} // this is called constructor function 
// start with capital letter so developer ko pta lg jaye ki new lgake call krni h
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}
 const user1 = new CreateUser("Kanika",18);8 
 // new keyword do three things 
 // 1. create empty object this ={}
 // 2.return this
 //3. Object.create(createUser.protoype)  ye wala kam new keeyword khud kr dega

 console.log(user1);
 user1.about();