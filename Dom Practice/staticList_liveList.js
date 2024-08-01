// satic list and live list
const listItems= document.querySelectorAll(".todo-list li");
const sixthli = document.createElement("li");
sixthli.textContent = "item6";
const ul = document.querySelector(".todo-list");
ul.append(sixthli);
console.log(listItems);
// yha query selector hume static list degi jisme static (utne) hi elements show honge

// getelementsBy something hume live-list degi 
const listItems1= document.getElementsByTagName("li");
console.log(listItems1); 
// it gives live list
