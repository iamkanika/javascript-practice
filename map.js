const numbers = [1,2,3,4,5,6];
// map returns new array
const square = function(number){
    return number*number;
}
const squareNumbers = numbers.map(square);
console.log(squareNumbers);
const users = [
    {firstName : "Kanika", age : 21,},
    {firstName : "Kanak", age :22,},
    {firstName : "Ansh", age :23,},
];
const userNames = users.map(function (user){
    return user.firstName;
});
console.log(userNames);