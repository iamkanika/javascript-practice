// select element by query selector
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);
// we can any element through querySelector
const header =document.querySelector(".header");
console.log(header);
// jitne elements hai jin jinki class same h vo janne  k liye
const navitem = document.querySelectorAll(".nav-items");
console.log(navitem);
// we can also do like this..
const mainh= document.querySelector("div.headline h2");
console.log(mainh);

