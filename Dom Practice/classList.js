const sectionTodo= document.querySelector(".section-todo");
console.log(sectionTodo);
console.log(sectionTodo.classList);
sectionTodo.classList.add("bg-dark");
sectionTodo.classList.remove("container");
console.log(sectionTodo.classList);
// to check if it contains any spefic class
const ans = sectionTodo.classList.contains("container");
console.log(ans);


// toggle class
// if class exist then remove if not exist then add
sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark"); 
const header= document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");  
console.log(header.classList);
header.classList.add("bg-dark");
header.classList.toggle("bg-dark");  