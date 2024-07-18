//for loop in array
let fruits=["apple","banana","pineapple"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//print in uppercase

for(let a=0; a<fruits.length; a++){
    console.log(fruits[a].toUpperCase());
}
let fruits2=[];
for(let a=0; a<fruits.length; a++){
    fruits2.push(fruits[a].toUpperCase());
}
console.log(fruits2);
//use of constant in arrays
const frt=["apple","mango"];
//we can not write frt=["pinapple "] in case of constant
frt.push("grapes");
console.log(frt);
// but in case of let
let frt2 =["Aaruhi"];
console.log(frt2);
frt2 = ["litchi"];
console.log(frt2);
frt2.push("banana");
console.log(frt2);
