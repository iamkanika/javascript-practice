// important array methods
//map
//filter
// for each 
// reduce
const numbers = [1,2,3,4,5];
function mul(number , index){
    console.log("index is" , index);
    console.log(`${number}*2 = ${number*2}`);
}
// for( let i=0; i<numbers.length; i++){
//     mul(numbers[i], i);
// }
numbers.forEach(mul);
const users = [
    {firstName : "Kanika", age : 21,},
    {firstName : "Kanak", age :22,},
    {firstName : "Ansh", age :23,},
];
for(let user of users){
    console.log(user.firstName);
}
users.forEach(function(user){
    console.log(user.firstName);
})