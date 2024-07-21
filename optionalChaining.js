//opitonal chaining
const user = {
    firstName : "Kanika",
    address : {housenumber :"166"},
    // age :23,
}
console.log(user.firstName);
console.log(user.address);
console.log(user.address.housenumber);
console.log(user?.firstName);
console.log(user?.age);