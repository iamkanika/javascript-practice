let firstName = "Kanika";
let age = 21;
let aboutMe = "My name is " + firstName + " and My age is "+ age;
console.log(aboutMe); 
console.log("Using template literals");
let aboutMe2 = `My name is ${firstName} and my age is ${age}`;
console.log(aboutMe2);
//undefined, null and bigint
let myVar;
console.log(typeof myVar);
let myVariable = null;
console.log(typeof myVariable , myVariable);
console.log(typeof null);
let int = 123;
console.log(Number.MAX_SAFE_INTEGER);
let big = BigInt(12);
console.log(big);
big = 12n;


