// reduce method
const numbers = [1,2,3,4,5,10];
// sum of all elements
const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(sum);
// accumulator  currentvalue    return
//  1               2               3
//  3               3               6
//  6               4               10
//  10              5               15
//  15              10              25
const userCart = [
    {productId :1, productName:"mobile", price: 12000},
    {productId :2, productName:"laptop", price: 20000},
    {productId :3, productName:"tv", price: 10000},
]
 const totalAmount = userCart.reduce((totalPrice, currentProduct)=> {
    return totalPrice+currentProduct.price;
},0);// we can pass initial values
console.log(totalAmount);