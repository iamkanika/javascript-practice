const user1 ={
    firstName : "Kanika",
    age : 21,
    about :() => {
        console.log(this.firstName , this.age);
    }
};
user1.about();// gives undefined
user1.about.call(user1); // no effect
// this window object hoga ek level upr dekhta h arrow function
