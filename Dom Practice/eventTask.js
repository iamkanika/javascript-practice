// const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);
// allButtons.forEach(function(button){
//     button.addEventListener("click",(e)=>{
//         console.log(e.target);
//         e.target.style.backgroundColor="yellow";
//         e.target.style.color="#333";
// });
// })


const  mainButton = document.querySelector("button");
const body = document.body;

const currentColor = document.querySelector(".current-color");
function randomColorGenerator(){
    const red = Math.floor(Math.random()  * 256);
    const green = Math.floor(Math.random()  * 256);
    const blue = Math.floor(Math.random()  * 256);
    const randomColor= `rgb(${red}, ${blue}, ${green})`;
    return randomColor;
}

mainButton.addEventListener("click" , ()=>{
    const randomColor= randomColorGenerator();
    console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentColor.textContent= randomColor;

})