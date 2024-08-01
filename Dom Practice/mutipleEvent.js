console.log("hello world");
const firstButton = document.querySelector("#one");
console.log(firstButton);
const secondButton = document.querySelector("#two");
console.log(secondButton);
const thirdButton = document.querySelector("#three");
console.log(thirdButton);
const allButtons = document.querySelectorAll("button");
console.log(allButtons);
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         // console.log("You clicked me..!!!"); 
//         console.log(this); 
//         console.log(this.textContent);
//     })
// }
// for ya foreach bhinuse kar skte h
 for (let i=0; i<allButtons.length; i++){
    allButtons[i].addEventListener("click" , function(){
        console.log(this);
    })
}
// for each loop
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        console.log("You clicked me..!!!"); 
        console.log(this); 
});
})