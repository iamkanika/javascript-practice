const grandParent = document.querySelector(".grandparent");
// grandParent.addEventListener("click", ()=>{
//     console.log("You clicked something!!");
// })
// yha alg alg add karne ki need nhi h kyuki event delegation hora h

grandParent.addEventListener("click", (e)=>{
       console.log(e.target.textContent);
    });
