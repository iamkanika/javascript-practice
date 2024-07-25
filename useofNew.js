function CreateUser( firstName, lastNAme,age,email){
    this.firstName = firstName;
    this.lastNAme= lastNAme;
    this.age= age;
    this.email= email;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function(){
   return this.age>=18;
}
const user1= new CreateUser("aksh" , "garg" ,23, "akshgupta@gmail.com");
console.log(user1);
for(let key in user1){
    // console.log(key)  it prints all keys prototype ki bhi..
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}