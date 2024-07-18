//object inside array
//very useful in real world applications
const users= [
    {userId:1, firstName :"Kanika", gender: "female"},
    {userId:2, firstName :"Kani", gender: "female"},
    {userId:3, firstName :"Kanak", gender: "female"},
]
console.log(users);
for (let user of users){
    console.log(user);
    console.log(user.userId);
}