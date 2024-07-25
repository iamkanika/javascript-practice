const user1 ={
    firstName : "Kanika",
    lastNAme : "Garg",
    age : 21,
    email :"kanikagarg2707@gmail.com",
    about : function(){
        return `${this.firstName}is ${this.age} years old.`;
    },
     is18: function(){
        return this.age>=18;
    }
};
// we need hundreds of users in this 
// for this we need to create function 
// that function will create object 
// add key value pairs 
// object ko return bhi krega
const userMethods={
    about : function(){
        const userMethods={
            about : function(){
                return `${this.firstName} is ${this.age} years old.`;
            },
             is18: function(){
                return this.age>=18;
            },
        };
    },
     is18: function(){
        return this.age>=18;
    },
};
// another method 

function createUser( firstName, lastNAme,age,email){
    // const user={}; 
    // const user = Object.create(userMethods);
     // creates chain of __proto__ kch chiz nhi milti to browser __proto__ me dekhta h
      const user= Object.create(createUser.prototype)
    user.firstName = firstName;
    user.lastNAme= lastNAme;
    user.age= age;
    user.email= email;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 = function() {
//         return this.age>=18;
//     }
//     return user;
// user.about = userMethods.about; 
// user.is18 = userMethods.is18; 
return user;
}
createUser.prototype.about = function(){
     return `${this.firstName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
    return this.age>=18;
}
const user2 = createUser("aksh" , "garg" ,23, "akshgupta@gmail.com");
console.log(user2);
const is18 = user2.is18();
console.log(is18);
console.log(user2.is18());
const about = user2.about();
console.log(about);
// problem aayi ki bar bar user bnenege to function bhi bar bar bnenge jabki body h