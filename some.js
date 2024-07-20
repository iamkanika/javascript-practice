//some method
const numbers =[3,5,8,9];
// ek bhi even mila to true return krega
const ans = numbers.some((number)=> number%2===0);
console.log(ans);
const userCart = [
    {productId :1, productName:"mobile", price: 12000},
    {productId :2, productName:"laptop", price: 20000},
    {productId :3, productName:"tv", price: 10000},
];
let ans1 = userCart.some((user)=> user.price>15000);
console.log(ans1);