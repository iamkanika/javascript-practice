// intro to events
// click
//button press
// mouse hover


// 3 ways to add events
//1. direct html pe add karna
/* <button class="btn btn-headline" onclick="console.log('You clicked me!!')">Learn More</button> 
    //  */

    // second method

const btn= document.querySelector(".btn-headline");
// console.log(btn); // browser representation
// console.dir(btn); // object representation
// btn.onclick = function(){
//     console.log("You clicked me!!!");
// }
// ye trika bhi accha nhi h kyuki isme ek se jyada assign nhinkar skte
 
// third method 
// iska name hai-- addEventListener
function clickMe (){
    console.log("You clicked Meee!!!");
}
// btn.addEventListener("click", clickMe); 
// direct function bhi bna skte h
// btn.addEventListener("click", function(){
//     console.log("you clicked me");
// })
//isme hum arrow functions bhi use kar skte h
btn,addEventListener("click", ()=>{
    console.log("arrow function");
})