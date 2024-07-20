//sort method
const numbers=[1,56,76,45,32,12,78,1200,3000];
// change in main array
// sort in string format ["1","56","76","45",......]
//to sort strings , we use ascii code..
numbers.sort();
console.log(numbers);
//'0' : 48
//'1' : 49
//'2' : 50
//'3' : 51
//'4' : 52
//'5' : 53
//'6' : 54
//'7' : 55
//'8' : 56
//'9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// = : 61 
// > 62
// ? 63
// @ 64

// A ..Z= 65 - 90
// a... z = 97-122
//  
numbers1 =[5,9,1200,410,3000];
numbers1.sort((a,b)=>{
    return a-b;
});
console.log(numbers1);
// a-b == positive b,a
// a-b == negative a,b
const userCart = [
    {productId :1, productName:"mobile", price: 12000},
    {productId :2, productName:"laptop", price: 20000},
    {productId :3, productName:"tv", price: 10000},
]
//lowto high
userCart.sort( (a,b)=> {
    return a.price-b.price;
});
console.log(userCart);

