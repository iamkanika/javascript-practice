//find method
const myArray = ["hello", "apple","cat","lion"];
function isLength(string){
    return string.length===3;
}
 let ans = isLength("dog");
 console.log(ans);
let ans1 = isLength("doggy");
console.log(ans1);
 const ans2 = myArray.find(isLength);
console.log(myArray);
console.log(ans2);
const userCart = [
    {productId :1, productName:"mobile", price: 12000},
    {productId :2, productName:"laptop", price: 20000},
    {productId :3, productName:"tv", price: 10000},
];
const myUser= userCart.find((user)=>{
    return user.productId===2;
});
console.log(myUser);