const user1 ={
    firstName : "Kanika",
    age : 21,
    about : function(hobby , favmusician){
        console.log(this.firstName , this.age, hobby, favmusician);
    }
};
// another method
const user2 ={
    firstName : "Kanika",
    age : 21,
    about(){ // methods
        console.log(this.firstName , this.age);
    }
};
user2.about();