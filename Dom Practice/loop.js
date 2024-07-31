let nav = document.getElementsByTagName("a");
console.log(nav);//return html collection
// we cannot use forEach method to iterate through HTMLCollection
//simple for of loop
// for of loop


// for (let i=0; i<navItem.length; i++){
//    const navItems = navItem[i];
//     navItems.style.backgroundColor = "#fff"
//     navItems.style.color = "green";
//     navItems.style.fontWeight = "bold";
//  }




//  for (let navItem of nav){
//     navItem.style.backgroundColor = "#fff"
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

//  }
 // convert HTMLCollection into array
 nav = Array.from(nav);
 console.log(Array.isArray(nav));
 // ab array ke sare looops and methods lag jyenge


 // Node List ko dekhte h ab
 let navItem = document.querySelectorAll("a");
 console.log(navItem);
 
 //  ode list me tino loops use kar skte h 
 for (let i=0; i<navItem.length; i++){
   const navItems = navItem[i];
    navItems.style.backgroundColor = "#fff"
    navItems.style.color = "green";
    navItems.style.fontWeight = "bold";
 }
//  for (let navItems of navItem){
//     navItems.style.backgroundColor = "#fff";
//     navItems.style.color = "green";
//     navItems.style.fontWeight = "bold";

//  }
//  navItem.forEach((navItems)=>{
//     navItems.style.backgroundColor = "#fff";
//     navItems.style.color = "green";
//     navItems.style.fontWeight = "bold";
    
//  })
 // we can also convert node list into array
 navItem = Array.from(navItem);
 console.log(Array.isArray(navItem));