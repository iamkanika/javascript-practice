//object destructuring
const band={
    bandname: "apple",
    famousphone: "iphone",
    year : 2003,
};
const bandname1 = band.bandname;
console.log(bandname1);
//short cut method
const { bandname, famousphone,...restProperty} = band;
console.log(bandname);
console.log(famousphone);
// store in another variable
const { bandname:var1 ,famousphone:var2}= band;
console.log(var1);
console.log(var2);
console.log(restProperty);
//nested destructoing
const users= [
    {userId:1, firstName :"Kanika", gender: "female"},
    {userId:2, firstName :"Kani", gender: "female"},
    {userId:3, firstName :"Kanak", gender: "female"},
]
const [user1, user2, user3]= users;
console.log(user1);
console.log(user2);
console.log(user3);
const [{firstName},  , {gender}] = users;
console.log(firstName);
console.log(gender);