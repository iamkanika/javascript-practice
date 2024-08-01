const btn= document.querySelector(".btn-headline");
// btn.addEventListener("click", function(){
//    console.log("you clicked me");
//    console.log("value of this");
//    console.log(this); // button khud hoga
//      });
     // arrow function ke case me ye this window object hoga
     btn.addEventListener("click", ()=>{
        console.log("you clicked me");
   console.log("value of this");
   console.log(this);
     })