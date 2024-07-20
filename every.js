const numbers = [2,4,6,8,10];
const ans = numbers.every ((number)=>number%2===0);
// function return either true or false 
// every method return true if all element in every return true..
console.log(ans);
const userCart = [
    {productId :1, productName:"mobile", price: 12000},
    {productId :2, productName:"laptop", price: 20000},
    {productId :3, productName:"tv", price: 10000},
];
const ans1 = userCart.every ((userProduct)=>userProduct.price<=30000);
console.log(ans1);