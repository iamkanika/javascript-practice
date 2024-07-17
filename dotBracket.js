//differce between dot and bracket operator
const kani = {
    name : "Kanika",
    age: 21,
    "person hobbies" : ["sleeping","eating","dancing", "aaruhilovesyash"]
}
//dot operator 
console.log(kani.name);
//bracket operator
console.log(kani["person hobbies"]);
console.log(kani.name);
const key = "email";
kani.key = "kanikagarg2707@gmail.com";
console.log(kani);
kani[key] = "kanik12";
console.log(kani);