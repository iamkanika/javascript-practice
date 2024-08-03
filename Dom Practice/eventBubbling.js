console.log("hello world");
const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
child.addEventListener("click" , ()=>{
    console.log("You clicked on child!!!")
})
parent.addEventListener("click" , ()=> {
    console.log("you clicked on parent!!");
})
grandParent.addEventListener("click", ()=>{
    console.log("you clicked on grandparent");
})
document.body.addEventListener("click", ()=>{
    console.log("you clicked on body");
})
// child ko click krne se sare event occur hore h 
// isko bolte h event bubbling ya event propogation

// event captiring

child.addEventListener("click" , ()=>{
    console.log("capture child!!!")
} , true);
parent.addEventListener("click" , ()=> {
    console.log("capture parent!!");
} , true);
grandParent.addEventListener("click", ()=>{
    console.log("capture grandparent");
} , true);
document.body.addEventListener("click", ()=>{
    console.log("capture body");
} , true);
// capture upr se niche bubbling apne element thn uske level upr level upr


